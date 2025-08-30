'use server';

import { Resend } from 'resend';
import { getAppointmentInfoById } from './actions';

const resend = new Resend(process.env.Resend_API_Key);

export async function sendAppointmentEmail({
    userId,
    subject,
    status,
}: {
    userId: string,
    subject: string,
    status: string
}) {
    const { email, appointment_date } = await getAppointmentInfoById(userId);
    const date = appointment_date.toLocaleDateString('en-US', {
        weekday: 'short',
        day: '2-digit',
        month: 'short',
        year: 'numeric',
    });

    const html = `
        <div style="font-family: Arial, sans-serif; background-color:#f9fafb; padding:20px;">
            <div style="max-width:600px; margin:auto; background:white; border-radius:12px; box-shadow:0 2px 8px rgba(0,0,0,0.05); overflow:hidden;">
            
            <!-- Header -->
            <div style="background-color:#0047BA; color:white; padding:20px; text-align:center;">
                <h1 style="margin:0; font-size:22px; font-weight:600;">Appointment Status Update</h1>
            </div>
            
            <!-- Body -->
            <div style="padding:20px; color:#333; font-size:16px; line-height:1.5;">
                <p style="margin-bottom:16px;">We would like to notify you that the status of your appointment on <em>${date}</em> is <strong>${status}<strong>.</p>

            </div>
            
            <!-- Footer -->
            <div style="padding:16px; text-align:center; font-size:12px; color:#666; border-top:1px solid #eee;">
                © ${new Date().getFullYear()} DigitizeBox
            </div>
            </div>
        </div>
  `;

    try {
        await resend.emails.send({
            from: 'onboarding@resend.dev',
            to: email,
            subject,
            html,
        })
        return { success: true };
    } catch (error) {
        console.error('Email error:', error);
        return { success: false, error };
    }
}