import React from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

export default function LandingFiller5() {

    return (
        <div className='mt-20 mb-20 bg-black'>
            <div className='flex flex-col justify-center items-center'>
                <div className='pt-36 pb-36 w-1/2'>
                    <h1 className='text-center font-bold sm:text-3xl md:text-4xl text-white'>
                        Utforska Sveriges okända myndighets organ och underrättelse enheter
                    </h1>
                    <div className='flex justify-center items-center flex-col mt-10'>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="white" className="size-20">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 1 0-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 0 0 2.25-2.25v-6.75a2.25 2.25 0 0 0-2.25-2.25H6.75a2.25 2.25 0 0 0-2.25 2.25v6.75a2.25 2.25 0 0 0 2.25 2.25Z" />
                        </svg>
                        <div className='flex justify-center items-center mt-10'>
                            <Link href='/SekretessMyndighet'>
                                <Button variant='outline' className='bg-white text-black'> Utforska </Button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
