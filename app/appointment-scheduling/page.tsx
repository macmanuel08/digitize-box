import { Metadata } from 'next';
import {
        CalendarCheck,
        ArrowDown,
        AlertTriangle,
        AlertCircle,
        Users,
        PhoneOff,
        Frown,
        CalendarX,
        Clock,
        CheckCircle,
        Laptop,
        Hourglass,
        BellRing,
        Zap,
        RefreshCw,
        TrendingUp,
        Check,
        Lightbulb,
        Quote,
        ArrowRight,
        Sparkles,
        MonitorSmartphone,
    } from 'lucide-react';

export const metadata: Metadata = {
    title: "Appointment Scheduling System for Clinics | Reduce No-Shows & Increase Patients",
    description: "Automated appointment scheduling system for clinics in the Philippines. Reduce no-shows, eliminate long queues, and let patients book online 24/7. Increase revenue and streamline your clinic operations.",
    keywords: [
        "appointment scheduling system clinic",
        "online booking system healthcare",
        "clinic appointment system Philippines",
        "doctor booking system",
        "medical scheduling software",
        "reduce no shows clinic",
        "online appointment booking doctors",
    ],
};

export default function Page() {

    const structuredData = {
        "@context": "https://schema.org",
        "@graph": [
            {
                "@type": "SoftwareApplication",
                "name": "Appointment Scheduling System for Clinics",
                "applicationCategory": "BusinessApplication",
                "operatingSystem": "Web-based",
                "description":
                    "A smart appointment scheduling system for healthcare clinics. Enable online booking, reduce no-shows with automated reminders, shorten waiting times, and increase daily patient capacity.",
                "offers": {
                    "@type": "Offer",
                    "priceCurrency": "PHP",
                    "availability": "https://schema.org/InStock"
                },
                "featureList": [
                    "Online appointment booking",
                    "Automated reminders to reduce no-shows",
                    "Patient scheduling management",
                    "Mobile-friendly booking system",
                    "Improved clinic workflow",
                    "Faster patient consultations"
                ],
                "provider": {
                    "@type": "Organization",
                    "name": "DigitizeBox",
                    "url": "https://digitizebox.com"
                },
                "areaServed": {
                    "@type": "Country",
                    "name": "Philippines"
                },
                "url": "https://digitizebox.com/appointment-scheduling"
            },
            {
                "@type": "Service",
                "name": "Clinic Appointment Scheduling Solution",
                "description":
                    "We help healthcare clinics modernize their operations with automated appointment scheduling systems that eliminate manual booking, reduce waiting time, and increase revenue.",
                "provider": {
                    "@type": "Organization",
                    "name": "DigitizeBox",
                    "url": "https://digitizebox.com"
                },
                "serviceType": "Appointment Scheduling Software",
                "areaServed": {
                    "@type": "Country",
                    "name": "Philippines"
                }
            },
            {
                "@type": "Organization",
                "name": "DigitizeBox",
                "url": "https://digitizebox.com",
                "sameAs": [
                    "https://www.facebook.com/digitizebox"
                ]
            }
        ]
    };

    return (
        <main>
            <script
				type="application/ld+json"
				dangerouslySetInnerHTML={{
				__html: JSON.stringify(structuredData),
				}}
			/>
            <section className="pt-32 pb-20 lg:pt-40 lg:pb-24 overflow-hidden bg-white border-b border-slate-200">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <div className="max-w-4xl mx-auto">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-blue-600 font-semibold text-sm mb-6 border border-blue-100">
                            <CalendarCheck className="w-4 h-4" />
                            Clinic Automation
                        </div>
                        <h1 className="text-4xl lg:text-6xl font-extrabold tracking-tight text-slate-900 leading-tight mb-8">
                            Modernize Your Clinic with <br className="hidden lg:block" />
                            <span className="gradient-text">Smart Appointment Scheduling</span>
                        </h1>
                        <p className="text-xl text-slate-600 mb-10 leading-relaxed max-w-3xl mx-auto">
                            Eliminate back-and-forth messaging. Reduce daily stress. Serve more patients—without the chaos.
                        </p>
                        <div className="bg-blue-50 border border-blue-100 text-blue-800 px-6 py-3 rounded-xl inline-flex gap-2 font-medium mb-10">
                            <MonitorSmartphone className="w-6 h-6" />
                            Let patients book anytime, anywhere—while you focus on care.
                        </div>
                        <div className="flex flex-col sm:flex-row justify-center gap-4">
                            <a href="#contact" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-xl font-semibold text-lg transition shadow-xl shadow-blue-600/30 text-center flex items-center justify-center gap-2">
                                Upgrade Your Clinic <ArrowDown className="w-5 h-5" />
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-20 bg-slate-50 border-b border-slate-200">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="bg-red-50/50 rounded-2xl p-8 md:p-12 border border-red-100 shadow-sm relative overflow-hidden">
                        <div className="absolute -right-10 -top-10 opacity-5">
                            <AlertTriangle className="w-48 h-48 text-red-600" />
                        </div>
                        <div className="relative z-10">
                            <h3 className="flex items-center gap-3 text-2xl md:text-3xl font-bold text-slate-900 mb-6">
                                <span className="w-12 h-12 bg-red-100 rounded-xl flex items-center justify-center text-red-600">
                                    <AlertCircle className="w-6 h-6" />
                                </span>
                                The Problem Clinics Face Every Day
                            </h3>
                            <ul className="mb-8 grid md:grid-cols-2 gap-x-6 gap-y-4">
                                <li className="flex items-start gap-3 text-lg font-medium text-slate-800 bg-white p-4 rounded-lg border border-slate-100 shadow-sm">
                                    <Users className="w-5 h-5 text-red-500 mt-0.5 shrink-0" /> Long queues & overcrowded waiting areas
                                </li>
                                <li className="flex items-start gap-3 text-lg font-medium text-slate-800 bg-white p-4 rounded-lg border border-slate-100 shadow-sm">
                                    <PhoneOff className="w-5 h-5 text-red-500 mt-0.5 shrink-0" /> Endless calls & messages just to book
                                </li>
                                <li className="flex items-start gap-3 text-lg font-medium text-slate-800 bg-white p-4 rounded-lg border border-slate-100 shadow-sm">
                                    <Frown className="w-5 h-5 text-red-500 mt-0.5 shrink-0"/> Angry, impatient patients
                                </li>
                                <li className="flex items-start gap-3 text-lg font-medium text-slate-800 bg-white p-4 rounded-lg border border-slate-100 shadow-sm">
                                    <CalendarX className="w-5 h-5 text-red-500 mt-0.5 shrink-0" /> Missed appointments costing you money
                                </li>
                                <li className="flex items-start gap-3 text-lg font-medium text-slate-800 bg-white p-4 rounded-lg border border-slate-100 shadow-sm md:col-span-2">
                                    <Clock className="w-5 h-5 text-red-500 mt-0.5 shrink-0"/> Wasted time on manual scheduling
                                </li>
                            </ul>
                            <div className="bg-red-600 text-white p-5 rounded-xl text-center shadow-lg font-semibold text-lg md:text-xl">
                                One missed patient per day = lost income.
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-24 bg-white border-b border-slate-200">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center max-w-3xl mx-auto mb-16">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 text-emerald-600 font-semibold text-sm mb-4 border border-emerald-100">
                            <CheckCircle className="w-4 h-4" /> The Solution
                        </div>
                        <h2 className="text-3xl font-bold text-slate-900 mb-4">The Smarter Way to Run Your Clinic</h2>
                        <p className="text-slate-600 text-lg">Our automated appointment scheduling system helps you take control of your time and operations.</p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
                        <div className="bg-slate-50 p-8 rounded-2xl shadow-sm border border-slate-100 hover:shadow-md transition">
                            <div className="w-14 h-14 bg-blue-100 rounded-xl flex items-center justify-center text-blue-600 mb-6">
                                <Laptop className="w-7 h-7" />
                            </div>
                            <h3 className="text-xl font-bold text-slate-900 mb-3">Online Booking = More Patients</h3>
                            <p className="text-slate-600 leading-relaxed">Make it easy for patients to book instantly—no calls, no waiting on hold, no messaging back and forth.</p>
                        </div>

                        <div className="bg-slate-50 p-8 rounded-2xl shadow-sm border border-slate-100 hover:shadow-md transition">
                            <div className="w-14 h-14 bg-emerald-100 rounded-xl flex items-center justify-center text-emerald-600 mb-6">
                                <Hourglass className="w-7 h-7" />
                            </div>
                            <h3 className="text-xl font-bold text-slate-900 mb-3">Reduce Waiting Time</h3>
                            <p className="text-slate-600 leading-relaxed">Organized schedules mean a smoother patient flow, faster service, and a much less crowded waiting area.</p>
                        </div>

                        <div className="bg-slate-50 p-8 rounded-2xl shadow-sm border border-slate-100 hover:shadow-md transition">
                            <div className="w-14 h-14 bg-amber-100 rounded-xl flex items-center justify-center text-amber-600 mb-6">
                                <BellRing className="w-7 h-7" />
                            </div>
                            <h3 className="text-xl font-bold text-slate-900 mb-3">Fewer No-Shows = More Revenue</h3>
                            <p className="text-slate-600 leading-relaxed">Automatic reminders keep your schedule full and predictable, preventing missed appointments.</p>
                        </div>

                        <div className="bg-slate-50 p-8 rounded-2xl shadow-sm border border-slate-100 hover:shadow-md transition">
                            <div className="w-14 h-14 bg-purple-100 rounded-xl flex items-center justify-center text-purple-600 mb-6">
                                <Zap className="w-7 h-7" />
                            </div>
                            <h3 className="text-xl font-bold text-slate-900 mb-3">Faster Consultations</h3>
                            <p className="text-slate-600 leading-relaxed">Streamlined scheduling lets you see more patients per day without feeling rushed or overwhelmed.</p>
                        </div>

                        <div className="bg-slate-50 p-8 rounded-2xl shadow-sm border border-slate-100 hover:shadow-md transition">
                            <div className="w-14 h-14 bg-indigo-100 rounded-xl flex items-center justify-center text-indigo-600 mb-6">
                                <RefreshCw className="w-7 h-7" />
                            </div>
                            <h3 className="text-xl font-bold text-slate-900 mb-3">Better Follow-Ups</h3>
                            <p className="text-slate-600 leading-relaxed">Easily stay connected with your patients, remind them of check-ups, and encourage repeat visits.</p>
                        </div>

                        <div className="bg-white p-8 rounded-2xl shadow-lg border border-blue-200 ring-2 ring-blue-600/10 relative overflow-hidden transition">
                            <div className="absolute top-0 right-0 bg-blue-600 text-white text-[10px] font-bold px-4 py-1.5 rounded-bl-lg uppercase tracking-wider">Growth</div>
                            <div className="w-14 h-14 bg-blue-600 rounded-xl flex items-center justify-center text-white mb-6 shadow-md">
                                <TrendingUp className="w-7 h-7" />
                            </div>
                            <h3 className="text-xl font-bold text-slate-900 mb-4">Grow Without Extra Stress</h3>
                            <ul className="space-y-2">
                                <li className="flex items-center gap-2 text-sm text-slate-700 font-medium"><Check className="w-4 h-4 text-blue-500"/> Increase daily capacity</li>
                                <li className="flex items-center gap-2 text-sm text-slate-700 font-medium"><Check className="w-4 h-4 text-blue-500"/> Improve patient satisfaction</li>
                                <li className="flex items-center gap-2 text-sm text-slate-700 font-medium"><Check className="w-4 h-4 text-blue-500"/> Reduce staff workload</li>
                                <li className="flex items-center gap-2 text-sm text-slate-700 font-medium"><Check className="w-4 h-4 text-blue-500"/> Maximize available time slots</li>
                            </ul>
                        </div>
                    </div>
                    
                    <div className="mt-16 max-w-4xl mx-auto bg-slate-900 rounded-2xl p-8 md:p-10 text-center shadow-xl">
                        <div className="inline-flex items-center justify-center w-12 h-12 bg-yellow-500/20 text-yellow-400 rounded-full mb-4">
                            <Lightbulb className="w-6 h-6" />
                        </div>
                        <h3 className="text-2xl font-bold text-white mb-3">Why It Matters</h3>
                        <p className="text-lg text-slate-300">
                            Your time is valuable—and so is every appointment. <br className="hidden md:block" />
                            Stop losing revenue to inefficiencies and missed bookings. Start running a clinic that works for you.
                        </p>
                    </div>
                </div>
            </section>

            <section id="offer" className="py-24 bg-blue-600 text-white relative overflow-hidden">
                <div className="absolute inset-0 opacity-10">
                    <svg className="h-full w-full" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" preserveAspectRatio="none">
                        <path fill="currentColor" d="M0 0 L100 100 L0 100 Z"></path>
                    </svg>
                </div>
                
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/20 font-semibold text-sm mb-6 border border-white/30 backdrop-blur-sm">
                        <Sparkles className="w-4 h-4" /> Simple. Efficient. Reliable.
                    </div>
                    <h2 className="text-4xl md:text-5xl font-extrabold mb-6">Ready to Upgrade Your Clinic?</h2>
                    <p className="text-blue-100 text-xl md:text-2xl mb-10 leading-relaxed font-light">
                        Start accepting bookings online and transform your daily operations.
                    </p>
                    
                    <div className="bg-white/10 backdrop-blur-md p-8 rounded-3xl border border-white/20 shadow-2xl inline-block w-full max-w-2xl">
                        <Quote className="text-blue-300 w-10 h-10 mx-auto mb-4 opacity-50" />
                        <p className="text-2xl font-medium mb-8">
                            "We help clinics modernize and reduce daily stress."
                        </p>
                        <a href="#contact" className="inline-flex items-center justify-center w-full sm:w-auto gap-2 bg-white text-blue-600 hover:bg-slate-50 px-8 py-4 rounded-xl font-bold text-lg transition shadow-xl">
                            Get Started Today <ArrowRight className="w-5 h-5" />
                        </a>
                    </div>
                </div>
            </section>
        </main>
    );
}