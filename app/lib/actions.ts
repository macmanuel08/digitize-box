'use server';

import { z, ZodObject } from 'zod';
import postgres from 'postgres';
import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';
import { signIn } from '@/auth';
import { AuthError } from 'next-auth';

const sql = postgres(process.env.POSTGRES_URL!, { ssl: 'require' });

const FormSchema = z.object({
  id: z.string(),
  customerId: z.string({
    invalid_type_error: 'Please select a customer.',
  }),
  amount: z.coerce
    .number()
    .gt(0, { message: 'Please enter an amount greater than $0.' }),
  status: z.enum(['pending', 'paid'], {
    invalid_type_error: 'Please select an invoice status.',
  }),
  date: z.string(),
});

const CreateInvoice = FormSchema.omit({ id: true, date: true });
const UpdateInvoice = FormSchema.omit({ date: true, id: true });

export type State = {
  errors?: {
    customerId?: string[];
    amount?: string[];
    status?: string[];
  };
  message?: string | null;
};

export async function createInvoice(prevState: State, formData: FormData) {
  // Validate form fields using Zod
  const validatedFields = CreateInvoice.safeParse({
    customerId: formData.get('customerId'),
    amount: formData.get('amount'),
    status: formData.get('status'),
  });

  // If form validation fails, return errors early. Otherwise, continue.
  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
      message: 'Missing Fields. Failed to Create Invoice.',
    };
  }

  // Prepare data for insertion into the database
  const { customerId, amount, status } = validatedFields.data;
  const amountInCents = amount * 100;
  const date = new Date().toISOString().split('T')[0];

  // Insert data into the database
  try {
    await sql`
      INSERT INTO invoices (customer_id, amount, status, date)
      VALUES (${customerId}, ${amountInCents}, ${status}, ${date})
    `;
  } catch (error) {
    // If a database error occurs, return a more specific error.
	console.log(customerId)
    return {
      message: `Database Error: Failed to Create Invoice. ${error}`,
    };
  }

  // Revalidate the cache for the invoices page and redirect the user.
  revalidatePath('/dashboard/invoices');
  redirect('/dashboard/invoices');
}

export async function updateInvoice(
  id: string,
  prevState: State,
  formData: FormData,
) {
  const validatedFields = UpdateInvoice.safeParse({
    customerId: formData.get('customerId'),
    amount: formData.get('amount'),
    status: formData.get('status'),
  });

  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
      message: 'Missing Fields. Failed to Update Invoice.',
    };
  }

  const { customerId, amount, status } = validatedFields.data;
  const amountInCents = amount * 100;

  try {
    await sql`
      UPDATE invoices
      SET customer_id = ${customerId}, amount = ${amountInCents}, status = ${status}
      WHERE id = ${id}
    `;
  } catch (error) {
    return { message: 'Database Error: Failed to Update Invoice.' };
  }

  revalidatePath('/dashboard/invoices');
  redirect('/dashboard/invoices');
}

export async function deleteInvoice(id: string) {
  await sql`DELETE FROM invoices WHERE id = ${id}`;
  revalidatePath('/dashboard/invoices');
}

export async function authenticate(
  prevState: string | undefined,
  formData: FormData,
) {
  try {
    await signIn('credentials', formData);
  } catch (error) {
    if (error instanceof AuthError) {
      switch (error.type) {
        case 'CredentialsSignin':
          return 'Invalid credentials.';
        default:
          return 'Something went wrong.';
      }
    }
    throw error;
  }
}

export type AppointmentState = {
  errors?: {
    firstName?: string[];
    lastName?: string[];
    email?: string[];
    phone?: string[];
    appointmentDate?: string[];
    appointmentTime?: string[];
  };
  values?: {
    firstName?: string;
    lastName?: string;
    email?: string;
    phone?: string;
    appointmentDate?: string;
    appointmentTime?: string;
  };
  message?: string | null;
};

const AppointmentSchema = z.object({
	firstName: z.string({
		required_error: 'Please provide your first name.',
	}).min(1, {
		message: 'Please provide your first name.',
	}),
	lastName: z.string({
		required_error: 'Please provide your last name.',
	}).min(1, {
		message: 'Please provide your last name.',
	}),
	email: z.string({
		invalid_type_error: 'Please provide your email.',
		required_error: 'Email is required.'
	}).trim().email({
		message: 'Please provide your email in the right format (e.g. example@digitizebox.com).'
	}),
	phone: z.string({
		required_error: 'Phone is required.'
	}).min(1, {
		message: 'Please provide your phone number.',
	}),
	appointmentDate: z.string({
		required_error: 'Please select date.'
	}).min(1, {
		message: 'Please select date.',
	}),
	appointmentTime: z.string().min(1, {
		message: 'Please select time',
	}),
});

export async function createAppointment(
  prevState: AppointmentState | undefined,
  formData: FormData
): Promise<AppointmentState | undefined> {
  
  const values = {
    firstName: formData.get('firstName')?.toString() || '',
    lastName: formData.get('lastName')?.toString() || '',
    email: formData.get('email')?.toString() || '',
    phone: formData.get('phone')?.toString() || '',
    appointmentDate: formData.get('appointmentDate')?.toString() || '',
    appointmentTime: formData.get('appointmentTime')?.toString() || '',
  };

  const validatedFields = AppointmentSchema.safeParse(values);

  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
      values,
      message: 'Missing Fields. Failed to make an appointment.',
    };
  }

  const { firstName, lastName, email, phone, appointmentDate, appointmentTime } = validatedFields.data;

  try {
    await sql`
      INSERT INTO appointments (first_name, last_name, email, phone, appointment_date, appointment_time)
      VALUES (${firstName}, ${lastName}, ${email}, ${phone}, ${appointmentDate}, ${appointmentTime})`
    ;
  } catch(error) {
    return {message: `Failed to insert appointment`};
  }

  revalidatePath('/dashboard/appointment-success');
  redirect('/dashboard/appointment/appointment-success');
}

export async function getTakenTimeslots(date: Date): Promise<string[] | null> {
  try {
    const results = await sql`
      SELECT appointment_time FROM appointments WHERE appointment_date = ${date};
    `;

    const availableTimeslots = results.map(result => result.appointment_time);
    return availableTimeslots;
  } catch(error) {
    console.log('reading time failed')
    return null
  }
}

const updateAppointmentsStatusSchema = z.object({
  id: z.string(),
  status: z.enum(['pending', 'confirmed', 'completed', 'canceled'])
});

type AppointmentType = {
  id: string;
  appointment_date: string;
  appointment_time: string;
  first_name: string;
  last_name: string;
  email: string;
  phone: string;
  status: 'pending' | 'confirmed' | 'completed' | 'canceled';
};

export async function getAppointments(): Promise<AppointmentType[]> {
  const result = await sql<AppointmentType[]>`
    SELECT id, appointment_date, appointment_time, first_name, last_name, email, phone, status
    FROM appointments
  `;
  return result;
}

export async function updateAppointmentsStatus(data: unknown) {
  const parsed = updateAppointmentsStatusSchema.parse(data);
  return await sql`
    UPDATE appointments
    SET status = ${parsed.status}
    WHERE id = ${parsed.id}
  `;
}

