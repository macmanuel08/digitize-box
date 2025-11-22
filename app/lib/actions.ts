'use server';

import { z, ZodObject } from 'zod';
import postgres from 'postgres';
import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';
import { signIn } from '@/auth';
import { AuthError } from 'next-auth';
import bcrypt from 'bcrypt';
import { Result } from 'postcss';
import { formatTimestamp } from '@/app/lib/utils';

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
    companyId?: string[];
  };
  values?: {
    firstName?: string;
    lastName?: string;
    email?: string;
    phone?: string;
    appointmentDate?: string;
    appointmentTime?: string;
    companyId?: string;
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
  companyId: z.string(),
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
    companyId: formData.get('companyId')?.toString(),
  };

  const validatedFields = AppointmentSchema.safeParse(values);

  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
      values,
      message: 'Missing Fields. Failed to make an appointment.',
    };
  }

  const { firstName, lastName, email, phone, appointmentDate, appointmentTime, companyId } = validatedFields.data;

  try {
    await sql`
      INSERT INTO appointments (first_name, last_name, email, phone, appointment_date, appointment_time, company_id)
      VALUES (${firstName}, ${lastName}, ${email}, ${phone}, ${appointmentDate}, ${appointmentTime}, ${companyId})`
    ;
  } catch(error) {
    return {message: `Failed to insert appointment`};
  }

  revalidatePath('/dashboard/appointment-success');
  redirect('/dashboard/appointment/appointments-calendar');
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

export async function getAppointmentInfoById(id: string) {
  const info = await sql`
    SELECT email, appointment_date
    FROM appointments
    WHERE id = ${id}
  `;

  return info[0];
}

export type UserState = {
  errors?: {
    firstName?: string[];
    lastName?: string[];
    email?: string[];
    phone?: string[];
    password?: string[];
    role?: string[];
    companyId?: string[];
  };
  values?: {
    firstName?: string;
    lastName?: string;
    email?: string;
    phone?: string;
    password?: string;
    role?: string;
    companyId?: string;
  };
  message?: string | null;
};

const SignUpSchema = z.object({
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
    required_error: 'Phone is required.',
  })
  .min(1, { message: 'Please provide your phone number.' })
  .regex(/^(?:\+639|09)\d{9}$/, {
    message: 'Invalid Philippine phone number format. 09171234567 or +639171234567',
  }),
  password: z.string({
    required_error: 'Password is required.',
  })
  .min(8, { message: 'Password must be at least 8 characters long.' })
  .regex(/[A-Z]/, { message: 'Password must contain at least one uppercase letter.' })
  .regex(/[a-z]/, { message: 'Password must contain at least one lowercase letter.' })
  .regex(/[0-9]/, { message: 'Password must contain at least one number.' })
  .regex(/[^A-Za-z0-9]/, { message: 'Password must contain at least one special character.' }),
  role: z.enum(['doctor', 'admin', 'staff'], {
    invalid_type_error: 'Please provide your role.',
  }),
  companyId: z.string(),
});

export async function createUser(
  prevState: UserState | undefined,
  formData: FormData
): Promise<UserState | undefined> {
  
  const values = {
    firstName: formData.get('firstName')?.toString() || '',
    lastName: formData.get('lastName')?.toString() || '',
    email: formData.get('email')?.toString() || '',
    phone: formData.get('phone')?.toString() || '',
    password: formData.get('password')?.toString() || '',
    role: formData.get('role')?.toString() || '',
    companyId: formData.get('companyId')?.toString() || '',
  };

  const validatedFields = SignUpSchema.safeParse(values);

  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
      values,
      message: 'Missing Fields. Failed to create an account.',
    };
  }

  const { firstName, lastName, email, phone, password, role, companyId } = validatedFields.data;

  const hashedPassword = await bcrypt.hash(password, 10);

  try {
    await sql`
      INSERT INTO users (first_name, last_name, email, phone, password, role, company_id )
      VALUES (${firstName}, ${lastName}, ${email}, ${phone}, ${hashedPassword}, ${role}, ${companyId})`
    ;
  } catch(error) {
    return {message: `Failed to sign up`};
  }

  redirect(`/payment/${companyId}/`);
}

export type CompanyState = {
  errors?: {
    name?: string[];
    industry?: string[];
  };
  values?: {
    name?: string;
    industry?: string;
  };
  message?: string | null;
};

const CompanySchema = z.object({
	name: z.string({
		required_error: "Please provide your company's name.",
	}).min(1, {
		message: "Please provide your company's name.",
	}),
	  industry: z.string({
    required_error: 'Please specify your industry (e.g. dental, optometry, veterinary, etc.)'
  }),
});

export async function createCompany(
  prevState: CompanyState| undefined,
  formData: FormData
): Promise<CompanyState | undefined> {

  const values = {
    name: formData.get('name')?.toString() || '',
    industry: formData.get('industry')?.toString() || '',
  }

  const validatedFields = CompanySchema.safeParse(values);

  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
      values,
      message: 'Missing Fields. Failed to register the company.',
    };
  }

  const { name, industry } = validatedFields.data;

  let result;

  try{
      result = await sql`
      INSERT INTO companies (name, industry)
      VALUES (${name}, ${industry})
      RETURNING id
    `;
  } catch (error) {
    return {message: `Failed to register the company`};
  }
  
  const id = result[0].id;
  redirect(`/signup/${id}/personal-info`);
}

export type PaymentState = {
  errors?: {
    company_id?: string[];

    //payments
    payment_reference_id?: string[];
    amount?: string[];
    method?: string[];
  };
  values?: {
    company_id?: string;

    //payments
    payment_reference_id?: string;
    amount?: string;
    method?: string;
  };
  message?: string | null;
};

const PaymentSchema = z.object({
  company_id: z.string(),
	payment_reference_id: z.string({
		required_error: "Please provide reference/transaction number of your payment (see example screenshot).",
	}).min(1, {
		message: "Please provide reference/transaction number of your payment (see example screenshot).",
	}),
	amount: z.coerce
    .number()
    .gt(0, { message: 'Please enter an amount greater than ₱0.' }),
  method: z.string({
    required_error: "Please proveide your payment method (e.g. GCash, Maya, Bank Transfer)."
  })
});

export async function createPayment(
  prevState: PaymentState| undefined,
  formData: FormData
): Promise<PaymentState | undefined> {

  const values = {
    company_id: formData.get('company_id')?.toString() || '',
    payment_reference_id: formData.get('payment_reference_id')?.toString() || '',
    amount: formData.get('amount')?.toString(),
    method: formData.get('method')?.toString() || '',
  }

  const validatedFields = PaymentSchema.safeParse(values);

  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
      values,
      message: 'Missing Fields. Failed to make a payment.',
    };
  }

  const { company_id, payment_reference_id, amount, method } = validatedFields.data;

  const amountInCents: number = Number(amount) * 100;

  let today = new Date();
  today.setDate(today.getDate() + 30);

  const endDate = formatTimestamp(today);

  try{
    const result = await sql`
      INSERT INTO subscriptions (end_date, next_billing_date, company_id)
      VALUES (${endDate}, ${endDate}, ${company_id})
      RETURNING id
    `;

    const subscription_id: string = result[0].id;

    await sql`
      INSERT INTO payments (subscription_id, payment_reference_id, amount, method)
      VALUES (${subscription_id}, ${payment_reference_id}, ${amountInCents}, ${method})
    `;
  } catch (error) {
    console.log(error);
    return {message: `Failed to make a payment`};
  }
  
  redirect('/payment/thanks');
}