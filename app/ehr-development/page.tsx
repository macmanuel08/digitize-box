import { Metadata } from 'next';
import {
    FileText,
    ArrowDown,
    FolderSearch,
    Files,
    Smartphone,
    Cloud,
    Shield,
    ShieldCheck,
    Layers,
    Database,
    Clock,
    Lock,
    Plug,
    LayoutDashboard,
    Building2,
    Stethoscope,
    CheckCircle2,
    ArrowRight,
    Rocket,
} from 'lucide-react';

export const metadata: Metadata = {
    title: "EHR Service - Streamlining Healthcare Workflow and Patient Outcomes",
    description: "Our EHR system reduces administrative burden, improves workflow efficiency, and enhances patient outcomes. A powerful, easy-to-use solution inspired by Epic and Cerner.",
    keywords: [
        "EHR system",
        "electronic health records",
        "healthcare technology",
        "patient outcomes",
        "Epic Cerner innovation",
        "workflow efficiency",
        "healthcare software",
        "EHR system in the Philippines",
        "electronic health records Philippines",
    ],
};

export default function Page() {
    const structuredData = {
        "@context": "https://schema.org",
        "@type": "HealthcareService",
        "name": "EHR Service",
        "description": "Our EHR system reduces administrative burden, improves workflow efficiency, and enhances patient outcomes. A powerful, easy-to-use solution inspired by Epic and Cerner.",
        "url": "https://www.digitizebox.com/ehr-development",
        "provider": {
            "@type": "Organization",
            "name": "Your Healthcare Technology Provider",
            "url": "https://www.digitizebox.com",
            "sameAs": "https://www.facebook.com/digitizebox"
        },
        "audience": {
            "@type": "Audience",
            "audienceType": "Healthcare Professionals"
        },
        "serviceType": "Electronic Health Record",
        "availableChannel": {
            "@type": "ServiceChannel",
            "serviceUrl": "https://www.digitizebox.com/ehr-development"
        },
        "offers": {
            "@type": "Offer",
            "priceCurrency": "PHP",
            "price": "0",
            "eligibleRegion": {
                "@type": "Place",
                "name": "Philippines"
            }
        }
    };

    return (
        <>
            <script
				type="application/ld+json"
				dangerouslySetInnerHTML={{
				__html: JSON.stringify(structuredData),
				}}
			/>
            <main>
                <section className="pt-32 pb-20 lg:pt-40 lg:pb-24 overflow-hidden bg-white border-b border-slate-200">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                        <div className="max-w-4xl mx-auto">
                            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-blue-600 font-semibold text-sm mb-6 border border-blue-100">
                                <FileText className="w-4 h-4" />
                                Clinical Excellence
                            </div>
                            <h1 className="text-4xl lg:text-6xl font-extrabold tracking-tight text-slate-900 leading-tight mb-8">
                                Transform Your Practice with a <br className="hidden lg:block" />
                                <span className="gradient-text">Reliable EHR System</span>
                            </h1>
                            <p className="text-xl text-slate-600 mb-6 leading-relaxed max-w-3xl mx-auto">
                                Upgrade your healthcare operations with a powerful Electronic Health Records (EHR) system designed to streamline patient management, improve efficiency, and enhance data security.
                            </p>
                            <div className="bg-blue-50 border border-blue-100 text-blue-800 px-6 py-3 rounded-xl inline-block font-medium mb-10">
                                Eliminate manual processes and focus on delivering better patient care.
                            </div>
                            <div className="flex flex-col sm:flex-row justify-center gap-4">
                                <a href="#offer" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-xl font-semibold text-lg transition shadow-xl shadow-blue-600/30 text-center flex items-center justify-center gap-2">
                                    Discover Our EHR <ArrowDown className="w-5 h-5" />
                                </a>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Core Benefits Section (Alert / Feature Style) */}
                <section className="py-20 bg-slate-50 border-b border-slate-200">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="text-center max-w-3xl mx-auto mb-16">
                            <h2 className="text-3xl font-bold text-slate-900 mb-4">Why Choose Our EHR System?</h2>
                            <p className="text-slate-600 text-lg">Leave outdated paper systems behind and secure your clinic's future.</p>
                        </div>

                        <div className="grid md:grid-cols-3 gap-8">
                            {/* Benefit 1 */}
                            <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-200 hover:shadow-lg transition relative overflow-hidden">
                                <div className="absolute -right-4 -top-4 opacity-5">
                                    <FolderSearch className="w-32 h-32 text-slate-900" />
                                </div>
                                <div className="w-14 h-14 bg-red-100 rounded-xl flex items-center justify-center text-red-600 mb-6 relative z-10">
                                    <Files className="w-7 h-7" />
                                </div>
                                <h3 className="text-xl font-bold text-slate-900 mb-4 relative z-10">No More Lost Paper Records</h3>
                                <p className="text-slate-600 leading-relaxed relative z-10">
                                    Say goodbye to misplaced files and missing patient information. Our digital system ensures all medical records are centralized, making them easy to access, update, and manage with complete accuracy.
                                </p>
                            </div>

                            {/* Benefit 2 */}
                            <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-200 hover:shadow-lg transition relative overflow-hidden">
                                <div className="absolute -right-4 -top-4 opacity-5">
                                    <Smartphone className="w-32 h-32 text-slate-900" />
                                </div>
                                <div className="w-14 h-14 bg-blue-100 rounded-xl flex items-center justify-center text-blue-600 mb-6 relative z-10">
                                    <Cloud className="w-7 h-7" />
                                </div>
                                <h3 className="text-xl font-bold text-slate-900 mb-4 relative z-10">Access Anywhere, Anytime</h3>
                                <p className="text-slate-600 leading-relaxed relative z-10">
                                    With our cloud-based software, professionals can securely access patient data from any device. Whether in the clinic, at home, or on the go, records are always within reach for faster decisions.
                                </p>
                            </div>

                            {/* Benefit 3 */}
                            <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-200 hover:shadow-lg transition relative overflow-hidden">
                                <div className="absolute -right-4 -top-4 opacity-5">
                                    <Shield className="w-32 h-32 text-slate-900" />
                                </div>
                                <div className="w-14 h-14 bg-emerald-100 rounded-xl flex items-center justify-center text-emerald-600 mb-6 relative z-10">
                                    <ShieldCheck className="w-7 h-7" />
                                </div>
                                <h3 className="text-xl font-bold text-slate-900 mb-4 relative z-10">Secure Data Management</h3>
                                <p className="text-slate-600 leading-relaxed relative z-10">
                                    Protect sensitive information. Built with advanced encryption and strict compliance standards, our platform ensures safe storage and maintains the absolute highest level of patient privacy.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Key Features Grid */}
                <section className="py-24 bg-white border-b border-slate-200">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="text-center max-w-3xl mx-auto mb-16">
                            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-50 text-indigo-600 font-semibold text-sm mb-4 border border-indigo-100">
                                <Layers className="w-4 h-4" /> Powerful Capabilities
                            </div>
                            <h2 className="text-3xl font-bold text-slate-900 mb-4">Key Features of Our EHR Solution</h2>
                            <p className="text-slate-600 text-lg">Everything you need to run a modern, efficient, and fully compliant healthcare facility.</p>
                        </div>

                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
                            
                            {/* Feature 1 */}
                            <div className="bg-slate-50 p-8 rounded-2xl shadow-sm border border-slate-100 hover:shadow-md transition">
                                <div className="w-14 h-14 bg-blue-100 rounded-xl flex items-center justify-center text-blue-600 mb-6">
                                    <Database className="w-7 h-7" />
                                </div>
                                <h3 className="text-xl font-bold text-slate-900 mb-3">Centralized Records</h3>
                                <p className="text-slate-600 leading-relaxed">A unified patient record management system that acts as the single source of truth for your entire practice.</p>
                            </div>

                            {/* Feature 2 */}
                            <div className="bg-slate-50 p-8 rounded-2xl shadow-sm border border-slate-100 hover:shadow-md transition">
                                <div className="w-14 h-14 bg-emerald-100 rounded-xl flex items-center justify-center text-emerald-600 mb-6">
                                    <Clock className="w-7 h-7" />
                                </div>
                                <h3 className="text-xl font-bold text-slate-900 mb-3">Real-Time EMR Access</h3>
                                <p className="text-slate-600 leading-relaxed">Instantly pull up electronic medical records during consultations without delays or loading issues.</p>
                            </div>

                            {/* Feature 3 */}
                            <div className="bg-slate-50 p-8 rounded-2xl shadow-sm border border-slate-100 hover:shadow-md transition">
                                <div className="w-14 h-14 bg-amber-100 rounded-xl flex items-center justify-center text-amber-600 mb-6">
                                    <Lock className="w-7 h-7" />
                                </div>
                                <h3 className="text-xl font-bold text-slate-900 mb-3">Encrypted Security</h3>
                                <p className="text-slate-600 leading-relaxed">Enterprise-grade secure, encrypted healthcare data management to protect against breaches.</p>
                            </div>

                            {/* Feature 4 */}
                            <div className="bg-slate-50 p-8 rounded-2xl shadow-sm border border-slate-100 hover:shadow-md transition">
                                <div className="w-14 h-14 bg-purple-100 rounded-xl flex items-center justify-center text-purple-600 mb-6">
                                    <Plug className="w-7 h-7" />
                                </div>
                                <h3 className="text-xl font-bold text-slate-900 mb-3">Seamless Integration</h3>
                                <p className="text-slate-600 leading-relaxed">Flawless EHR integration with external labs, internal billing software, and other critical clinical systems.</p>
                            </div>

                            {/* Feature 5 */}
                            <div className="bg-slate-50 p-8 rounded-2xl shadow-sm border border-slate-100 hover:shadow-md transition">
                                <div className="w-14 h-14 bg-indigo-100 rounded-xl flex items-center justify-center text-indigo-600 mb-6">
                                    <LayoutDashboard className="w-7 h-7" />
                                </div>
                                <h3 className="text-xl font-bold text-slate-900 mb-3">Intuitive Dashboards</h3>
                                <p className="text-slate-600 leading-relaxed">Clean interfaces inspired by industry leaders like Epic and Cerner, optimized for doctor and nurse workflows.</p>
                            </div>

                            {/* Feature 6 (Highlight) */}
                            <div className="bg-white p-8 rounded-2xl shadow-lg border border-blue-200 ring-2 ring-blue-600/10 relative overflow-hidden transition">
                                <div className="absolute top-0 right-0 bg-blue-600 text-white text-[10px] font-bold px-4 py-1.5 rounded-bl-lg uppercase tracking-wider">Enterprise</div>
                                <div className="w-14 h-14 bg-blue-600 rounded-xl flex items-center justify-center text-white mb-6 shadow-md">
                                    <Building2 className="w-7 h-7" />
                                </div>
                                <h3 className="text-xl font-bold text-slate-900 mb-3">Highly Scalable</h3>
                                <p className="text-slate-700 font-medium leading-relaxed">
                                    Built to grow. Whether you run a single small clinic, a large hospital, or a multi-site healthcare network, our EHR adapts to you.
                                </p>
                            </div>

                        </div>
                        
                        {/* Bottom Line Banner */}
                        <div className="mt-16 max-w-4xl mx-auto bg-slate-900 rounded-2xl p-8 md:p-10 text-center shadow-xl">
                            <div className="inline-flex items-center justify-center w-12 h-12 bg-blue-500/20 text-blue-400 rounded-full mb-4">
                                <Stethoscope className="w-6 h-6" />
                            </div>
                            <h3 className="text-2xl font-bold text-white mb-3">Built for Modern Healthcare Providers</h3>
                            <p className="text-lg text-slate-300">
                                Our system reduces administrative burden, improves workflow efficiency, and enhances patient outcomes. By combining innovation inspired by Epic and Cerner, we deliver a solution that is powerful yet effortless to use.
                            </p>
                        </div>
                    </div>
                </section>

                {/* Special Offer / CTA Section */}
                <section id="offer" className="py-24 bg-blue-600 text-white relative overflow-hidden">
                    {/* Abstract background pattern */}
                    <div className="absolute inset-0 opacity-10">
                        <svg className="h-full w-full" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" preserveAspectRatio="none">
                            <path fill="currentColor" d="M0 100 L100 0 L100 100 Z"></path>
                        </svg>
                    </div>
                    
                    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/20 font-semibold text-sm mb-6 border border-white/30 backdrop-blur-sm">
                            <Rocket className="w-4 h-4" /> Step into the future of healthcare
                        </div>
                        <h2 className="text-4xl md:text-5xl font-extrabold mb-6">Upgrade to a Better EHR Experience</h2>
                        <p className="text-blue-100 text-xl md:text-2xl mb-10 leading-relaxed font-light">
                            Digitize your records, streamline your operations, and provide better patient care with absolute confidence.
                        </p>
                        
                        <div className="bg-white/10 backdrop-blur-md p-8 rounded-3xl border border-white/20 shadow-2xl inline-block w-full max-w-2xl">
                            <CheckCircle2 className="text-blue-300 w-10 h-10 mx-auto mb-4 opacity-50" />
                            <p className="text-2xl font-medium mb-8">
                                Looking for a trusted Electronic Health Records system?
                            </p>
                            <a href="#contact" className="inline-flex items-center justify-center w-full sm:w-auto gap-2 bg-white text-blue-600 hover:bg-slate-50 px-8 py-4 rounded-xl font-bold text-lg transition shadow-xl">
                                Get Started Today <ArrowRight className="w-5 h-5" />
                            </a>
                        </div>
                    </div>
                </section>
            </main>
        </>
    );
}