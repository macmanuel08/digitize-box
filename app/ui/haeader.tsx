import DigitizeBoxLogoLetters from "@/app/ui/digitizebox-logo-letters";
import Link from "next/link";

export default function Header() {
    return (
        <header className="font-body bg-blue-600 py-4 lg:px-16 px-4 flex justify-between items-center">
            <Link href="/">
                <div className="w-32 text-white md:w-56">
                    <div className="p-2 w-full border-2 border-solid border-white">
                        <div className="w-12 ml-auto">
                            <DigitizeBoxLogoLetters color="white" />
                        </div>
                    </div>
                    <div className="text-center tracking-widest">DigitizeBox</div>
                </div>
            </Link>
            <div className="flex items-center gap-2 w-fit">
                <Link className="btn btn-primary" href="/signup/company-info">Get Started</Link>
                <Link className="btn btn-white-transparent" href="/login">Log In</Link>
            </div>
        </header>
    )
}