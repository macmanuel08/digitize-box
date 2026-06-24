import { lusitana } from "@/app/ui/fonts";
import { auth } from '@/auth';
import AppointmentCalendar from "@/app/ui/appointment/appointment-calendar";

export default async function AppointmentCalendarPage() {
    const session = await auth();
    const companyId = session?.user.company_id ?? '';

    return (
        <div>
            <h1 className={`${lusitana.className} text-2xl mb-4`}>Appointment Calendar</h1>
            <h2 className={`${lusitana.className} text-xl mb-4`}>Doctor/Admin's Calendar Dashboard</h2>
            <p className="mb-4">
                Legends below show the status of each appointment. Interact by clicking each scheduled appointment. You can confirm, cancel, or mark it as completed.When an appointment is canceled or corfirmed, an automated email will be sent to notify the patient.
            </p>
            <div className="legends mb-12 text-gray-600 text-sm">
                <div className="flex items-center gap-1"><div className="w-3 h-3 bg-[#f2a900]"></div>Pending</div>
                <div className="flex items-center gap-1"><div className="w-3 h-3 bg-[#19467a]"></div>Confirmed</div>
                <div className="flex items-center gap-1"><div className="w-3 h-3 bg-[#ff0f0f]"></div>Canceled</div>
                <div className="flex items-center gap-1"><div className="w-3 h-3 bg-[#22c55e]"></div>Completed</div>
            </div>
            <AppointmentCalendar companyId={companyId} />
        </div>
    );
}
