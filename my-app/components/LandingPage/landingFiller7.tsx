import React from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { motion } from "framer-motion"

export default function LandingFiller7() {

    const circles = new Array(18).fill(null);

    return (
        
        <div className='mt-80 mb-36 bg-white h-screen flex justify-center items-center relative'>
            <div className='mt-20'>
                <div className="">
                    <p className="text-black text-xl font-bold">Internationella relationer</p>
                    <div className='flex justify-between flex-row items-center mb-5'>
                        <p className="text-black text-2xl sm:text-4xl font-light">NATO - FN - EU</p>
                        <Link href='/faktaover/relations'>
                            <Button variant={"outline"} className='bg-black text-white'>Läs mer</Button>
                        </Link>
                    </div>
                    <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{
                        once: true,
                        amount: "all"
                    }}
                >
                    <div className="grid grid-cols-6 gap-4 justify-center items-center mb-20">
                        {circles.map((_, index) => {
                            const blurAmount = index * 0.6;
                            return (
                                <div key={index} className='flex justify-center items-center'>
                                    <div
                                        style={{ filter: `blur(${blurAmount}px)` }}
                                        className="w-16 h-16 sm:w-24 sm:h-24 md:w-32 md:h-32 rounded-full bg-gradient-to-r from-cyan-500 to-blue-500"
                                    />
                                </div>
                            );
                        })}

                    </div>
                    </motion.div>
                </div>
            </div>
        </div>
    );
}