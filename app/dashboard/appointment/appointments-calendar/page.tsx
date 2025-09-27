'use client';

import { useEffect, useState } from "react";
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from '@fullcalendar/interaction';
import Swal from 'sweetalert2';
import { sendAppointmentEmail } from "@/app/lib/sendEmail";
import { lusitana } from "@/app/ui/fonts";

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

type CalendarEvent = {
    id: string;
    title: string;
    start: string;
    backgroundColor: string;
};

export default function AppointmentCalendarPage() {
    const [events, setEvents] = useState<CalendarEvent[]>([]);

    const fetchAppointments = async () => {
        const res = await fetch('/api/appointments', { cache: 'no-store' });
        const data: AppointmentType[] = await res.json();

        const events = data.map((appointment) => {
            const datePart = appointment.appointment_date.split('T')[0];

            let timePart = appointment.appointment_time;
            if (/^\d{2}:\d{2}$/.test(timePart)) {
            timePart += ':00';
            }

            const backgroundColor =
            appointment.status === 'confirmed' ? '#19467a' :
            appointment.status === 'canceled' ? '#ff0f0f' :
            appointment.status === 'completed' ? '#22c55e' :
            '#f2a900';

            return {
                id: appointment.id,
                title: `${appointment.first_name} ${appointment.last_name}`,
                start: `${datePart}T${timePart}`,
                backgroundColor,
            };
        });

        setEvents(events);
    };

    const updateStatus = async (id: string, status: AppointmentType['status']) => {
        await fetch('/api/appointments', {
            method: 'PATCH',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ id, status })
        });
        
        await sendAppointmentEmail({userId: id, subject: 'DigitizeBox Appointment Status Update', status});

        await fetchAppointments();
    };

    useEffect(() => {
        fetchAppointments();
    }, []);

    return (
        <div>
            <h1 className={`${lusitana.className} text-2xl mb-4`}>Appointment Calendar</h1>
            <p className="mb-12">
                This page is a demonstration of the appointment scheduling feature, typically used by administrators and staff.
                <br /><br />
                For demo purposes, interact by clicking the appointment you scheduled using your email address. You can confirm, cancel, or mark it as completed to see how automated email notifications are sent.
            </p>
            <FullCalendar
                plugins={[dayGridPlugin, interactionPlugin]}
                initialView="dayGridMonth"
                events={events}
                eventDisplay="block"
                height="auto"
                eventClick={async (info) => {
                    info.jsEvent.preventDefault();

                    const { value: newStatus } = await Swal.fire({
                        title: 'Update Appointment Status',
                        input: 'select',
                        inputOptions: {
                            pending: 'Pending',
                            confirmed: 'Confirmed',
                            completed: 'Completed',
                            canceled: 'Canceled'
                        },
                        confirmButtonColor: '#0047BA',
                        inputValue: info.event.extendedProps.status || 'pending',
                        showCancelButton: true,
                        confirmButtonText: 'Save',
                        cancelButtonText: 'Cancel'
                    });

                    if (newStatus && ['pending', 'confirmed', 'completed', 'canceled'].includes(newStatus)) {
                        updateStatus(info.event.id, newStatus);
                    }
                }}
            />
        </div>
    );
}
