import React from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { motion } from "framer-motion"

export default function LandingFiller5() {

    return (
        <div className='mt-80 bg-neutral-900 rounded-3xl mr-20 ml-20 mb-80'>
            <div className='flex flex-col justify-center items-center pt-72 pb-72'>
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{
                        once: true,
                        amount: "all"
                    }}
                >
                    <div className='m-48'>
                        <h1 className='text-center font-bold text-5xl md:text-5xl text-white'>
                            <span className='bg-gradient-to-r from-slate-600 to-white inline-block text-transparent bg-clip-text p-1'>Sveriges okända myndighetsorgan och</span><span className='bg-gradient-to-r from-white to-slate-600 inline-block text-transparent bg-clip-text p-1'>underrättelse enheter</span>
                        </h1>
                        <div className='flex justify-center items-center flex-row mt-10'>
                            <Link href="/myndighet">
                                <Button variant={"outline"} className='bg-neutral-900 text-white m-1'> Okända Myndigheter </Button>
                            </Link>
                            <Link href="/SekretessMyndighet">
                                <Button variant={"outline"} className='bg-white text-neutral-900 m-1'> Alla Myndigheter </Button>
                            </Link>
                        </div>
                    </div>
                </motion.div>
            </div>
        </div>
    );
}