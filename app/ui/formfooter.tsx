import Link from "next/link";
import ContactForm from "@/app/ui/contact-form";
import DigitizeBoxLogoLetters from "@/app/ui/digitizebox-logo-letters";
import { Box, Mail, Globe } from "lucide-react";

export default function FormFooter() {
    return (
        <footer id="contact" className="bg-slate-900 text-white border-t-8 border-blue-600 scroll-mt-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
                <div className="grid lg:grid-cols-2 gap-16">
                    
                    {/* Footer Branding & Text */}
                    <div>
                        <Link href="/">
                            <div className="w-32 text-white md:w-56 mb-8">
                                <div className="p-2 w-full border-2 border-solid border-white">
                                    <div className="w-12 ml-auto">
                                        <DigitizeBoxLogoLetters color="white" />
                                    </div>
                                </div>
                                <div className="text-center tracking-widest font-medium">DigitizeBox</div>
                            </div>
                        </Link>
                        
                        <h2 className="text-3xl font-bold mb-6">Ready to streamline your practice?</h2>
                        <p className="text-slate-400 text-lg mb-8 leading-relaxed max-w-md">
                            Drop us a message. We'll get back to you to discuss how we can tailor our solutions for your specific medical facility needs.
                        </p>
                        
                        <div className="space-y-4 text-slate-400">
                            <div className="flex items-center gap-3">
                                <Mail className="w-5 h-5 text-blue-400" />
                                <span>digitizebox@gmail.com</span>
                            </div>
                            <div className="flex items-center gap-3">
                                <Globe className="w-5 h-5 text-blue-400" />
                                <span>digitizebox.com</span>
                            </div>
                        </div>
                    </div>

                    {/* Contact Form */}
                    <ContactForm />
                </div>

                {/* Footer Bottom */}
                <div className="mt-16 pt-8 border-t border-slate-800 text-center text-slate-500 text-sm flex flex-col md:flex-row justify-between items-center">
                    <p>&copy; {new Date().getFullYear()} DigitizeBox. All rights reserved.</p>
                    <div className="flex space-x-6 mt-4 md:mt-0">
                        <Link href="#" className="hover:text-white transition">Privacy Policy</Link>
                        <Link href="#" className="hover:text-white transition">Terms of Service</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}