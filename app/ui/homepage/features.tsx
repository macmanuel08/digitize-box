import Link from "next/link";
import { CalendarDaysIcon, WindowIcon, EnvelopeIcon } from "@heroicons/react/24/outline";

export default function Features() {
    return (
        <section className="pt-12 pb-16 max-w-[1440px] w-4/5 mx-auto">
            <p className="font-body uppercase tracking-widest text-center lg:text-xl text-md">Scheduling system</p>
            <h2 className="font-heading text-center text-3xl font-semibold text-blue-600">Current features</h2>

            <div className="mt-12 flex gap-6 lg:flex-row flex-col justify-center">
                <div className="bg-white rounded-xl border-2 p-6 border-solid border-gray-300 lg:w-[calc(33.33%-4rem)] w-full">
                    <div className="w-14 h-14 rounded-full bg-blue-600 grid place-items-center">
                        <WindowIcon className="w-8 text-white" />
                    </div>
                    <h3 className="mt-6 font-heading text-xl font-semibold text-blue-600">Digital form</h3>
                    <p className="font-body text-md mt-2">Patients will be at ease when requesting an appointment. Just fill out an online form. No more back and forth messaging or call. Plus, 24/7 available.</p>
                </div>
                <div className="bg-white rounded-xl border-2 p-6 border-solid border-gray-300 lg:w-[calc(33.33%-4rem)] w-full">
                    <div className="w-14 h-14 rounded-full bg-blue-600 grid place-items-center">
                        <CalendarDaysIcon className="w-8 text-white" />
                    </div>
                    <h3 className="mt-6 font-heading text-xl font-semibold text-blue-600">Calendar dashboard</h3>
                    <p className="font-body text-md mt-2">You can view patients who requested appointments through a calendar dashboard. You can confirm or cancel the appointments with just a click!</p>
                </div>
                <div className="bg-white rounded-xl border-2 p-6 border-solid border-gray-300 lg:w-[calc(33.33%-4rem)] w-full">
                    <div className="w-14 h-14 rounded-full bg-blue-600 grid place-items-center">
                        <EnvelopeIcon className="w-8 text-white" />
                    </div>
                    <h3 className="mt-6 font-heading text-xl font-semibold text-blue-600">Automated email</h3>
                    <p className="font-body text-md mt-2">When you confirm or cancel the appointment of a patient, an automated email will be sent to inform the patient about the status of his/her appointment.</p>
                </div>
            </div>
            <Link href='/signup/company-info' className="btn btn-primary mx-auto mt-8">Get Started</Link>
        </section>
    );
}