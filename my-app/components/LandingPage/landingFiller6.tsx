import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, useScroll } from "framer-motion"

export default function LandingFiller5() {

    return (
        <div className='mt-80 mb-20 bg-white'>
            <div className='flex flex-col justify-center items-center'>
                <div className='pt-24 pb-24 w-2/3'>
                    <div className='mb-8'>
                        <h1 className='text-center font-bold text-6xl'>
                            <span className='text-black px-1 pb-1'>Utforska politiska ledare</span>
                        </h1>
                        <p className='text-center font-base mt-10 text-xl text-slate-400'> <span className='text-slate-300 font-base'>Utforska Svenska statens största partier i detalj</span> Ekonomi, valresultat, <br></br>ledare, historia <span className='text-slate-300 font-base'>och mycket mer med</span> intuitiva sammanfattningar <span className='text-slate-300 font-base'>för varje parti.</span></p>
                    </div>
                    <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{
                        once: true,
                        amount: "all"
                    }}
                >
                    <div className='transition-transform duration-300 hover:scale-110 '>
                        <div className='flex justify-center items-center mt-20'>

                            <Link href="/faktaover/politik">
                                <div style={{ perspective: '1000px' }}>
                                    <Image
                                        src='/Images/spec_party.png'
                                        alt='Se poltiska partier'
                                        width={500}
                                        height={500}
                                        className='rounded-lg shadow-xl cursor-pointer border-2 border-slate-200'
                                        style={{
                                            transform: 'rotateY(20deg) rotateX(30deg) rotateZ(-10deg)',
                                            transition: 'transform 0.3s ease',
                                        }}
                                        onMouseEnter={(e) => e.currentTarget.style.transform = 'rotateY(0deg) rotateX(0deg) rotateZ(0deg)'}
                                        onMouseLeave={(e) => e.currentTarget.style.transform = 'rotateY(20deg) rotateX(30deg) rotateZ(-10deg)'}
                                    />
                                </div>
                            </Link>
                        </div>
                    </div>
                    </motion.div>   
                </div>
            </div>
        </div>
    );
}