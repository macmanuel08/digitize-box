import { LayoutTemplate, FolderHeart, CalendarClock, PieChart } from "lucide-react";
import Link from "next/link";

export default function Services() {
    return (
        <section id="services" className="py-24 bg-slate-50 scroll-mt-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center max-w-2xl mx-auto mb-16">
                    <h2 className="text-3xl font-bold text-slate-900 mb-4">Comprehensive Digital Solutions</h2>
                    <p className="text-slate-600">Everything a modern medical practice needs to operate seamlessly and efficiently.</p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {/* Web Development */}
                    <Link href="/website-development" className="bg-white px-8 pt-8 pb-16 rounded-2xl shadow-sm border border-slate-100 hover:shadow-lg transition relative">
                        <div className="w-14 h-14 bg-indigo-100 rounded-xl flex items-center justify-center text-indigo-600 mb-6">
                            <LayoutTemplate className="w-7 h-7" />
                        </div>
                        <h3 className="text-xl font-bold text-slate-900 mb-3">Web Development</h3>
                        <p className="text-slate-500 text-sm leading-relaxed">Custom, professional websites tailored for medical clinics to establish a strong online presence.</p>
                        <span className="bg-indigo-600 text-white px-3 py-1 rounded-md text-xs font-bold tracking-wide uppercase mt-4 inline-block absolute left-8 bottom-6">Learn More</span>
                    </Link>
                    {/* EHR System */}
                    <Link href="/ehr-development" className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 hover:shadow-lg transition relative">
                        <div className="w-14 h-14 bg-emerald-100 rounded-xl flex items-center justify-center text-emerald-600 mb-6">
                            <FolderHeart className="w-7 h-7" />
                        </div>
                        <h3 className="text-xl font-bold text-slate-900 mb-3">EHR Systems</h3>
                        <p className="text-slate-500 text-sm leading-relaxed">Secure Electronic Health Records integration to manage patient data safely and efficiently.</p>
                        <span className="bg-emerald-600 text-white px-3 py-1 rounded-md text-xs font-bold tracking-wide uppercase mt-4 inline-block absolute left-8 bottom-6">Learn More</span>
                    </Link>
                    
                    {/* Appointment Scheduling */}
                    <Link href="/appointment-scheduling" className="bg-white px-8 pt-8 pb-16 rounded-2xl shadow-sm border border-blue-100 ring-2 ring-blue-600/10 hover:shadow-lg transition relative overflow-hidden relative">
                        <div className="absolute top-0 right-0 bg-blue-600 text-white text-[10px] font-bold px-3 py-1 rounded-bl-lg uppercase tracking-wider">Flagship</div>
                        <div className="w-14 h-14 bg-blue-100 rounded-xl flex items-center justify-center text-blue-600 mb-6">
                            <CalendarClock className="w-7 h-7" />
                        </div>
                        <h3 className="text-xl font-bold text-slate-900 mb-3">Appointment Scheduling</h3>
                        <p className="text-slate-500 text-sm leading-relaxed">Automated booking systems that eliminate back-and-forth messaging and phone calls.</p>
                        <span className="bg-blue-600 text-white px-3 py-1 rounded-md text-xs font-bold tracking-wide uppercase mt-4 inline-block absolute left-8 bottom-6">Learn More</span>
                    </Link>

                    {/* Dashboard Development */}
                    <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 hover:shadow-lg transition relative">
                        <div className="w-14 h-14 bg-purple-100 rounded-xl flex items-center justify-center text-purple-600 mb-6">
                            <PieChart className="w-7 h-7" />
                        </div>
                        <h3 className="text-xl font-bold text-slate-900 mb-3">Dashboard Development</h3>
                        <p className="text-slate-500 text-sm leading-relaxed">Intuitive administrative dashboards to give you a birds-eye view of your practice's operations.</p>
                    </div>
                </div>
            </div>
        </section>
    );
}