'use server';

import { Resend } from 'resend';
import { getAppointmentInfoById } from './actions';
import { formatTo12Hour } from './data';

const resend = new Resend(process.env.Resend_API_Key);

export async function sendAppointmentEmail({
    userId,
    status,
}: {
    userId: string,
    status: string
}) {
    const { patient_first_name, patient_last_name, patient_email, appointment_date, appointment_time, business_name, admin_phone, admin_email } = await getAppointmentInfoById(userId);
    const date = appointment_date.toLocaleDateString('en-US', {
        weekday: 'short',
        day: '2-digit',
        month: 'short',
        year: 'numeric',
    });

    const subject = `${business_name} Appointment Status: ${status.toUpperCase()}`

    const formattedAppointmentTime = formatTo12Hour(appointment_time);

    const html = `
        <div style="font-family: Arial, sans-serif; background-color:#f9fafb; padding:20px;">
            <div style="max-width:600px; margin:auto; background:white; border-radius:12px; box-shadow:0 2px 8px rgba(0,0,0,0.05); overflow:hidden;">
            
            <!-- Header -->
            <div style="background-color:#002e5d; color:white; padding:20px; text-align:center;">
                <h1 style="margin:0; font-size:22px; font-weight:600;">${business_name} Appointment Status Update</h1>
            </div>
            
            <!-- Body -->
            <div style="padding:20px; color:#333; font-size:16px; line-height:1.5;">
                <p style="margin-bottom:16px;">Hello ${patient_first_name} ${patient_last_name},<br><br> We would like to notify you that the status of your appointment on <em>${date}</em> at <em>${formattedAppointmentTime}</em> is <strong>${status}<strong>.</p>
                <p style="margin-bottom:16px;">If you have any concerns please contact us at ${admin_phone} or send us an email at ${admin_email}</p>
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
            to: patient_email,
            subject,
            html,
        })
        return { success: true };
    } catch (error) {
        console.error('Email error:', error);
        return { success: false, error };
    }
}