'use client';

import { lusitana } from '@/app/ui/fonts';
import {
  UserGroupIcon,
  BuildingStorefrontIcon
} from '@heroicons/react/24/outline';
import { ArrowRightIcon } from '@heroicons/react/20/solid';
import { Button } from '@/app/ui/button';
import { useActionState, useState, useEffect } from 'react';
import { createCompany, CompanyState } from '@/app/lib/actions';
import { useDebouncedCallback } from 'use-debounce';

export default function CompanyRegistrationForm() {

    const initialState: CompanyState = { errors: {}, message: null, };
    const [state, formAction] = useActionState(createCompany, initialState);
    const safeState = state ?? initialState;
    const [companyName, setCompanyName] = useState('');
    const [slug, setSlug] = useState('');
    const [slugExists, setSlugExists] = useState<boolean | null>(null);
    
    
    const debouncedCheckSlugExistence = useDebouncedCallback(async (slug: string) => {
        try {
            const response = await fetch(`/api/check-slug?slug=${slug}`);
            const data = await response.json();

        if (response.ok) {
            setSlugExists(data.exists);
        } else {
            console.error('Something went wrong. Check slug');
        }
        } catch (error) {
            console.error('Error checking slug existence: ', error);
        }
    }, 500);

  useEffect(() => {
    const generateSlug = (name: string) => {
      return name.toLowerCase().replace(/[^a-z0-9]+/g, '');
    };

        if (companyName) {
            const generatedSlug = generateSlug(companyName);
            setSlug(generatedSlug);
            debouncedCheckSlugExistence(generatedSlug);
        }
        
    }, [companyName]);

    const handleCompanyNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setCompanyName(e.target.value);
    }

    const days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];

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
                    onChange={handleCompanyNameChange}
                    value={companyName}
                />
                <UserGroupIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900" />
                </div>
                {slugExists && <p className="mt-2 text-sm text-red-500">Business name has taken. Please enter another business name</p>}
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

            {/* Operation Hours */}
            <h3 className={`${lusitana.className} mt-16 mb-3 text-lg`}>Enter Your Operation Hours Below:</h3>
            <div className="grid grid-cols-1 gap-6">

            <div key="heading" className="grid grid-cols-1 md:grid-cols-5 gap-4 items-center">
                <div className='col-start-2 col-end-4 text-xs font-medium text-gray-900'>Opening Hour</div>
                <div className='col-span-2 text-xs font-medium text-gray-900'>Closing Hour</div>
            </div>
            {days.map((day) => (
                <div key={day} className="grid grid-cols-1 md:grid-cols-5 gap-4 items-center">
                <label
                    className="mb-1 block text-xs font-medium text-gray-900"
                    htmlFor={`${day.toLowerCase()}_start`}
                >
                    {day}
                </label>

                <input
                    className="col-start-2 col-end-4 peer block w-full rounded-md border border-gray-200 py-[9px] pl-4 text-sm outline-2 placeholder:text-gray-500"
                    id={`${day.toLowerCase()}_start`}
                    type="time"
                    name={`${day.toLowerCase()}_start`}
                    placeholder="Start"
                />

                <input
                    className="col-span-2 peer block w-full rounded-md border border-gray-200 py-[9px] pl-4 text-sm outline-2 placeholder:text-gray-500"
                    id={`${day.toLowerCase()}_end`}
                    type="time"
                    name={`${day.toLowerCase()}_end`}
                    placeholder="End"
                />
                </div>
            ))}
            </div>


            </div>

            <input type="hidden" name="slug" value={slug} />

            <Button className="mt-16 w-full" disabled={slugExists ? true : false}>
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
