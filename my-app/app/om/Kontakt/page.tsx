import React from "react";
import CompleteMenu from '@/components/Main/completeMenu';
import Logo from '@/components/Main/logo';
import Footer from '@/components/Main/footer';
import Link from 'next/link';
import { Button } from "@/components/ui/button"
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";

export default function Page() {
    return (
        <div>
            <Logo />
            <CompleteMenu />
            <div className="text-center mt-10">
                <h1 className="font-bold text-4xl bg-gradient-to-r from-cyan-500 to-blue-500 inline-block text-transparent bg-clip-text mt-10 mb-1 px-1 pb-1">
                    Kontakta oss
                </h1>
                <p className="font-regular text-small text-slate-300 mb-10">Är något fel? <br></br> Kontakta oss så åtgärdar vi problemet. </p>
                <div className="flex justify-center mt-10">
                    <div className="p-5">
                        <div className="flex justify-center">
                            <div className="w-2/3">
                                <p className="text-center">Informationen på den här hemsidan är hämtad från trovärdiga källor och myndighetskällor. Men i vissa fall blir det fel - har du hittat något som inte stämmer? Kontakta oss så åtgärdar vi problemet. </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex justify-center mt-10">
                    <Link href="mailto:hamreliusfilip@gmail.com" className="transition-all duration-300 hover:scale-105 flex items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="black" className="size-8 mr-2">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
                        </svg>
                        <p className='font-semibold text-black text-center md:text-left'>Kontakta oss</p>
                    </Link>
                </div>
            </div>
            <Footer />
        </div>
    );
}