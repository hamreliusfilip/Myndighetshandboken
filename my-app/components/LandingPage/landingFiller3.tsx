import React from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

export default function LandingFiller3() {

    const circles = new Array(18).fill(null);

    return (
        <div className='mt-10 mb-72 bg-black h-100 flex justify-center items-center relative'>
            <div className='mt-20'>
                <div className="">
                    <div className="grid grid-cols-1 sm:grid-cols-6 justify-center items-center mb-20">
                        {circles.map((_, index) => {
                            const blurAmount = index * 0.6;
                            return (
                                <div key={index} className='flex justify-center items-center'>
                                    <div
                                        style={{ filter: `blur(${blurAmount}px)` }}
                                        className="w-32 h-32 rounded-full bg-gradient-to-r from-cyan-500 to-blue-500"
                                    />
                                </div>
                            );
                        })}

                    </div>
                    <p className="absolute top-0 left-0 text-white text-5xl mt-32 ml-72 font-bold">Internationella relationer</p>
                    <p className="absolute bottom-0 right-0 text-white text-4xl mb-32 mr-96 font-light"> NATO - FN - EU </p> 
                    <Link href='/utrikesrelationer/relations'>
                        <Button variant={"outline"} className='absolute bottom-0 left-0 mb-12 ml-72 bg-white'>Läs mer</Button>
                    </Link>
                </div>
            </div>
        </div>
    );
}
