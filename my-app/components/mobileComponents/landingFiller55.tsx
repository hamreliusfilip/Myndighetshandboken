import React from "react";
import {
    Card,
    CardContent,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { Button } from "@/components/ui/button";
import Link from 'next/link';

export default function LandingFiller55() {

    const circles = new Array(12).fill(null);


    return (
        <div className='mt-10 mb-10 bg-black'>
            <div className='flex flex-col justify-center items-center'>
                <div className='pt-20 pb-20'>
                    <h1 className='text-center font-bold sm:text-3xl md:text-4xl text-white'>
                        Utforska Sveriges okända myndighets organ och underrättelse enheter
                    </h1>
                    <div className='flex justify-center items-center flex-col mt-10'>
                        <div className='flex justify-center items-center mt-2'>
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