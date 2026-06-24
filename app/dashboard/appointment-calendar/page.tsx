import { auth } from '@/auth';
import Calendar from '@/app/ui/appointment-calendar/calendar';

export default async function AppointmentCalendarPage() {
    const session = await auth();
    const companyId = session?.user.company_id ?? '';
    
    /*[{{
        id: '00b09b9c-e344-40a4-be37-389435067198',
        first_name: 'Joe',
        last_name: 'Smith',
        email: 'j.smith@mail.com',
        phone: '1234567890',
        status: 'completed',
        appointment_time: '10:30:00',
        appointment_date: 2026-04-22T00:00:00.000Z
    },}] */

    

    return (
        <Calendar companyId={companyId} />
    )
}