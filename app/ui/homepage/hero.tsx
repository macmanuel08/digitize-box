import Image from "next/image";
import Link from "next/link";

export default function Hero() {
    return (
        <section className="hero min-h-[500px] relative lg:h-[calc(100vh-60px)]">
            <Image
                src="/hf1.png"
                width={1000}
                height={727}
                className="lg:w-full lg:h-full object-cover"
                alt="Doctor and staff using scheduling system"
            />
            <div className="lg:absolute lg:inset-0 grid place-items-center p-6 bg-black bg-opacity-80 lg:pb-0 pb-16">
                <div>
                    <h1 className={`font-heading mb-3 lg:text-5xl text-3xl font-semibold text-center text-white`}>Digitalize your work.</h1>
                    <p className="font-body uppercase tracking-widest text-center lg:text-xl text-md text-white">Effortless patient care.</p>
                    <Link className="btn btn-primary mx-auto mt-6" href='/signup/company-info'>Register Your Business</Link>
                </div>
            </div>
        </section>
    )
}