import { Metadata } from 'next';
import {
    Shield,
    User,
    Monitor,
    Cookie,
    Settings,
    CheckCircle2,
    Lock,
    Share2,
    ExternalLink,
    RefreshCw,
    CheckSquare,
    Mail,
} from 'lucide-react';

export const metadata: Metadata = {
    title: "Privacy Policy",
};

export default function Page() {
    return (
        <>
            <main>
                {/* Page Header */}
                <section className="pt-32 pb-12 lg:pt-40 lg:pb-16 bg-white border-b border-slate-200">
                    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-blue-600 font-semibold text-sm mb-6 border border-blue-100">
                            <Shield className="w-4 h-4" /> Legal & Compliance
                        </div>
                        <h1 className="text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-900 mb-6">
                            Privacy Policy
                        </h1>
                        <p className="text-slate-500 font-medium">
                            Last updated on April 4, 2026
                        </p>
                    </div>
                </section>

                {/* Privacy Policy Content */}
                <section className="py-16 bg-slate-50">
                    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="bg-white p-8 md:p-12 rounded-2xl shadow-sm border border-slate-200 text-slate-700 leading-relaxed space-y-10">
                            
                            {/* Intro */}
                            <div>
                                <p className="text-lg">
                                    This Privacy Policy governs the manner in which our company collects, uses, maintains, and discloses information collected from users (each, a "User") of our website ("Site") and our suite of web applications, including but not limited to our Electronic Health Record (EHR) system, appointment scheduling system, and other services provided to our subscribing organizations (collectively, the "Services").
                                </p>
                            </div>

                            {/* Section 1 */}
                            <div>
                                <h2 className="text-2xl font-bold text-slate-900 mb-4 pb-2 border-b border-slate-100 flex items-center gap-2">
                                    <User className="w-6 h-6 text-blue-600" /> Personal Identification Information
                                </h2>
                                <p>
                                    We may collect personal identification information from Users in a variety of ways, including, but not limited to, when Users visit our Site, register for an account within our EHR or scheduling systems, fill out a form, and in connection with other activities, services, features, or resources we make available through our Services. Users may be asked for, as appropriate, name, email address, mailing address, phone number, and relevant professional or health-related data necessary for the functionality of the EHR and appointment systems. Users may visit our public Site anonymously, but use of our web applications requires registration and identification. We will collect personal identification information only if Users voluntarily submit such information to us.
                                </p>
                            </div>

                            {/* Section 2 */}
                            <div>
                                <h2 className="text-2xl font-bold text-slate-900 mb-4 pb-2 border-b border-slate-100 flex items-center gap-2">
                                    <Monitor className="w-6 h-6 text-blue-600" /> Non-Personal Identification Information
                                </h2>
                                <p>
                                    We may collect non-personal identification information about Users whenever they interact with our Site or web applications. This may include browser names, computer types, and technical information about the User's means of connection to our Services, such as the operating system, Internet service providers utilized, and other similar technical data.
                                </p>
                            </div>

                            {/* Section 3 */}
                            <div>
                                <h2 className="text-2xl font-bold text-slate-900 mb-4 pb-2 border-b border-slate-100 flex items-center gap-2">
                                    <Cookie className="w-6 h-6 text-blue-600" /> Web Browser Cookies
                                </h2>
                                <p>
                                    Our Site and web applications may use "cookies" to enhance User experience and maintain session security. A User's web browser places cookies on their hard drive for record-keeping purposes and sometimes to track information about them (such as login preferences). Users may choose to set their web browser to refuse cookies or to alert them when cookies are being sent. If they do so, please note that significant portions of the Services, particularly the EHR and scheduling systems, may not function properly.
                                </p>
                            </div>

                            {/* Section 4 */}
                            <div>
                                <h2 className="text-2xl font-bold text-slate-900 mb-4 pb-2 border-b border-slate-100 flex items-center gap-2">
                                    <Settings className="w-6 h-6 text-blue-600" /> How We Use Collected Information
                                </h2>
                                <p className="mb-4">We may collect and use Users' personal information for the following purposes:</p>
                                <ul className="space-y-4">
                                    <li className="flex items-start gap-3">
                                        <CheckCircle2 className="w-5 h-5 text-emerald-500 mt-1 shrink-0" />
                                        <div><strong className="text-slate-900">To provide and operate our Services:</strong> We use your information to display content correctly and to ensure the functional integrity of the EHR and appointment systems for subscribing organizations.</div>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <CheckCircle2 className="w-5 h-5 text-emerald-500 mt-1 shrink-0" />
                                        <div><strong className="text-slate-900">To facilitate healthcare coordination:</strong> Information entered into our EHR and scheduling systems is used to manage patient records and facilitate appointments as directed by the subscribing service provider.</div>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <CheckCircle2 className="w-5 h-5 text-emerald-500 mt-1 shrink-0" />
                                        <div><strong className="text-slate-900">To run marketing campaigns:</strong> We may use information to manage retargeting display ads or promotional outreach related to our company.</div>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <CheckCircle2 className="w-5 h-5 text-emerald-500 mt-1 shrink-0" />
                                        <div><strong className="text-slate-900">To improve customer service:</strong> Your information helps us respond to your technical support needs and service requests more efficiently.</div>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <CheckCircle2 className="w-5 h-5 text-emerald-500 mt-1 shrink-0" />
                                        <div><strong className="text-slate-900">To personalize user experience:</strong> We may use information in the aggregate to understand how our Users as a group use the resources provided across our various platforms.</div>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <CheckCircle2 className="w-5 h-5 text-emerald-500 mt-1 shrink-0" />
                                        <div><strong className="text-slate-900">To improve our Site and Applications:</strong> We may use feedback you provide to improve our software interface, features, and overall performance.</div>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <CheckCircle2 className="w-5 h-5 text-emerald-500 mt-1 shrink-0" />
                                        <div><strong className="text-slate-900">To process periodic emails:</strong> We may use the email address to send User information and updates pertaining to their account or scheduled appointments. It may also be used to respond to inquiries, questions, and/or other requests.</div>
                                    </li>
                                </ul>
                            </div>

                            {/* Section 5 */}
                            <div>
                                <h2 className="text-2xl font-bold text-slate-900 mb-4 pb-2 border-b border-slate-100 flex items-center gap-2">
                                    <Lock className="w-6 h-6 text-blue-600" /> How We Protect Your Information
                                </h2>
                                <p>
                                    We adopt industry-standard data collection, storage, and processing practices and security measures to protect against unauthorized access, alteration, disclosure, or destruction of your personal information, username, password, transaction information, and sensitive data (including health records) stored within our Services. Given the nature of EHR data, we implement enhanced encryption and access controls to maintain confidentiality.
                                </p>
                            </div>

                            {/* Section 6 */}
                            <div>
                                <h2 className="text-2xl font-bold text-slate-900 mb-4 pb-2 border-b border-slate-100 flex items-center gap-2">
                                    <Share2 className="w-6 h-6 text-blue-600" /> Sharing Your Personal Information
                                </h2>
                                <p>
                                    We may share or sell information with third parties for marketing or other purposes. We may use third-party service providers to help us operate our business and the Services or administer activities on our behalf, such as sending out newsletters or surveys. We may share your information with these third parties for those limited purposes provided that you have given us your permission. In the context of our EHR and scheduling systems, data is shared with the specific subscribing organization (your healthcare provider or employer) as part of the core service delivery.
                                </p>
                            </div>

                            {/* Section 7 */}
                            <div>
                                <h2 className="text-2xl font-bold text-slate-900 mb-4 pb-2 border-b border-slate-100 flex items-center gap-2">
                                    <ExternalLink className="w-6 h-6 text-blue-600" /> Third-Party Websites
                                </h2>
                                <p>
                                    Users may find advertising or other content on our Site or within our Apps that link to the sites and services of our partners, suppliers, advertisers, sponsors, and other third parties. We do not control the content or links that appear on these sites and are not responsible for the practices employed by websites linked to or from our Services. These sites and services may have their own privacy and customer service policies.
                                </p>
                            </div>

                            {/* Section 8 */}
                            <div>
                                <h2 className="text-2xl font-bold text-slate-900 mb-4 pb-2 border-b border-slate-100 flex items-center gap-2">
                                    <RefreshCw className="w-6 h-6 text-blue-600" /> Changes To This Privacy Policy
                                </h2>
                                <p>
                                    We have the discretion to update this privacy policy at any time. When we do, we will post a notification on the main page of our Site and provide an alert within our web application dashboards. We encourage Users to frequently check this page for any changes to stay informed about how we are helping to protect the personal information we collect. You acknowledge and agree that it is your responsibility to review this privacy policy periodically.
                                </p>
                            </div>

                            {/* Section 9 */}
                            <div>
                                <h2 className="text-2xl font-bold text-slate-900 mb-4 pb-2 border-b border-slate-100 flex items-center gap-2">
                                    <CheckSquare className="w-6 h-6 text-blue-600" /> Your Acceptance Of These Terms
                                </h2>
                                <p>
                                    By using this Site or our web applications (EHR, appointment systems, etc.), you signify your acceptance of this policy. If you do not agree to this policy, please do not use our Services. Your continued use of the Site or Apps following the posting of changes to this policy will be deemed your acceptance of those changes.
                                </p>
                            </div>

                            {/* Section 10 */}
                            <div>
                                <h2 className="text-2xl font-bold text-slate-900 mb-4 pb-2 border-b border-slate-100 flex items-center gap-2">
                                    <Mail className="w-6 h-6 text-blue-600" /> Contacting Us
                                </h2>
                                <p>
                                    If you have any questions about this Privacy Policy, the practices of these Services, or your dealings with our web applications, please contact us at <a href="mailto:digitizebox@gmail.com" className="text-blue-600 hover:underline font-medium">digitizebox@gmail.com</a>.
                                </p>
                            </div>

                        </div>
                    </div>
                </section>
            </main>
        </>
    );
}