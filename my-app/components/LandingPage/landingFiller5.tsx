import React from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

export default function LandingFiller5() {

    return (
        <div className='mt-20 mb-20 bg-black'>
            <div className='flex flex-col justify-center items-center'>
                <div className='pt-36 pb-36 w-1/2'>
                    <h1 className='text-center font-bold sm:text-3xl md:text-4xl text-white'>
                        Utforska Sveriges okända myndighets organ och underrättelse enheter.
                    </h1>
                    <div className='flex justify-center items-center'>
                        <Link href='/SekretessMyndighet'>
                            <Button variant='outline' className='bg-white text-black mt-10'> Utforska </Button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}
