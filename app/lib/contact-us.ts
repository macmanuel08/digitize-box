"use server";

import { z } from "zod";
import { resend } from "@/app/lib/resend";

const schema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.string().email("Invalid email address"),
  message: z.string().min(1, "Message is required"),
});

export type FormState = {
  errors?: {
    name?: string[];
    email?: string[];
    message?: string[];
  };
  success?: boolean;
};

export async function sendEmail(
  prevState: FormState,
  formData: FormData
): Promise<FormState> {
  const parsed = schema.safeParse({
    name: formData.get("name"),
    email: formData.get("email"),
    message: formData.get("message"),
  });

  if (!parsed.success) {
    return {
      errors: parsed.error.flatten().fieldErrors,
    };
  }

  try {
    await resend.emails.send({
      from: "Contact <onboarding@resend.dev>",
      to: ["manueljm016@gmail.com"],
      subject: `New Contact Message: ${parsed.data.name}`,
      html: `
        <p>Name: ${parsed.data.name}</p>
        <p>Email: ${parsed.data.email}</p>
        <p>${parsed.data.message}</p>
      `,
    });

    return { success: true };
  } catch {
    return {
      errors: {
        message: ["Failed to send email. Please try again."],
      },
    };
  }
}
