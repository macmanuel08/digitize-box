import DigitizeBoxLogoLetters from "@/app/ui/digitizebox-logo-letters";
import Link from "next/link";

export default function Header() {
    return (
        <header>
            <nav className="fixed w-full bg-white/90 backdrop-blur-md border-b border-slate-200 z-50 py-3">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between items-center">

                        {/* Logo */}
                        <Link href="/">
                            <div className="w-32 text-blue-600 md:w-56">
                                <div className="p-2 w-full border-2 border-solid border-blue-600">
                                    <div className="w-12 ml-auto">
                                        <DigitizeBoxLogoLetters color="blue-600" />
                                    </div>
                                </div>
                                <div className="text-center tracking-widest font-medium">DigitizeBox</div>
                            </div>
                        </Link>
                        
                        {/* Some links are hidden on mobile */}
                        <div className="flex items-center space-x-8">
                            <Link href="/#mission" className="lg:inline-block hidden text-slate-600 hover:text-blue-600 font-medium transition">Our Mission</Link>
                            <Link href="/#services" className="lg:inline-block hidden text-slate-600 hover:text-blue-600 font-medium transition">Services</Link>
                            <Link href="/#product" className="lg:inline-block hidden text-slate-600 hover:text-blue-600 font-medium transition">Scheduling System</Link>
                            <Link href="#contact" className="btn-primary">
                                Get Started
                            </Link>
                        </div>
                    </div>
                </div>
            </nav>
        </header>
    )
}