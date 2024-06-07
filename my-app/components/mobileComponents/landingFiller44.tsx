import React from "react";
import {
    Card,
    CardContent,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { Button } from "@/components/ui/button";
import Link from 'next/link';

export default function LandingFiller44() {

    const circles = new Array(12).fill(null);


    return (
        <div className='mt-20 bg-black h-64 flex justify-center items-center relative'>
            <Link href='/utrikesrelationer/relations'>
                <div className='mt-20'>
                    <div className="">
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
                            <p className="absolute top-0 left-0 text-white text-3xl mt-32 ml-8 sm:ml-72 font-bold">Internationella relationer</p>
                            <p className="absolute bottom-0 right-0 text-white text-3xl mb-32 mr-8 font-light">NATO - FN - EU</p>
                    </div>
                </div>
            </Link>
        </div>
    );
}