import Link from "next/link";
import Image from "next/image";
import ContactForm from "@/app/ui/contact-form";

export default function More()  {
    return (
        <section className="relative py-12">
            <Image 
                src='/bg-pattern-navyblue.png'
                alt='background pattern'
                width={512}
                height={512}
                className="absolute inset-0 z-1 w-full h-full"
            />
            <div className="max-w-[1440px] w-4/5 mx-auto relative z-2 flex flex-col lg:flex-row 2xl:gap-32 md:gap-14 gap-12 items-center">
                <div className="lg:w-1/2">
                    <h2 className="font-heading text-3xl font-semibold text-white">Current features to come</h2>
                    <p className="font-body text-md mt-2 text-white">Expect more products and features to reduce operational complexity and staffing overhead while improving efficiency.</p>
                    <p className="font-body text-md mt-4 text-white">In the future, you can store, manage, and use your patient inforamation through the system. AI can summarize information and make a recommendation.</p>
                    <p className="font-body text-md mt-4 text-white">Automate reminder for you and your patients for follow-up appointments. This is an effective solution to retain your patients and monitor their progress.</p>
                </div>
                <div className="lg:w-1/2">
                    <h2 className="font-heading text-center text-3xl font-semibold text-white">Contact us</h2>
                    <p className="font-body text-md mt-2 text-white text-center">Send us your inquiries, suggestions, or concerns. We would like to help.</p>
                    <div className="mt-6">
                        <ContactForm />
                    </div>
                </div>
            </div>
        </section>
    );
}