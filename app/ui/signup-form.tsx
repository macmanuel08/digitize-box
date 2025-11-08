'use client';

import { lusitana } from '@/app/ui/fonts';
import {
  AtSymbolIcon,
  UserCircleIcon,
  ExclamationCircleIcon,
  KeyIcon
} from '@heroicons/react/24/outline';
import { ArrowRightIcon } from '@heroicons/react/20/solid';
import { Button } from '@/app/ui/button';
import { useActionState } from 'react';
import { createUser, UserState } from '@/app/lib/actions';

export default function SignupForm(
    {id}: {id: string}
) {

    const initialState: UserState = { errors: {}, message: null, };
    const [state, formAction] = useActionState(createUser, initialState);
    const safeState = state ?? initialState;

    return (
        <form action={formAction} className="space-y-3">
        <div className="flex-1 rounded-lg bg-gray-50 px-6 pb-4 pt-8">
            <h2 className={`${lusitana.className} mb-3 text-xl`}>
            Please tell us about you
            </h2>
            <p className='text-sm text-gray-400'>This account will be used to manage your entire system.<br />We recommend that the business owner or assigned administrator complete the sign-up process.</p>
            <div className="w-full">
            <div>
                <label
                className="mb-3 mt-5 block text-xs font-medium text-gray-900"
                htmlFor="firstName"
                >
                First Name
                </label>
                <div className="relative">
                <input
                    className="peer block w-full rounded-md border border-gray-200 py-[9px] pl-10 text-sm outline-2 placeholder:text-gray-500"
                    id="firstName"
                    type="text"
                    name="firstName"
                    placeholder="Enter your first name"
                    required
                />
                <UserCircleIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900" />
                </div>
            </div>

            <div className='mt-4'>
                <label
                className="mb-3 mt-5 block text-xs font-medium text-gray-900"
                htmlFor="lastName"
                >
                Last Name
                </label>
                <div className="relative">
                <input
                    className="peer block w-full rounded-md border border-gray-200 py-[9px] pl-10 text-sm outline-2 placeholder:text-gray-500"
                    id="lastName"
                    type="text"
                    name="lastName"
                    placeholder="Enter your last name"
                    required
                />
                <UserCircleIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900" />
                </div>
            </div>
            </div>

            <div className='mt-4'>
                <label
                className="mb-3 mt-5 block text-xs font-medium text-gray-900"
                htmlFor="email"
                >
                Email
                </label>
                <div className="relative">
                <input
                    className="peer block w-full rounded-md border border-gray-200 py-[9px] pl-10 text-sm outline-2 placeholder:text-gray-500"
                    id="email"
                    type="email"
                    name="email"
                    placeholder="Enter your email address"
                    required
                />
                <AtSymbolIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900" />
                </div>
            </div>

            <div className="mt-4">
                <label
                className="mb-3 mt-5 block text-xs font-medium text-gray-900"
                htmlFor="password"
                >
                Password (Please include at least one lowercase, uppercase, numeric character, and a symbol such as *,!, or @)
                </label>
                <div className="relative">
                <input
                    className="peer block w-full rounded-md border border-gray-200 py-[9px] pl-10 text-sm outline-2 placeholder:text-gray-500"
                    id="password"
                    type="password"
                    name="password"
                    placeholder="Enter password"
                    required
                    minLength={8}
                />
                <KeyIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900" />
                </div>
            </div>

            <div className="mt-4">
                <label
                    className="mb-3 mt-5 block text-xs font-medium text-gray-900"
                    htmlFor="role"
                >
                    Role
                </label>
                <div className="relative">
                    <select
                    className="peer block w-full rounded-md border border-gray-200 py-[9px] pl-10 pr-8 text-sm outline-2 placeholder:text-gray-500 appearance-none"
                    id="role"
                    name="role"
                    required
                    >
                        <option value="">Select role</option>
                        <option value="admin">Admin</option>
                        <option value="doctor">Doctor</option>
                    </select>
                    <UserCircleIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900" />
                </div>
            </div>

            <div className='mt-4'>
                <label
                className="mb-3 mt-5 block text-xs font-medium text-gray-900"
                htmlFor="phone"
                >
                Phone
                </label>
                <div className="relative">
                <input
                    className="peer block w-full rounded-md border border-gray-200 py-[9px] pl-10 text-sm outline-2 placeholder:text-gray-500"
                    id="phone"
                    type="text"
                    name="phone"
                    placeholder="Enter your phone number"
                    required
                />
                <UserCircleIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900" />
                </div>
            </div>

            <input type="hidden" name="companyId" value={id} />


            <Button className="mt-4 w-full">
            Sign up <ArrowRightIcon className="ml-auto h-5 w-5 text-gray-50" />
            </Button>
            <div
            className="flex h-8 items-end space-x-1"
            aria-live="polite"
            aria-atomic="true"
            >
                {safeState.message && <p className="mt-2 text-sm text-red-500">{safeState.message}</p>}
            </div>
        </div>
        </form>
    );
}
