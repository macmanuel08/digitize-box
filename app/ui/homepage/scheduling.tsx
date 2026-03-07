import {
    MonitorSmartphone,
    LayoutDashboard,
    Check,
    X,
    Mail,
    Send
} from "lucide-react";

export default function Scheduling() {
    return (
        <section id="product" className="py-24 bg-white border-t border-slate-200 overflow-hidden scroll-mt-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                
                {/* Intro */}
                <div className="text-center max-w-3xl mx-auto mb-20">
                    <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm font-bold tracking-wide uppercase mb-4 inline-block">Our First Product</span>
                    <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">The Smart Scheduling System</h2>
                    <p className="text-xl text-slate-600 leading-relaxed">
                        Designed for rapid improvements, continuous feature expansion, and future solutions. We built this from the ground up to solve your biggest admin bottleneck.
                    </p>
                </div>

                {/* Feature 1: Digital Form (Zig-Zag Left) */}
                <div className="grid lg:grid-cols-2 gap-16 items-center mb-24">
                    <div className="order-2 lg:order-1 relative">
                        <div className="absolute inset-0 bg-blue-50 rounded-3xl transform -rotate-3 scale-105"></div>
                        {/* Wireframe UI for Form */}
                        <div className="relative bg-white p-8 rounded-2xl border border-slate-200 shadow-xl">
                            <h4 className="font-bold text-lg mb-4 border-b pb-2">Book Appointment</h4>
                            <div className="space-y-4">
                                <div className="h-10 bg-slate-50 border border-slate-200 rounded px-3 flex items-center"><span className="text-slate-400 text-sm">Patient Name</span></div>
                                <div className="grid grid-cols-2 gap-4">
                                    <div className="h-10 bg-slate-50 border border-slate-200 rounded px-3 flex items-center"><span className="text-slate-400 text-sm">Date</span></div>
                                    <div className="h-10 bg-slate-50 border border-slate-200 rounded px-3 flex items-center"><span className="text-slate-400 text-sm">Time</span></div>
                                </div>
                                <div className="h-20 bg-slate-50 border border-slate-200 rounded px-3 py-2"><span className="text-slate-400 text-sm">Reason for visit...</span></div>
                                <div className="h-10 bg-blue-600 rounded flex items-center justify-center"><span className="text-white font-medium text-sm">Request Appointment</span></div>
                            </div>
                        </div>
                    </div>
                    <div className="order-1 lg:order-2">
                        <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center text-blue-600 mb-6">
                            <MonitorSmartphone className="w-6 h-6" />
                        </div>
                        <h3 className="text-3xl font-bold text-slate-900 mb-4">Digital form</h3>
                        <p className="text-lg text-slate-600 leading-relaxed">
                            Patients will be at ease when requesting an appointment. Just fill out an online form. No more back and forth messaging or calls. Plus, it's 24/7 available.
                        </p>
                    </div>
                </div>

                {/* Feature 2: Calendar Dashboard (Zig-Zag Right) */}
                <div className="grid lg:grid-cols-2 gap-16 items-center mb-24">
                    <div>
                        <div className="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center text-emerald-600 mb-6">
                            <LayoutDashboard className="w-6 h-6" />
                        </div>
                        <h3 className="text-3xl font-bold text-slate-900 mb-4">Calendar dashboard</h3>
                        <p className="text-lg text-slate-600 leading-relaxed">
                            You can view patients who requested appointments through a clean calendar dashboard. You can confirm or cancel the appointments with just a click!
                        </p>
                    </div>
                    <div className="relative">
                        <div className="absolute inset-0 bg-emerald-50 rounded-3xl transform rotate-2 scale-105"></div>
                        {/* Wireframe UI for Calendar */}
                        <div className="relative bg-white p-6 rounded-2xl border border-slate-200 shadow-xl">
                            <div className="flex justify-between items-center mb-4">
                                <h4 className="font-bold text-lg">October 2026</h4>
                                <div className="flex gap-2"><div className="w-6 h-6 bg-slate-100 rounded"></div><div className="w-6 h-6 bg-slate-100 rounded"></div></div>
                            </div>
                            <div className="grid grid-cols-7 gap-2 mb-4 text-center text-xs font-bold text-slate-400">
                                <div>M</div><div>T</div><div>W</div><div>T</div><div>F</div><div>S</div><div>S</div>
                            </div>
                            <div className="grid grid-cols-7 gap-2">
                                {/* Calendar Days Mockup */}
                                <div className="aspect-square bg-slate-50 rounded"></div><div className="aspect-square bg-slate-50 rounded"></div>
                                <div className="aspect-square bg-white border border-slate-200 rounded relative"><div className="absolute bottom-1 right-1 w-2 h-2 bg-blue-500 rounded-full"></div></div>
                                <div className="aspect-square bg-white border border-emerald-400 bg-emerald-50 rounded relative"><div className="absolute top-1 left-1 text-[10px] font-bold text-emerald-700">✓</div></div>
                                <div className="aspect-square bg-white border border-slate-200 rounded"></div><div className="aspect-square bg-slate-50 rounded"></div><div className="aspect-square bg-slate-50 rounded"></div>
                            </div>
                            <div className="mt-4 p-3 bg-slate-50 rounded-lg border border-slate-100 flex justify-between items-center">
                                <div>
                                    <div className="text-sm font-bold">John Doe</div>
                                    <div className="text-xs text-slate-500">10:00 AM - Checkup</div>
                                </div>
                                <div className="flex gap-2">
                                    <button className="w-8 h-8 rounded bg-emerald-100 text-emerald-600 flex items-center justify-center"><Check className="w-4 h-4" /></button>
                                    <button className="w-8 h-8 rounded bg-red-100 text-red-600 flex items-center justify-center"><X className="w-4 h-4" /></button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Feature 3: Automated Email (Zig-Zag Left) */}
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    <div className="order-2 lg:order-1 relative">
                        <div className="absolute inset-0 bg-purple-50 rounded-3xl transform -rotate-2 scale-105"></div>
                        {/* Wireframe UI for Email */}
                        <div className="relative bg-white p-6 rounded-2xl border border-slate-200 shadow-xl max-w-md mx-auto">
                            <div className="border-b border-slate-100 pb-3 mb-4 flex items-center gap-3">
                                <div className="w-10 h-10 bg-slate-100 rounded-full flex items-center justify-center"><Mail className="w-5 h-5 text-slate-400" /></div>
                                <div>
                                    <div className="text-sm font-bold">Appointment Confirmed!</div>
                                    <div className="text-xs text-slate-500">From: DigitizeBox Clinic</div>
                                </div>
                            </div>
                            <div className="space-y-3">
                                <div className="h-3 w-3/4 bg-slate-100 rounded"></div>
                                <div className="h-3 w-full bg-slate-100 rounded"></div>
                                <div className="h-3 w-5/6 bg-slate-100 rounded"></div>
                                <div className="mt-4 p-4 bg-emerald-50 border border-emerald-100 rounded-lg text-center">
                                    <div className="text-emerald-700 font-bold text-sm">Oct 24, 2026 at 10:00 AM</div>
                                </div>
                                <div className="h-8 w-32 bg-slate-200 rounded mt-4"></div>
                            </div>
                        </div>
                    </div>
                    <div className="order-1 lg:order-2">
                        <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center text-purple-600 mb-6">
                            <Send className="w-6 h-6" />
                        </div>
                        <h3 className="text-3xl font-bold text-slate-900 mb-4">Automated email</h3>
                        <p className="text-lg text-slate-600 leading-relaxed">
                            When you confirm or cancel the appointment of a patient, an automated email will be sent to inform the patient about the status of his/her appointment. Keeps everyone in the loop effortlessly.
                        </p>
                    </div>
                </div>

            </div>
        </section>
    );
}