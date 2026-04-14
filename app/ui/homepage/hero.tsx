import Link from "next/link";
import { ArrowRight, Users, CalendarCheck, Activity } from "lucide-react";

export default function Hero() {
    return (
        <section className="pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden scroll-mt-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    
                    {/* Hero Text */}
                    <div className="max-w-2xl">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-blue-600 font-semibold text-sm mb-6 border border-blue-100">
                            <span className="relative flex h-2 w-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-600"></span>
                            </span>
                            Next-Gen Clinic Management
                        </div>
                        <h1 className="text-3xl lg:text-5xl font-extrabold tracking-tight text-slate-900 leading-tight mb-6">
                            Digitalize your work. <br />
                            <span className="gradient-text">Effortless patient care.</span>
                        </h1>
                        <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                            Modernize your medical practice with cutting-edge tools designed to reduce administrative headaches and put patients first.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4">
                            <Link href="#contact" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-xl font-semibold text-lg transition shadow-xl shadow-blue-600/30 text-center flex items-center justify-center gap-2">
                                Register Your Business <ArrowRight />
                            </Link>
                            <Link href="#product" className="bg-white hover:bg-slate-50 text-slate-700 border border-slate-200 px-8 py-4 rounded-xl font-semibold text-lg transition text-center">
                                Explore Features
                            </Link>
                        </div>
                    </div>

                    {/* Hero Visual (Abstract Dashboard Wireframe) */}
                    <div className="relative hidden lg:block">
                        <div className="absolute inset-0 bg-gradient-to-tr from-blue-100 to-cyan-50 rounded-[3rem] transform rotate-3 scale-105"></div>
                        <div className="relative bg-white border border-slate-100 p-6 rounded-3xl mockup-shadow">
                            {/* Mock Header */}
                            <div className="flex items-center justify-between border-b border-slate-100 pb-4 mb-4">
                                <div className="flex gap-2"><div className="w-3 h-3 rounded-full bg-red-400"></div><div className="w-3 h-3 rounded-full bg-yellow-400"></div><div className="w-3 h-3 rounded-full bg-green-400"></div></div>
                                <div className="h-4 w-32 bg-slate-100 rounded"></div>
                            </div>
                            {/* Mock Content Grid */}
                            <div className="grid grid-cols-3 gap-4 mb-4">
                                <div className="h-24 bg-blue-50 rounded-xl border border-blue-100 flex flex-col justify-center items-center gap-2">
                                   <Users className="text-blue-400 w-6 h-6" />
                                    <div className="h-2 w-12 bg-blue-200 rounded"></div>
                                </div>
                                <div className="h-24 bg-emerald-50 rounded-xl border border-emerald-100 flex flex-col justify-center items-center gap-2">
                                    <CalendarCheck className="text-emerald-400 w-6 h-6" />
                                    <div className="h-2 w-12 bg-emerald-200 rounded"></div>
                                </div>
                                <div className="h-24 bg-purple-50 rounded-xl border border-purple-100 flex flex-col justify-center items-center gap-2">
                                    <Activity className="text-purple-400 w-6 h-6" />
                                    <div className="h-2 w-12 bg-purple-200 rounded"></div>
                                </div>
                            </div>
                            {/* Mock Chart/List */}
                            <div className="space-y-3">
                                <div className="h-10 bg-slate-50 rounded flex items-center px-4"><div className="h-3 w-3/4 bg-slate-200 rounded"></div></div>
                                <div className="h-10 bg-slate-50 rounded flex items-center px-4"><div className="h-3 w-1/2 bg-slate-200 rounded"></div></div>
                                <div className="h-10 bg-slate-50 rounded flex items-center px-4"><div className="h-3 w-5/6 bg-slate-200 rounded"></div></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}