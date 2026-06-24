'use client';

import CalendarDay from "@/app/ui/appointment-calendar/calendar-day";
import AppointmentModal from "@/app/ui/appointment-calendar/appointment-modal";
import { AppointmentType, AppointmentType2 } from "@/app/lib/definitions";
import { RowList, Row } from "postgres";
import { useAppointmentModal } from "@/app/ui/appointment-calendar/appointment-modal-context";

export default function CalendarMonth({
    daysArray,
    monthAppointments,
    currentMonth,
    currentYear,
    updateAppointmentsStatus,
    updateAppointmentStatusUI,
}: {
    daysArray: (number | null)[],
    monthAppointments: Row[],
    currentMonth: boolean,
    currentYear: boolean,
    updateAppointmentsStatus: (data: {id: string, status: string}) => Promise<RowList<Row[]>>,
    updateAppointmentStatusUI: (updatedId: string, newStatus: "pending" | "confirmed" | "completed" | "canceled") => void;
}) {

    const {
        selectedAppointment,
        closeModal,
    } = useAppointmentModal();

    const isOpen = selectedAppointment !== null;

    const currentMonthYear = currentMonth && currentYear;

    return (
        <>
            { isOpen && <AppointmentModal toggleModal={closeModal} patient={selectedAppointment} updateAppointmentsStatus={updateAppointmentsStatus} updateAppointmentStatusUI={updateAppointmentStatusUI} />}
            <div className="calendar bg-slate-100">
                <div className="grid grid-cols-7 bg-slate-50 border-b border-slate-200">
                    <div className="py-3 text-center text-xs font-bold text-slate-500 uppercase tracking-wider">Sun</div>
                    <div className="py-3 text-center text-xs font-bold text-slate-500 uppercase tracking-wider">Mon</div>
                    <div className="py-3 text-center text-xs font-bold text-slate-500 uppercase tracking-wider">Tue</div>
                    <div className="py-3 text-center text-xs font-bold text-slate-500 uppercase tracking-wider">Wed</div>
                    <div className="py-3 text-center text-xs font-bold text-slate-500 uppercase tracking-wider">Thu</div>
                    <div className="py-3 text-center text-xs font-bold text-slate-500 uppercase tracking-wider">Fri</div>
                    <div className="py-3 text-center text-xs font-bold text-slate-500 uppercase tracking-wider">Sat</div>
                </div>

                <div className="calendar-month grid grid-cols-7 gap-px bg-slate-200" id="calendarGrid">
                    {
                        daysArray!.map((day, index) => {
                            const matchedAppointments = monthAppointments.filter(appointment => {
                                const date = new Date(appointment.appointment_date);
                                const localDay = date.getDate();
                                return localDay === day;
                            }) as AppointmentType[];

                        const matched = {
                            appointments: matchedAppointments
                        };
                            
                        if (matched) {
                            return (
                                <CalendarDay
                                    key={index}
                                    appointments={matched.appointments}
                                    day={day!}
                                    currentMonthYear={currentMonthYear}
                                />
                            );
                        }

                        return (
                            <CalendarDay
                                key={index}
                                appointments={[]}
                                day={day!}
                                currentMonthYear={currentMonthYear}
                            />
                        );
                    })
                    }
                    
                </div>
            
            </div>
        </>
    );
}