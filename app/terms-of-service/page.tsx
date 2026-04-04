import { Metadata } from 'next';
import Link from "next/link";
import {
    Scale,
    Info,
    Layers,
    Check,
    UserCheck,
    Users,
    ShieldCheck,
    Copyright,
    CreditCard,
    Link2,
    Activity,
    AlertTriangle,
    ShieldAlert,
    XOctagon,
    Lock,
    RefreshCw,
    MapPin,
    Mail,
    FileText,
} from 'lucide-react';

export const metadata: Metadata = {
    title: "Terms of Service",
};

export default function Page() {
    return (
        <>
            <main>
                <section className="pt-32 pb-12 lg:pt-40 lg:pb-16 bg-white border-b border-slate-200">
                    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-blue-600 font-semibold text-sm mb-6 border border-blue-100">
                            <Scale className="w-4 h-4" /> Legal & Compliance
                        </div>
                        <h1 className="text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-900 mb-6">
                            Terms of Service
                        </h1>
                        <p className="text-slate-500 font-medium space-x-2">
                            <span>Effective Date: April 4, 2026</span>
                            <span className="text-slate-300">|</span>
                            <span>Last Updated: April 4, 2026</span>
                        </p>
                    </div>
                </section>

                {/* Terms of Service Content */}
                <section className="py-16 bg-slate-50">
                    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="bg-white p-8 md:p-12 rounded-2xl shadow-sm border border-slate-200 text-slate-700 leading-relaxed space-y-10">
                            
                            {/* Section 1 */}
                            <div>
                                <h2 className="text-2xl font-bold text-slate-900 mb-4 pb-2 border-b border-slate-100 flex items-center gap-2">
                                    <Info className="w-6 h-6 text-blue-600"/> 1. Introduction
                                </h2>
                                <p className="mb-4">
                                    Welcome to DigitizeBox (“Company,” “we,” “us,” or “our”). These Terms of Service (“Terms”) govern your access to and use of our services, including but not limited to website development, Electronic Health Record (EHR) systems, scheduling systems, and related software solutions (collectively, the “Services”).
                                </p>
                                <p>
                                    By accessing or using our Services, you agree to be bound by these Terms.
                                </p>
                            </div>

                            {/* Section 2 */}
                            <div>
                                <h2 className="text-2xl font-bold text-slate-900 mb-4 pb-2 border-b border-slate-100 flex items-center gap-2">
                                    <Layers className="w-6 h-6 text-blue-600" /> 2. Services Provided
                                </h2>
                                <p className="mb-4">We offer the following services:</p>
                                <ul className="space-y-3 mb-4 pl-2">
                                    <li className="flex items-start gap-3">
                                        <Check className="w-5 h-5 text-blue-500 mt-0.5 shrink-0" />
                                        <span>Custom website design and development</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <Check className="w-5 h-5 text-blue-500 mt-0.5 shrink-0" />
                                        <span>Electronic Health Record (EHR) system development and maintenance</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <Check className="w-5 h-5 text-blue-500 mt-0.5 shrink-0" />
                                        <span>Scheduling and appointment management systems</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <Check className="w-5 h-5 text-blue-500 mt-0.5 shrink-0" />
                                        <span>Software integration and customization</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <Check className="w-5 h-5 text-blue-500 mt-0.5 shrink-0" />
                                        <span>Technical support and maintenance</span>
                                    </li>
                                </ul>
                                <p>
                                    All services are subject to separate agreements, proposals, or statements of work (SOW), which may include additional terms.
                                </p>
                            </div>

                            {/* Section 3 */}
                            <div>
                                <h2 className="text-2xl font-bold text-slate-900 mb-4 pb-2 border-b border-slate-100 flex items-center gap-2">
                                    <UserCheck className="w-6 h-6 text-blue-600" /> 3. Eligibility
                                </h2>
                                <p>
                                    You must be at least 18 years old and legally capable of entering into binding agreements to use our Services.
                                </p>
                            </div>

                            {/* Section 4 */}
                            <div>
                                <h2 className="text-2xl font-bold text-slate-900 mb-4 pb-2 border-b border-slate-100 flex items-center gap-2">
                                    <Users className="w-6 h-6 text-blue-600" /> 4. User Responsibilities
                                </h2>
                                <p className="mb-3 font-medium text-slate-900">You agree to:</p>
                                <ul className="list-disc list-inside space-y-2 mb-6 ml-2 text-slate-600">
                                    <li>Provide accurate and complete information</li>
                                    <li>Use the Services in compliance with applicable laws and regulations</li>
                                    <li>Maintain the confidentiality of your login credentials</li>
                                    <li>Ensure that any data you provide (including patient data, if applicable) is lawfully obtained and shared</li>
                                </ul>
                                <p className="mb-3 font-medium text-slate-900">You are solely responsible for:</p>
                                <ul className="list-disc list-inside space-y-2 ml-2 text-slate-600">
                                    <li>The legality and accuracy of your data</li>
                                    <li>Compliance with healthcare regulations (e.g., data privacy laws applicable in your jurisdiction)</li>
                                </ul>
                            </div>

                            {/* Section 5 */}
                            <div>
                                <h2 className="text-2xl font-bold text-slate-900 mb-4 pb-2 border-b border-slate-100 flex items-center gap-2">
                                    <ShieldCheck className="w-6 h-6 text-blue-600" /> 5. Data Privacy and Security
                                </h2>
                                <p className="mb-3">We take reasonable measures to protect your data. However:</p>
                                <ul className="list-disc list-inside space-y-2 mb-6 ml-2 text-slate-600">
                                    <li>You are responsible for ensuring compliance with applicable data protection laws</li>
                                    <li>For EHR systems, you must ensure lawful handling of patient information</li>
                                    <li>We process data in accordance with our <Link href="/privacy-policy" className="text-blue-600 hover:underline">Privacy Policy</Link></li>
                                </ul>
                                <p className="mb-3 font-medium text-slate-900">We are not liable for breaches caused by:</p>
                                <ul className="list-disc list-inside space-y-2 ml-2 text-slate-600">
                                    <li>User negligence</li>
                                    <li>Third-party systems outside our control</li>
                                </ul>
                            </div>

                            {/* Section 6 */}
                            <div>
                                <h2 className="text-2xl font-bold text-slate-900 mb-4 pb-2 border-b border-slate-100 flex items-center gap-2">
                                    <Copyright className="w-6 h-6 text-blue-600" /> 6. Intellectual Property
                                </h2>
                                <p className="mb-3 font-medium text-slate-900">All intellectual property rights related to:</p>
                                <ul className="list-disc list-inside space-y-2 mb-6 ml-2 text-slate-600">
                                    <li>Our software</li>
                                    <li>Code frameworks</li>
                                    <li>System architecture</li>
                                </ul>
                                <p className="mb-4">remain the property of the Company unless otherwise stated in writing.</p>
                                <p className="mb-3 font-medium text-slate-900">Upon full payment, clients may receive:</p>
                                <ul className="list-disc list-inside space-y-2 ml-2 text-slate-600">
                                    <li>A license to use the software, or</li>
                                    <li>Ownership of specific deliverables, as defined in the contract</li>
                                </ul>
                            </div>

                            {/* Section 7 */}
                            <div>
                                <h2 className="text-2xl font-bold text-slate-900 mb-4 pb-2 border-b border-slate-100 flex items-center gap-2">
                                    <CreditCard className="w-6 h-6 text-blue-600" /> 7. Payment Terms
                                </h2>
                                <ul className="list-disc list-inside space-y-2 mb-6 ml-2 text-slate-600">
                                    <li>Fees are outlined in the applicable contract, proposal, or invoice</li>
                                    <li>Payments must be made on time according to agreed schedules</li>
                                </ul>
                                <p className="mb-3 font-medium text-slate-900">Late payments may result in:</p>
                                <ul className="list-disc list-inside space-y-2 mb-6 ml-2 text-slate-600">
                                    <li>Service suspension</li>
                                    <li>Additional fees</li>
                                </ul>
                                <p>All payments are non-refundable unless otherwise specified.</p>
                            </div>

                            {/* Section 8 */}
                            <div>
                                <h2 className="text-2xl font-bold text-slate-900 mb-4 pb-2 border-b border-slate-100 flex items-center gap-2">
                                    <Link2 className="w-6 h-6 text-blue-600" /> 8. Third-Party Services
                                </h2>
                                <p className="mb-3">
                                    Our Services may integrate with third-party tools (e.g., hosting providers, APIs). We are not responsible for:
                                </p>
                                <ul className="list-disc list-inside space-y-2 ml-2 text-slate-600">
                                    <li>Downtime or errors caused by third-party services</li>
                                    <li>Changes in third-party pricing or policies</li>
                                </ul>
                            </div>

                            {/* Section 9 */}
                            <div>
                                <h2 className="text-2xl font-bold text-slate-900 mb-4 pb-2 border-b border-slate-100 flex items-center gap-2">
                                    <Activity className="w-6 h-6 text-blue-600" /> 9. Service Availability
                                </h2>
                                <p className="mb-3">We aim to provide reliable Services but do not guarantee:</p>
                                <ul className="list-disc list-inside space-y-2 mb-4 ml-2 text-slate-600">
                                    <li>Continuous, uninterrupted access</li>
                                    <li>Error-free operation</li>
                                </ul>
                                <p>Maintenance, updates, or unforeseen issues may result in temporary downtime.</p>
                            </div>

                            {/* Section 10 */}
                            <div>
                                <h2 className="text-2xl font-bold text-slate-900 mb-4 pb-2 border-b border-slate-100 flex items-center gap-2">
                                    <AlertTriangle className="w-6 h-6 text-blue-600" /> 10. Limitation of Liability
                                </h2>
                                <p className="mb-3 font-medium text-slate-900">To the fullest extent permitted by law:</p>
                                <ul className="list-disc list-inside space-y-2 mb-6 ml-2 text-slate-600">
                                    <li>We are not liable for indirect, incidental, or consequential damages</li>
                                    <li>Our total liability is limited to the amount paid for the Services in the past 12 months</li>
                                </ul>
                                <p className="mb-3 font-medium text-slate-900">This includes damages related to:</p>
                                <ul className="list-disc list-inside space-y-2 ml-2 text-slate-600">
                                    <li>Data loss</li>
                                    <li>Business interruption</li>
                                    <li>System failures</li>
                                </ul>
                            </div>

                            {/* Section 11 */}
                            <div>
                                <h2 className="text-2xl font-bold text-slate-900 mb-4 pb-2 border-b border-slate-100 flex items-center gap-2">
                                    <ShieldAlert className="w-6 h-6 text-blue-600" /> 11. Indemnification
                                </h2>
                                <p className="mb-3">
                                    You agree to indemnify and hold harmless the Company from any claims, damages, or expenses arising from:
                                </p>
                                <ul className="list-disc list-inside space-y-2 ml-2 text-slate-600">
                                    <li>Your use of the Services</li>
                                    <li>Your violation of these Terms</li>
                                    <li>Your breach of applicable laws or regulations</li>
                                </ul>
                            </div>

                            {/* Section 12 */}
                            <div>
                                <h2 className="text-2xl font-bold text-slate-900 mb-4 pb-2 border-b border-slate-100 flex items-center gap-2">
                                    <XOctagon className="w-6 h-6 text-blue-600" /> 12. Termination
                                </h2>
                                <p className="mb-3 font-medium text-slate-900">We may suspend or terminate your access if:</p>
                                <ul className="list-disc list-inside space-y-2 mb-6 ml-2 text-slate-600">
                                    <li>You violate these Terms</li>
                                    <li>Payments are overdue</li>
                                    <li>Required by law</li>
                                </ul>
                                <p className="mb-3 font-medium text-slate-900">Upon termination:</p>
                                <ul className="list-disc list-inside space-y-2 ml-2 text-slate-600">
                                    <li>Your access to Services will be revoked</li>
                                    <li>Data retention and deletion will follow our data policies</li>
                                </ul>
                            </div>

                            {/* Section 13 */}
                            <div>
                                <h2 className="text-2xl font-bold text-slate-900 mb-4 pb-2 border-b border-slate-100 flex items-center gap-2">
                                    <Lock className="w-6 h-6 text-blue-600" /> 13. Confidentiality
                                </h2>
                                <p>
                                    Both parties agree to keep confidential any proprietary or sensitive information shared during the course of the engagement.
                                </p>
                            </div>

                            {/* Section 14 */}
                            <div>
                                <h2 className="text-2xl font-bold text-slate-900 mb-4 pb-2 border-b border-slate-100 flex items-center gap-2">
                                    <RefreshCw className="w-6 h-6 text-blue-600" /> 14. Modifications to Terms
                                </h2>
                                <p>
                                    We may update these Terms from time to time. Continued use of the Services constitutes acceptance of the updated Terms.
                                </p>
                            </div>

                            {/* Section 15 */}
                            <div>
                                <h2 className="text-2xl font-bold text-slate-900 mb-4 pb-2 border-b border-slate-100 flex items-center gap-2">
                                    <MapPin className="w-6 h-6 text-blue-600" /> 15. Governing Law
                                </h2>
                                <p>
                                    These Terms shall be governed by and interpreted in accordance with the laws of the Philippines.
                                </p>
                            </div>

                            {/* Section 16 */}
                            <div>
                                <h2 className="text-2xl font-bold text-slate-900 mb-4 pb-2 border-b border-slate-100 flex items-center gap-2">
                                    <Mail className="w-6 h-6 text-blue-600" /> 16. Contact Information
                                </h2>
                                <p className="mb-4">For questions about these Terms, please contact:</p>
                                <div className="bg-slate-50 p-6 rounded-xl border border-slate-100 space-y-2">
                                    <p><strong>DigitizeBox</strong></p>
                                    <p><a href="mailto:digitizebox@gmail.com" className="text-blue-600 hover:underline">digitizebox@gmail.com</a></p>
                                </div>
                            </div>

                            {/* Section 17 */}
                            <div>
                                <h2 className="text-2xl font-bold text-slate-900 mb-4 pb-2 border-b border-slate-100 flex items-center gap-2">
                                    <FileText className="w-6 h-6 text-blue-600" /> 17. Entire Agreement
                                </h2>
                                <p className="mb-6">
                                    These Terms, together with any applicable agreements or contracts, constitute the entire agreement between you and the Company.
                                </p>
                                <div className="bg-blue-50 border border-blue-100 text-blue-800 p-6 rounded-xl font-medium">
                                    By using our Services, you acknowledge that you have read, understood, and agree to these Terms of Service.
                                </div>
                            </div>

                        </div>
                    </div>
                </section>
            </main>
        </>
    );
}