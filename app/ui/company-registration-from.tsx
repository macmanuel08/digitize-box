'use client';

import { lusitana } from '@/app/ui/fonts';
import {
  UserGroupIcon,
  BuildingStorefrontIcon
} from '@heroicons/react/24/outline';
import { ArrowRightIcon } from '@heroicons/react/20/solid';
import { Button } from '@/app/ui/button';
import { useActionState } from 'react';
import { createCompany, CompanyState } from '@/app/lib/actions';

export default function CompanyRegistrationForm() {

    const initialState: CompanyState = { errors: {}, message: null, };
    const [state, formAction] = useActionState(createCompany, initialState);
    const safeState = state ?? initialState;

    return (
        <form action={formAction} className="space-y-3">
        <div className="flex-1 rounded-lg bg-gray-50 px-6 pb-4 pt-8">
            <h2 className={`${lusitana.className} mb-3 text-xl`}>
            Please tell us about your business/company.
            </h2>
            <p className='text-sm text-gray-400'>This account will be used to manage your entire system.<br />We recommend that the business owner or assigned administrator complete the sign-up process.</p>
            <div className="w-full">
            <div>
                <label
                className="mb-3 mt-5 block text-xs font-medium text-gray-900"
                htmlFor="name"
                >
                Business/Company Name
                </label>
                <div className="relative">
                <input
                    className="peer block w-full rounded-md border border-gray-200 py-[9px] pl-10 text-sm outline-2 placeholder:text-gray-500"
                    id="name"
                    type="text"
                    name="name"
                    placeholder="Enter your business/company name"
                    required
                />
                <UserGroupIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900" />
                </div>
            </div> 

            <div className='mt-4'>
                <label
                className="mb-3 mt-5 block text-xs font-medium text-gray-900"
                htmlFor="industry"
                >
                Industry (e.g. optometry, dentistry, chiropractic, etc.)
                </label>
                <div className="relative">
                <input
                    className="peer block w-full rounded-md border border-gray-200 py-[9px] pl-10 text-sm outline-2 placeholder:text-gray-500"
                    id="industry"
                    type="text"
                    name="industry"
                    placeholder="Enter your industry"
                    required
                />
                <BuildingStorefrontIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900" />
                </div>
            </div>
            </div>

            <Button className="mt-4 w-full">
            Register <ArrowRightIcon className="ml-auto h-5 w-5 text-gray-50" />
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
