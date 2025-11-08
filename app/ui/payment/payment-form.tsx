'use client';

import { lusitana } from '@/app/ui/fonts';
import {
  HashtagIcon,
  BanknotesIcon
} from '@heroicons/react/24/outline';
import { ArrowRightIcon } from '@heroicons/react/20/solid';
import { Button } from '@/app/ui/button';
import { useActionState } from 'react';
import { createPayment, PaymentState } from '@/app/lib/actions';
import Image from 'next/image';

export default function PaymentForm(
     {id}: {id: string}
) {

    const initialState: PaymentState = { errors: {}, message: null, };
    const [state, formAction] = useActionState(createPayment, initialState);
    const safeState = state ?? initialState;

    return (
        <form action={formAction} className="space-y-3">
        <div className="flex-1 rounded-lg bg-gray-50 px-6 pb-4 pt-8">
            <h2 className={`${lusitana.className} mb-3 text-xl`}>
            Beta Mode Subscription
            </h2>
            <p className='text-sm text-gray-600'>Get full access for only <span className="text-blue-500 font-semibold">&#8369;599</span> during our <strong>Beta Mode</strong>! Be among the first to experience our platform
    while we fine-tune and expand its features.</p>

            <p className='text-sm text-gray-600 mt-4'>As a Beta subscriber, your price will stay the same — forever — even as we grow, 
    add new tools, and improve your experience.</p>

            <p className="text-xs text-gray-600 mt-4">
  *Beta Mode means the app is in its early release stage — expect updates and exclusive early access perks.</p>

            <h3 className={`${lusitana.className} my-4 text-lg`}>Payment Instructions</h3>
            <p className='text-sm text-gray-600'>
                We currently accept <strong>GCash payments only</strong>. Please scan the QR code or use the payment information provided below to complete your subscription.
            </p>

            <div className="my-12">
                <Image src="/gcash.png" alt="" width={356} height={646} className="w-[200px] mx-auto" />
            </div>

            <p className='text-sm text-gray-600'>
                After payment, please provide your <strong>GCash reference number</strong> and the <strong>amount you paid</strong> below. We will activate your subscription after our team confirm your payment. Our team will reach out through email about your subscription.
            </p>
        
            <div className="w-full">

                <div className='mt-4'>
                    <label
                    className="mb-3 mt-5 block text-xs font-medium text-gray-900"
                    htmlFor="payment_reference_id"
                    >
                    Reference number
                    </label>
                    <div className="relative">
                    <input
                        className="peer block w-full rounded-md border border-gray-200 py-[9px] pl-10 text-sm outline-2 placeholder:text-gray-500"
                        id="payment_reference_id"
                        type="text"
                        name="payment_reference_id"
                        placeholder="Enter your reference number"
                        aria-describedby='payment-reference-id-error'
                    />
                    <HashtagIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900" />
                    </div>

                    <div id="payment-reference-id-e" aria-live="polite" aria-atomic="true">
                        {state?.errors?.payment_reference_id &&
                        state.errors.payment_reference_id.map((error: string) => (
                            <p className="mt-2 text-sm text-red-500" key={error}>
                            {error}
                            </p>
                        ))}
                    </div>
                </div>

                <div className="mt-4">
                     <label
                    className="mb-3 mt-5 block text-xs font-medium text-gray-900"
                    htmlFor="payment_reference_id"
                    >
                    Amount
                    </label>
                    <div className="relative mt-2 rounded-md">
                        <div className="relative">
                        <input
                            id="amount"
                            name="amount"
                            type="number"
                            step="0.01"
                            placeholder="Enter amount"
                            className="peer block w-full rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
                            aria-describedby="amount-error"
                        />
                        <BanknotesIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900" />
                        </div>
                    </div>

                    <div id="amount-error" aria-live="polite" aria-atomic="true">
                        {state?.errors?.amount &&
                        state.errors.amount.map((error: string) => (
                            <p className="mt-2 text-sm text-red-500" key={error}>
                            {error}
                            </p>
                        ))}
                    </div>
                    </div>
                    <input type="hidden" name="company_id" value={id} />
                    <input type="hidden" name="method" value="GCash" />
            </div>

            <Button className="mt-4 w-full">
            Submit Payment Form <ArrowRightIcon className="ml-auto h-5 w-5 text-gray-50" />
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
