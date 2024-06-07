import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { LoginLink } from "@kinde-oss/kinde-auth-nextjs/components";
import { Button } from "@/components/ui/button";
import logo from '@/Assets/Icons/logga_vit.svg';

export default function Footer() {
    return (
        <div className="mt-28">
            <div className="flex flex-col items-center justify-center bg-gradient-to-r from-cyan-500 to-blue-500 pt-24 pb-24">
                <div className="flex flex-col md:flex-row items-center justify-center text-center md:text-left">
                    <div className="mb-8 md:mb-0">
                        <p className='text-white font-bold md:mr-10'>
                            Utvecklad av <br></br> Filip Hamrelius <br></br> & Anna Granberg
                        </p>
                    </div>
                    <div className="mb-8 md:mb-0">
                        <div className="mr-2">
                            <Image src={logo} alt="Logo" width={400} height={400} className="mx-auto md:mx-0" />
                        </div>
                    </div>
                    <div className="flex flex-col md:flex-row items-center md:ml-10">
                        <p className='font-bold text-white text-center md:text-left mb-4 md:mb-0 md:mr-4'> Kontakta oss </p>
                        <a href="mailto:hamreliusfilip@gmail.com" className="transition-all duration-300 hover:scale-110">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="white" className="w-9 h-9">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
                            </svg>
                        </a>
                    </div>
                </div>
            </div>
            <div className="flex items-center justify-center bg-gradient-to-r from-cyan-500 to-blue-500 pb-10">
                <div className="flex items-center text-white font-regular">
                    <p>© 2024 Myndighetshandboken</p>
                </div>
            </div>
            <div className='m-5 flex flex-col md:flex-row items-center justify-end'>
                <p className='text-black font-semibold md:mr-5 mb-4 md:mb-0'>Är du en administratör?</p>
                <LoginLink>
                    <Button variant="outline" className="bg-black text-white mb-4 md:mb-0 md:mr-5">
                        Logga in
                    </Button>
                </LoginLink>
                <Link href={"https://myndighetshandboken.kinde.com/knock-knock"}>
                    <Button variant="outline" className="bg-black text-white">
                        Begär att bli administratör
                    </Button>
                </Link>
            </div>
        </div>
    );
}
