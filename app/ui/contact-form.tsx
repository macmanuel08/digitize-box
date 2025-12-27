"use client";

import { useActionState } from "react";
import { sendEmail, FormState } from "@/app/lib/contact-us";
import { UserCircleIcon, AtSymbolIcon, EnvelopeIcon, ArrowRightIcon } from "@heroicons/react/24/outline";
import { Button } from "@/app/ui/button";

const initialState: FormState = {};

export default function ContactForm() {
  const [safeState, formAction] = useActionState(sendEmail, initialState);

  return (
    <form action={formAction} className="space-y-4">
        <div className="relative">
            <input
                name="name"
                placeholder="Your name"
                className="peer block w-full rounded-md border border-gray-200 py-[9px] pl-10 text-sm outline-2 placeholder:text-gray-500"
            />
            <UserCircleIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900" />
        </div>

      <div id="name-error" aria-live="polite" className="relative z-1">
        {safeState.errors?.name?.map((error) => (
          <p key={error} className="text-sm text-red-500 mt-2">
            {error}
          </p>
        ))}
      </div>

        <div className="relative">
            <input
                name="email"
                type="email"
                placeholder="Your email"
                className="peer block w-full rounded-md border border-gray-200 py-[9px] pl-10 text-sm outline-2 placeholder:text-gray-500"
            />
            <AtSymbolIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900" />
        </div>
    
        <div id="email-error" aria-live="polite" className="relative z-1">
            {safeState.errors?.email?.map((error) => (
            <p key={error} className="text-sm text-red-500 mt-2">
                {error}
            </p>
            ))}
        </div>

        <div className="relative">
            <textarea
                name="message"
                placeholder="Your message"
                className="peer block w-full min-h-32 rounded-md border border-gray-200 py-[9px] pl-10 text-sm outline-2 placeholder:text-gray-500"
            />
            <EnvelopeIcon className="pointer-events-none absolute left-3 top-5 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900" />
        </div>

        <div id="message-error" aria-live="polite" className="relative z-1">
            {safeState.errors?.message?.map((error) => (
            <p key={error} className="text-sm text-red-500 mt-2">
                {error}
            </p>
            ))}
        </div>

        <Button className="mt-4 gap-2 relative z-1 w-fit">
            Send Message <ArrowRightIcon className="ml-auto h-5 w-5 text-gray-50" />
        </Button>

      {safeState.success && (
        <p className="text-green-600 text-sm mt-2">
          Message sent successfully!
        </p>
      )}
    </form>
  );
}