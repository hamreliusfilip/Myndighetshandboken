import React from 'react';
import Link from 'next/link';
import {
    Card,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { motion } from "framer-motion"

export default function Facts() {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{
                once: true,
                amount: 0.7
            }}
        >
            <div className='mt-80 flex justify-center flex-col items-center pt-72 pb-72 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-3xl mr-20 ml-20'>
                    <div className='w-1/2 mx-auto'>
                        <div className='mb-8'>
                            <h1 className='text-center text-white font-bold text-6xl'>Statistik</h1>
                            <p className='text-center font-base mt-10 text-xl text-white'>Hur mycket kan du om <span className='font-bold'>statens anställda</span> och dess arbetsgivare?<br></br>Vi har samlat data i enkla <span className='font-bold'>intuitva grafer</span> - allt från jämställdhet inom myndigheterna till omstättning i statens företag.</p>
                        </div>
                    </div>
                    <div className="flex flex-wrap justify-center mt-10">
                        <Link href="/faktaover/statistik">
                            <div className='transition-all duration-300 hover:scale-105'>
                                <Card className="m-4 p+2 w-96 h-52 flex flex-col justify-center items-center bg-white">
                                    <CardHeader>
                                        <CardTitle className='text-center text-black text-3xl'>342 Myndigheter</CardTitle>
                                    </CardHeader>
                                </Card>
                            </div>
                        </Link>
                        <Link href="/faktaover/statistikForetag">
                            <div className='transition-all duration-300 hover:scale-105'>
                                <Card className="m-4 p+2 w-96 h-52 flex flex-col justify-center items-center bg-white">
                                    <CardHeader>
                                        <CardTitle className='text-center text-black text-3xl'>42 Statliga Företag</CardTitle>
                                    </CardHeader>
                                </Card>
                            </div>
                        </Link>
                        <Link href="/faktaover/statsbudget">
                            <div className='transition-all duration-300 hover:scale-105'>
                                <Card className="m-4 p+2 w-96 h-52  flex flex-col justify-center items-center bg-white">
                                    <CardHeader>
                                        <CardTitle className='text-center text-black text-3xl'>1331 miljarder kr</CardTitle>
                                    </CardHeader>
                                </Card>
                            </div>
                        </Link>
                    </div>
                </div>
        </motion.div>
    );
}
