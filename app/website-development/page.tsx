import { Metadata } from 'next';
import {
        Stethoscope,
        Search,
        ArrowDown,
        Lightbulb,
        Globe,
        Check,
        X,
        FacebookIcon,
        Gift,
        MapPin,
        ArrowRight,
        Star,
        ShieldCheck,
        Clock,
        ClipboardList,
        Rocket,
        MessageCircle,
        CheckCircle,
    } from 'lucide-react';

export const metadata = {
    title: "Web Development for Healthcare Clinics | Fast, Secure Medical Websites",
    description: "Professional web development for doctors and healthcare clinics. We build fast, secure, SEO-optimized medical websites with appointment booking and patient-friendly design.",
    keywords: [
        "web development healthcare",
        "doctor website design",
        "clinic website Philippines",
    ],
};

export default function Page() {

    const structuredData = {
        "@context": "https://schema.org",
        "@graph": [
            {
            "@type": "Service",
            "name": "Web Development for Healthcare Clinics",
            "description":
                "We create fast, secure, and SEO-optimized websites for healthcare clinics and doctors in the Philippines. Our services include appointment booking systems, mobile-friendly design, and patient-focused user experience.",
            "provider": {
                "@type": "Organization",
                "name": "DigitizeBox",
                "url": "https://digitizebox.com"
            },
            "areaServed": {
                "@type": "Country",
                "name": "Philippines"
            },
            "serviceType": "Website Development",
            "url": "https://digitizebox.com/website-development",
            "offers": {
                "@type": "Offer",
                "priceCurrency": "PHP",
                "availability": "https://schema.org/InStock"
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
                            <Stethoscope className="w-4 h-4" />
                            Practice Growth Guide
                        </div>
                        <h1 className="text-4xl lg:text-6xl font-extrabold tracking-tight text-slate-900 leading-tight mb-8">
                            Why Every Doctor <br className="hidden lg:block" />
                            <span className="gradient-text">Needs a Website</span>
                        </h1>
                        <p className="text-xl text-slate-600 mb-10 leading-relaxed max-w-3xl mx-auto">
                            If you're a doctor or a clinic owner looking to grow your practice, relying on Facebook alone is no longer enough. Today, patients search online first—and this is where having a website + SEO makes a huge difference. We create professional websites for healthcare clinics that actually improve their online presence and brand.
                        </p>
                        <div className="flex flex-col sm:flex-row justify-center gap-4">
                            <a href="#offer" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-xl font-semibold text-lg transition shadow-xl shadow-blue-600/30 text-center flex items-center justify-center gap-2">
                                Claim Your Free Mockup <ArrowDown className="w-5 h-5" />
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-20 bg-slate-50 border-b border-slate-200">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="bg-blue-50/50 rounded-2xl p-8 md:p-12 border border-blue-100 shadow-sm relative overflow-hidden">
                        <div className="absolute -right-10 -top-10 opacity-10">
                            <Search className="w-48 h-48 text-blue-600" />
                        </div>
                        <div className="relative z-10">
                            <h3 className="flex items-center gap-3 text-2xl md:text-3xl font-bold text-slate-900 mb-6">
                                <span className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center text-blue-600">
                                    <Lightbulb className="w-6 h-6" />
                                </span>
                                What is SEO?
                            </h3>
                            <p className="text-lg text-slate-700 leading-relaxed mb-6">
                                SEO (Search Engine Optimization) is what helps your clinic appear on Google when patients search for things like:
                            </p>
                            <ul className="space-y-4 mb-8">
                                <li className="flex items-center gap-3 text-lg font-medium text-slate-800 bg-white p-4 rounded-lg border border-slate-100 shadow-sm">
                                    <Search className="w-5 h-5 text-blue-500" /> “Dermatologist near me”
                                </li>
                                <li className="flex items-center gap-3 text-lg font-medium text-slate-800 bg-white p-4 rounded-lg border border-slate-100 shadow-sm">
                                    <Search className="w-5 h-5 text-blue-500" /> “OB-GYN in Quezon City”
                                </li>
                            </ul>
                            <p className="text-xl font-semibold text-blue-800">
                                Without a website, there's a high chance they won't find you.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-24 bg-white">
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center max-w-2xl mx-auto mb-16">
                        <h2 className="text-3xl font-bold text-slate-900 mb-4">Facebook Page vs Website</h2>
                        <p className="text-slate-600">What's the difference, and why do you need both?</p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8 items-stretch">
                        <div className="bg-slate-50 p-8 rounded-2xl shadow-sm border border-slate-200">
                            <div className="w-14 h-14 bg-slate-200 rounded-xl flex items-center justify-center text-slate-600 mb-6">
                                <FacebookIcon className="w-7 h-7" />
                            </div>
                            <h3 className="text-xl font-bold text-slate-900 mb-6">Facebook Page</h3>
                            <ul className="space-y-4">
                                <li className="flex items-start gap-3">
                                    <Check className="w-5 h-5 text-emerald-500 mt-0.5 shrink-0" />
                                    <span className="text-slate-600">Great for updates and engagement</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <X className="w-5 h-5 text-red-400 mt-0.5 shrink-0" />
                                    <span className="text-slate-600">Limited control over layout and features</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <X className="w-5 h-5 text-red-400 mt-0.5 shrink-0" />
                                    <span className="text-slate-600">Doesn't always rank well on Google Search</span>
                                </li>
                            </ul>
                        </div>

                        <div className="bg-white p-8 rounded-2xl shadow-lg border border-blue-200 ring-2 ring-blue-600/10 relative overflow-hidden">
                            <div className="absolute top-0 right-0 bg-blue-600 text-white text-[10px] font-bold px-4 py-1.5 rounded-bl-lg uppercase tracking-wider">Recommended</div>
                            <div className="w-14 h-14 bg-blue-100 rounded-xl flex items-center justify-center text-blue-600 mb-6">
                                <Globe className="w-7 h-7" />
                            </div>
                            <h3 className="text-xl font-bold text-slate-900 mb-6">Professional Website</h3>
                            <ul className="space-y-4">
                                <li className="flex items-start gap-3">
                                    <Check className="w-5 h-5 text-blue-600 mt-0.5 shrink-0" /><span className="text-slate-700 font-medium">More professional and trustworthy</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <Check className="w-5 h-5 text-blue-600 mt-0.5 shrink-0" /><span className="text-slate-700 font-medium">Higher chance of appearing on Google search results</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <Check className="w-5 h-5 text-blue-600 mt-0.5 shrink-0" /><span className="text-slate-700 font-medium">You have full control over your content and branding</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-24 bg-slate-50 border-y border-slate-200">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center max-w-3xl mx-auto mb-16">
                        <h2 className="text-3xl font-bold text-slate-900 mb-4">4 Reasons Your Practice Needs a Website</h2>
                        <p className="text-slate-600">Transform how patients find, perceive, and interact with your clinic.</p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
                        <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 hover:shadow-lg transition">
                            <div className="w-14 h-14 bg-red-100 rounded-xl flex items-center justify-center text-red-600 mb-6">
                                <MapPin className="w-7 h-7" />
                            </div>
                            <h3 className="text-xl font-bold text-slate-900 mb-3">1. Appears on Google & Maps</h3>
                            <p className="text-slate-600 leading-relaxed mb-4">With a website, your clinic is easier to index on Google and connect to Google Maps.</p>
                            <div className="bg-slate-50 p-3 rounded-lg border border-slate-100 flex gap-2 items-start">
                                <ArrowRight className="w-5 h-5 text-blue-500 shrink-0 mt-0.5" />
                                <span className="text-sm font-semibold text-slate-700">Result: Nearby patients can easily find your clinic.</span>
                            </div>
                        </div>

                        <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 hover:shadow-lg transition">
                            <div className="w-14 h-14 bg-amber-100 rounded-xl flex items-center justify-center text-amber-600 mb-6">
                                <Star className="w-7 h-7" />
                            </div>
                            <h3 className="text-xl font-bold text-slate-900 mb-3">2. Builds Credibility</h3>
                            <p className="text-slate-600 leading-relaxed mb-4">Patients trust doctors who have a professional website.</p>
                            <div className="bg-slate-50 p-3 rounded-lg border border-slate-100 flex gap-2 items-start">
                                <ShieldCheck className="w-5 h-5 text-blue-500 shrink-0 mt-0.5" />
                                <span className="text-sm font-semibold text-slate-700">Think of it as your digital clinic—it builds confidence even before their first visit.</span>
                            </div>
                        </div>

                        <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 hover:shadow-lg transition">
                            <div className="w-14 h-14 bg-emerald-100 rounded-xl flex items-center justify-center text-emerald-600 mb-6">
                                <Clock className="w-7 h-7" />
                            </div>
                            <h3 className="text-xl font-bold text-slate-900 mb-3">3. Available 24/7 for Patients</h3>
                            <p className="text-slate-600 leading-relaxed mb-4">Even when your clinic is closed, your website works for you by answering FAQs, showing your schedule, and providing important instructions.</p>
                            <div className="bg-slate-50 p-3 rounded-lg border border-slate-100 flex gap-2 items-start">
                                <ArrowRight className="w-5 h-5 text-blue-500 shrink-0 mt-0.5" />
                                <span className="text-sm font-semibold text-slate-700">Result: Less repetitive inquiries, more efficiency for your practice.</span>
                            </div>
                        </div>

                        <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 hover:shadow-lg transition">
                            <div className="w-14 h-14 bg-purple-100 rounded-xl flex items-center justify-center text-purple-600 mb-6">
                                <ClipboardList className="w-7 h-7" />
                            </div>
                            <h3 className="text-xl font-bold text-slate-900 mb-3">4. Showcases Your Services</h3>
                            <p className="text-slate-600 leading-relaxed mb-4">Patients don't have to guess what you offer. You can clearly present specializations, procedures, packages, and contact details.</p>
                            <div className="bg-slate-50 p-3 rounded-lg border border-slate-100 flex gap-2 items-start">
                                <ArrowRight className="w-5 h-5 text-blue-500 shrink-0 mt-0.5" />
                                <span className="text-sm font-semibold text-slate-700">Result: Cleaner, more organized, and more professional.</span>
                            </div>
                        </div>
                    </div>
                    
                    <div className="mt-12 max-w-4xl mx-auto bg-slate-900 rounded-2xl p-8 md:p-10 text-center shadow-xl">
                        <div className="inline-flex items-center justify-center w-12 h-12 bg-blue-500/20 text-blue-400 rounded-full mb-4">
                            <Rocket className="w-6 h-6" />
                        </div>
                        <h3 className="text-2xl font-bold text-white mb-2">The Bottom Line</h3>
                        <p className="text-lg text-slate-300">If you want more patients to find and trust your clinic, a website + SEO is essential.</p>
                    </div>
                </div>
            </section>

            <section id="offer" className="py-24 bg-blue-600 text-white relative overflow-hidden">
                <div className="absolute inset-0 opacity-10">
                    <svg className="h-full w-full" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" preserveAspectRatio="none">
                        <path fill="currentColor" d="M0 100 C 20 0 50 0 100 100 Z"></path>
                    </svg>
                </div>
                
                <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="grid md:grid-cols-2 gap-12 items-center bg-white/10 backdrop-blur-sm p-8 md:p-12 rounded-3xl border border-white/20 shadow-2xl">
                        
                        <div>
                            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/20 font-semibold text-sm mb-6 border border-white/30">
                                <Gift className="w-4 h-4" /> Special Offer for Filipino Doctors
                            </div>
                            <h2 className="text-3xl md:text-4xl font-bold mb-6">Let's build your digital clinic today.</h2>
                            <p className="text-blue-100 text-lg mb-8 leading-relaxed">
                                Transitioning to a professional online presence is easier than you think. We handle the tech so you can focus on your patients.
                            </p>
                            
                            <a href="#contact" className="inline-flex items-center gap-2 bg-white text-blue-600 hover:bg-slate-50 px-8 py-4 rounded-xl font-bold text-lg transition shadow-lg">
                                Message Us Now <CheckCircle className="w-5 h-5" />
                            </a>
                        </div>

                        <div className="space-y-6">
                            <div className="bg-slate-900/40 p-6 rounded-2xl border border-white/10">
                                <h4 className="font-bold text-xl flex items-center gap-2 mb-3">
                                    <MessageCircle className="text-emerald-400 w-6 h-6" /> FREE Website Mockup
                                </h4>
                                <ul className="space-y-2 text-blue-100">
                                    <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-blue-300"></div> See exactly how your website will look</li>
                                    <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-blue-300"></div> Zero commitment required</li>
                                </ul>
                            </div>
                            
                            <div className="bg-slate-900/40 p-6 rounded-2xl border border-white/10">
                                <h4 className="font-bold text-xl flex items-center gap-2 mb-3">
                                    <CheckCircle className="text-emerald-400 w-6 h-6" /> Complete Web Development
                                </h4>
                                <ul className="space-y-2 text-blue-100">
                                    <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-blue-300"></div> Fully customized for your clinic's brand</li>
                                    <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-blue-300"></div> SEO-optimized to rank on Google</li>
                                    <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-blue-300"></div> 100% Mobile-friendly for patients on phones</li>
                                </ul>
                            </div>
                        </div>

                    </div>
                </div>
            </section>
        </main>
    );
}