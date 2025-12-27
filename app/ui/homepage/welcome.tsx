import Image from "next/image";
import Link from "next/link";

export default function Welcome() {
    return (
        <section className="max-w-[1440px] mx-auto py-12 px-16 flex items-center lg:flex-row flex-col lg:gap-16 gap-12 -mt-9 rounded-2xl bg-white relative z-10 shadow-lg">
            <div className="lg:w-3/5 w-full">
                <Image
                    src="/welcome-img.png"
                    width={600}
                    height={450}
                    className="lg:w-full h-auto rounded-xl"
                    alt="Doctor using laptop"
                />
            </div>
            <div>
                <p className="font-body text-lg">
                    Our mission is to simplify doctors' workflow by <span className="text-blue-500 font-semibold">reducing administrative burdens</span> allowing them to <span className="text-blue-500 font-semibold">focus more on patient care</span> and other critical responsibilities.
                </p>
                <p className="font-body text-lg mt-6">
                    By streamlining admin work, we help practices <span className="text-blue-500 font-semibold">operate efficiently without the need of multiple secretaries or assistants</span>.
                </p>
            </div>
        </section>
    )
}