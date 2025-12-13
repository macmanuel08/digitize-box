import { lusitana } from "@/app/ui/fonts";
import { auth } from '@/auth';
import AppointmentCalendar from "@/app/ui/appointment/appointment-calendar";

export default async function AppointmentCalendarPage() {
    const session = await auth();
    const companyId = session?.user.company_id ?? '';

    return (
        <div>
            <h1 className={`${lusitana.className} text-2xl mb-4`}>Appointment Calendar</h1>
            <p className="mb-12">
                This page is a demonstration of the appointment scheduling feature, typically used by administrators and staff.
                <br /><br />
                For demo purposes, interact by clicking the appointment you scheduled using your email address. You can confirm, cancel, or mark it as completed to see how automated email notifications are sent.
            </p>
            <AppointmentCalendar companyId={companyId} />
        </div>
    );
}
