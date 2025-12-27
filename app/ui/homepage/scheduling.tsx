import Link from "next/link";
import Image from "next/image";

export default function Scheduling() {
    return (
        <section className="pt-24 pb-32 flex items-center lg:flex-row flex-col-reverse lg:gap-32 gap-32 max-w-[1440px] w-4/5 mx-auto">
            <div>
                <h2 className="font-heading text-3xl font-semibold text-blue-600">Scheduling system</h2>
                <p className="font-body text-lg mt-3">
                    Our secheduling system is our first product, designed for rapid improvements, continous feature expansion, and future solutions.
                </p>
                <Link href='/signup/company-info' className='btn btn-primary mt-6'>Sign Up</Link>
            </div>
            <div className="lg:w-3/5 w-full relative">
                <Image
                    src="/scheduling-form.png"
                    width={979}
                    height={835}
                    className="w-full h-auto rounded-xl border-2 border-solid border-gray-300"
                    alt="Scheduling appointment form UI"
                />
                <Image 
                    src='/calendar-dashboard.png'
                    width={1496}
                    height={784}
                    className="w-full h-auto absolute rounded-xl border-2 border-solid border-gray-300 -bottom-16 lg:left-16 left-6"
                    alt="Appointments Calendar UI"
                />
            </div>
        </section>
    );
}