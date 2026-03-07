"use client";

import { useActionState } from "react";
import { sendEmail, FormState } from "@/app/lib/contact-us";
import { Send } from "lucide-react";
import { Button } from "@/app/ui/button";

const initialState: FormState = {};

export default function ContactForm() {
  const [safeState, formAction] = useActionState(sendEmail, initialState);

  return (
    <div className="bg-slate-800 p-8 rounded-2xl border border-slate-700 shadow-2xl">
    	<h3 className="text-xl font-bold mb-6">Get in Touch</h3>

		<form action={formAction} className="space-y-5">

			<div className="grid grid-cols-1 md:grid-cols-2 gap-5">
				<div>
					<label className="block text-sm font-medium text-slate-400 mb-1" htmlFor="name">Name</label>
					<input name="name" className="w-full bg-slate-900 border border-slate-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition" placeholder="Dr. Jane Doe" />
					<div id="name-error" aria-live="polite" className="relative z-1">
						{safeState.errors?.name?.map((error) => (
							<p key={error} className="text-sm text-red-500 mt-2">
								{error}
							</p>
						))}
					</div>
				</div>
				<div>
					<label className="block text-sm font-medium text-slate-400 mb-1" htmlFor="phone">Phone</label>
					<input type="tel" name="phone" className="w-full bg-slate-900 border border-slate-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition" placeholder="(555) 123-4567" />
					<div id="phone-error" aria-live="polite" className="relative z-1">
						{safeState.errors?.phone?.map((error) => (
							<p key={error} className="text-sm text-red-500 mt-2">
								{error}
							</p>
						))}
					</div>
				</div>
			</div>

			<div>
				<label className="block text-sm font-medium text-slate-400 mb-1" htmlFor="email">Email</label>
				<input type="email" name="email" className="w-full bg-slate-900 border border-slate-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition" placeholder="jane@clinic.com" />
				<div id="email-error" aria-live="polite" className="relative z-1">
					{safeState.errors?.email?.map((error) => (
					<p key={error} className="text-sm text-red-500 mt-2">
						{error}
					</p>
					))}
				</div>
			</div>

			<div>
				<label className="block text-sm font-medium text-slate-400 mb-1">Services Interested In</label>
				<select name="interest" className="w-full bg-slate-900 border border-slate-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition appearance-none">
					<option defaultValue="">Select a service...</option>
					<option value="appointment">Appointment Scheduling</option>
					<option value="ehr">EHR Systems</option>
					<option value="dashboard">Dashboard Development</option>
					<option value="webdev">Web Development</option>
					<option value="multiple">Multiple / Other</option>
				</select>
			</div>

			<div>
				<label htmlFor="message" className="block text-sm font-medium text-slate-400 mb-1">Message</label>
				<textarea name="message" rows={4} className="w-full bg-slate-900 border border-slate-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition" placeholder="Tell us about your practice..."></textarea>
				<div id="message-error" aria-live="polite" className="relative z-1">
					{safeState.errors?.message?.map((error) => (
					<p key={error} className="text-sm text-red-500 mt-2">
						{error}
					</p>
					))}
				</div>
			</div>
			
			<Button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 rounded-lg transition shadow-lg flex justify-center items-center gap-2">
				Send Message <Send className="w-4 h-4" />
			</Button>

			{safeState.success && (
			<p className="text-green-600 text-sm mt-2">
				Message sent successfully!
			</p>
			)}
		</form>
    </div>
  );
}