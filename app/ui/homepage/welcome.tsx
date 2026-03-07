import Image from "next/image";
import Link from "next/link";
import { Quote } from 'lucide-react';

export default function Welcome() {
    return (
        <section id="mission" className="py-20 bg-white border-y border-slate-200 scroll-mt-20">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <h2 className="text-sm font-bold tracking-widest text-blue-600 uppercase mb-3">Welcome to DigitizeBox</h2>
                <h3 className="text-3xl md:text-4xl font-bold text-slate-900 mb-8">Register Your Business</h3>
                
                <div className="bg-blue-50/50 rounded-2xl p-8 md:p-12 border border-blue-100">
                    <Quote className="text-blue-300 w-12 h-12 mx-auto mb-6 opacity-50" />
                    <p className="text-xl md:text-2xl text-slate-700 leading-relaxed mb-6 font-light">
                        Our mission is to simplify doctors' workflow by <span className="font-semibold text-blue-700">reducing administrative burdens</span> allowing them to <span className="font-semibold text-blue-700">focus more on patient care</span> and other critical responsibilities.
                    </p>
                    <p className="text-lg text-slate-500">
                        By streamlining admin work, we help practices operate efficiently without the need of multiple secretaries or assistants.
                    </p>
                </div>
            </div>
        </section>
    )
}