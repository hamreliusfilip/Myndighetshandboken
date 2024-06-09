import React from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

export default function LandingFiller5() {

    return (
        <div className='mt-20 mb-20 bg-black'>
            <div className='flex flex-col justify-center items-center'>
                <div className='pt-48 pb-48 w-2/3'>
                    <h1 className='text-center font-bold text-4xl md:text-4xl text-white'>
                        <span className='bg-gradient-to-r from-slate-600 to-white inline-block text-transparent bg-clip-text'> Utforska Sveriges okända myndighetsorgan och</span><span className='bg-gradient-to-r from-white to-slate-600 inline-block text-transparent bg-clip-text'>underrättelse enheter</span>
                    </h1>
                    <div className='flex justify-center items-center flex-row mt-10'>
                        <Link href="/myndighet">
                            <Button variant={"outline"} className='bg-black text-white m-1'> Okända Myndigheter </Button>
                        </Link>
                        <Link href="/SekretessMyndighet">
                            <Button variant={"outline"} className='bg-white text-black m-1'> Alla Myndigheter </Button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}