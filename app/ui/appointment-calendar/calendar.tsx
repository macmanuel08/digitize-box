"use client";

import { CalendarIcon, ChevronLeft, ChevronRight } from "lucide-react";
import { useState, useEffect } from "react";
import { generateCalendar } from "@/app/lib/helpers";
import { fetchAppointments } from "@/app/actions/appointments";
import { Row } from "postgres";
import { AppointmentModalProvider } from "@/app/ui/appointment-calendar/appointment-modal-context";
import CalendarMonth from "@/app/ui/appointment-calendar/calendar-month";
import { updateAppointmentsStatus } from "@/app/lib/actions";

//import CalendarMonth from "@/app/ui/calendar-month";

export default function Calendar({
    companyId
}: {
    companyId: string,
}) {
    const currentMonth = new Date().getMonth();
    const currentYear = new Date().getFullYear();

    const [month, setMonth] = useState(currentMonth);
    const [year, setYear] = useState(currentYear);
    const [appointments, setAppointments] = useState<Row[]>([]);

    function updateAppointmentStatusUI(updatedId: string, newStatus: "pending" | "confirmed" | "completed" | "canceled") {
        setAppointments((prev) => {
            return prev.map(appointment => {
                return appointment.id == updatedId ? {...appointment, status: newStatus} : appointment;
            });
        });
    }

    const monthsArray = ["January","February","March","April","May","June","July","August","September","October","November","December"];
    const daysArray = generateCalendar(month, year);

    useEffect(() => {
        const loadData = async () => {
            const fetchedAppoinments = await fetchAppointments(companyId, month, year);
            setAppointments(fetchedAppoinments);
        }
        loadData();
    }, [month, year]);

    function toggleNextMonth() {
        if (month == 11) {
            setYear(prev => prev + 1);
            setMonth(0);
        } else {
            setMonth(prev => prev + 1);
        }
    }

    function togglePrevMonth() {
        if (month == 0) {
            setYear(prev => prev - 1);
            setMonth(11);
        } else {
            setMonth(prev => prev - 1);
        }
    }
    
    return (
        <AppointmentModalProvider>
            <div className="max-w-6xl mx-auto bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden">
                {/* Calendar Top Toolbar */}
                <div className="p-6 flex flex-col sm:flex-row items-center justify-between gap-4 border-b border-slate-200">
                    <h2 className="text-2xl font-bold text-slate-800 flex items-center gap-2">
                        <CalendarIcon className="w-6 h-6 text-blue-600" />
                        {monthsArray[month]} {year}
                    </h2>
                    
                    <div className="flex items-center gap-3">
                        {/* <button className="px-4 py-2 text-sm font-semibold text-slate-700 bg-white border border-slate-300 rounded-lg hover:bg-slate-50 transition shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500">
                            Today
                        </button> */}
                        <div className="flex items-center rounded-lg shadow-sm border border-slate-300 overflow-hidden">
                            <button onClick={togglePrevMonth} className="p-2 bg-white text-slate-600 hover:bg-slate-50 hover:text-blue-600 transition border-r border-slate-300 focus:outline-none cursor-pointer">
                                <ChevronLeft className="w-5 h-5" />
                            </button>
                            <button onClick={toggleNextMonth} className="p-2 bg-white text-slate-600 hover:bg-slate-50 hover:text-blue-600 transition focus:outline-none cursor-pointer">
                                <ChevronRight className="w-5 h-5" />
                            </button>
                        </div>
                    </div>
                </div>
                <CalendarMonth updateAppointmentsStatus={updateAppointmentsStatus} currentMonth={currentMonth == month} currentYear={currentYear == year} monthAppointments={appointments} daysArray={daysArray} updateAppointmentStatusUI={updateAppointmentStatusUI} />
            </div>
        </AppointmentModalProvider>
    )
}