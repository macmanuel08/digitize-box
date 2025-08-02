'use client';

import { AppointmentForm } from '@/app/lib/definitions';
import { UserCircleIcon, PhoneIcon, CalendarIcon, ClockIcon } from '@heroicons/react/24/outline';
import { Button } from '@/app/ui/button';
import { createAppointment, AppointmentState } from '@/app/lib/actions';
import { useActionState } from 'react';

export default function Form() {
  const initialState: AppointmentState = { errors: {}, message: null, };
  const [state, formAction] = useActionState(createAppointment, initialState);
  const safeState = state ?? initialState;

  return (
    <form action={formAction}>
      <div className="rounded-md bg-gray-50 p-4 md:p-6">
        {/* First Name */}
        <div className="mb-4">
          <label htmlFor="firstName" className="mb-2 block text-sm font-medium">
            Enter Your First Name
          </label>
          <div className="relative">
            <input
              id="firstName"
              name="firstName"
              type="text"
              placeholder="First Name"
              className="peer block w-full rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
              aria-describedby="firstname-error"
            />
            <UserCircleIcon className="pointer-events-none absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-500 peer-focus:text-gray-900" />
          </div>
          <div id="firstname-error" aria-live="polite">
            {safeState.errors?.firstName?.map((error) => (
              <p key={error} className="text-sm text-red-500 mt-2">{error}</p>
            ))}
          </div>
        </div>

        {/* Last Name */}
        <div className="mb-4">
          <label htmlFor="lastName" className="mb-2 block text-sm font-medium">
            Enter Your Last Name
          </label>
          <div className="relative">
            <input
              id="lastName"
              name="lastName"
              type="text"
              placeholder="Last Name"
              className="peer block w-full rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
              aria-describedby="lastname-error"
            />
            <UserCircleIcon className="pointer-events-none absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-500 peer-focus:text-gray-900" />
          </div>
          <div id="lastname-error" aria-live="polite">
            {safeState.errors?.lastName?.map((error) => (
              <p key={error} className="text-sm text-red-500 mt-2">{error}</p>
            ))}
          </div>
        </div>

        {/* Email */}
        <div className="mb-4">
          <label htmlFor="email" className="mb-2 block text-sm font-medium">
            Enter Your Email Address
          </label>
          <div className="relative">
            <input
              id="email"
              name="email"
              type="email"
              placeholder="Email"
              className="peer block w-full rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
              aria-describedby="email-error"
            />
            <UserCircleIcon className="pointer-events-none absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-500 peer-focus:text-gray-900" />
          </div>
          <div id="email-error" aria-live="polite">
            {safeState.errors?.email?.map((error) => (
              <p key={error} className="text-sm text-red-500 mt-2">{error}</p>
            ))}
          </div>
        </div>

        {/* Phone */}
        <div className="mb-4">
          <label htmlFor="phone" className="mb-2 block text-sm font-medium">
            Enter Your Phone Number
          </label>
          <div className="relative">
            <input
              id="phone"
              name="phone"
              type="text"
              placeholder="Phone Number"
              className="peer block w-full rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
              aria-describedby="phone-error"
            />
            <PhoneIcon className="pointer-events-none absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-500 peer-focus:text-gray-900" />
          </div>
          <div id="phone-error" aria-live="polite">
            {safeState.errors?.phone?.map((error) => (
              <p key={error} className="text-sm text-red-500 mt-2">{error}</p>
            ))}
          </div>
        </div>

        {/* Appointment Date */}
        <div className="mb-4">
          <label htmlFor="appointmentDate" className="mb-2 block text-sm font-medium">
            Appointment Date
          </label>
          <div className="relative">
            <input
              id="appointmentDate"
              name="appointmentDate"
              type="date"
              className="peer block w-full rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
              aria-describedby="appointmentDate-error"
            />
            <CalendarIcon className="pointer-events-none absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-500 peer-focus:text-gray-900" />
          </div>
          <div id="appointmentDate-error" aria-live="polite">
            {safeState.errors?.appointmentDate?.map((error) => (
              <p key={error} className="text-sm text-red-500 mt-2">{error}</p>
            ))}
          </div>
        </div>

        {/* Appointment Time */}
        <div className="mb-4">
          <label htmlFor="appointmentTime" className="mb-2 block text-sm font-medium">
            Appointment Time
          </label>
          <div className="relative">
            <input
              id="appointmentTime"
              name="appointmentTime"
              type="time"
              className="peer block w-full rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
              aria-describedby="appointmentTime-error"
            />
            <ClockIcon className="pointer-events-none absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-500 peer-focus:text-gray-900" />
          </div>
          <div id="appointmentTime-error" aria-live="polite">
            {safeState.errors?.appointmentTime?.map((error) => (
              <p key={error} className="text-sm text-red-500 mt-2">{error}</p>
            ))}
          </div>
        </div>

        {/* Global Message */}
        <div aria-live="polite" aria-atomic="true">
          {safeState.message && <p className="mt-2 text-sm text-red-500">{safeState.message}</p>}
        </div>

        {/* Submit Button */}
        <div className="mt-6">
          <Button type="submit">Make Appointment</Button>
        </div>
      </div>
    </form>
  );
}