import { lusitana } from "@/app/ui/fonts";

export default function AppointmentSuccessPage() {
    return (
        <main className="grid place-items-center min-h-screen">
            <div>
                <h1 className={`${lusitana.className} text-2xl`}>Appointment Schedule Request Submitted</h1>
                <p className="text-sm">Watch out for email or SMS for confirmation. Thank you for choosing us!</p>
            </div>
        </main>
    );
}