import React from 'react';
import Link from 'next/link';
import {
    Card,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"


export default function Facts() {
    return (
        <div className='mt-40 p-14 bg-gradient-to-r from-cyan-500 to-blue-500'>
            <div className='mb-2'>
                <h1 className='text-center font-bold text-4xl text-white'>
                    Statistik
                </h1>
                <p className='text-center font-nornal text-l mt-5 text-white'> Hur mycket kan du om statens anställda och dess arbetsgivare? <br></br> Vi har samlat data i enkla intuitva grafer - allt från jämställdhet till roller inom statens myndigheter.</p>
            </div>

            <div className="flex flex-wrap justify-center mt-5">
                <div className='transition-all duration-300 hover:scale-105'>
                    <Link href="/faktaover/statistik">
                        <Card className="m-4 p+2 w-64 h-32 flex flex-col justify-center items-center bg-white">
                            <CardHeader>
                                <CardTitle className='text-center text-darkGreyBackgroundCustomColor'>342 Myndigheter</CardTitle>
                            </CardHeader>
                        </Card>
                    </Link>
                </div>

                <Link href="/faktaover/statistik">
                <div className='transition-all duration-300 hover:scale-105'>
                    <Card className="m-4 p+2 w-64 h-32 flex flex-col justify-center items-center bg-white">
                        <CardHeader>
                            <CardTitle className='text-center text-darkGreyBackgroundCustomColor'>11 Departement</CardTitle>
                        </CardHeader>
                    </Card>
                    </div>
                </Link>

                <Link href="/faktaover/statistik">
                <div className='transition-all duration-300 hover:scale-105'>
                    <Card className="m-4 p+2 w-64 h-32 flex flex-col justify-center items-center bg-white">
                        <CardHeader>
                            <CardTitle className='text-center text-darkGreyBackgroundCustomColor'>1331 miljarder kr</CardTitle>
                        </CardHeader>
                    </Card>
                    </div>
                </Link>
            </div>
        </div>
    );
}
