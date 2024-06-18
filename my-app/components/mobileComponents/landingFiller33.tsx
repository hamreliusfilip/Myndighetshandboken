import React from "react";
import {
    Card,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import Link from 'next/link';

export default function LandingFiller33() {


    return (
        <div className='mt-20 p-14 bg-gradient-to-r from-cyan-500 to-blue-500'>
            <div className='mb-2'>
                <h1 className='text-center font-bold text-4xl text-white'>
                    Statistik
                </h1>
                <p className='text-center font-nornal text-l mt-5 text-white'> Hur mycket kan du om statens anställda och dess arbetsgivare? Vi har samlat data i enkla intuitva grafer.</p>
            </div>

            <div className="flex justify-center items-center">
                <div className="grid grid-cols-2 gap-4 mt-5">

                    <Link href="/faktaover/statistik">
                        <Card className="w-38 h-24 flex justify-center items-center">
                            <CardHeader>
                                <CardTitle className='text-center text-darkGreyBackgroundCustomColor text-sm'>342 Myndigheter</CardTitle>
                            </CardHeader>
                        </Card>
                    </Link>


                    <Link href="/faktaover/statistik">

                        <Card className="w-38 h-24 flex justify-center items-center">
                            <CardHeader>
                                <CardTitle className='text-center text-darkGreyBackgroundCustomColor text-sm'>11 Departement</CardTitle>
                            </CardHeader>
                        </Card>

                    </Link>

                    <Link href="/faktaover/statistik">

                        <Card className="w-38 h-24 flex justify-center items-center">
                            <CardHeader>
                                <CardTitle className='text-center text-darkGreyBackgroundCustomColor text-sm'>1331 miljarder kr</CardTitle>
                            </CardHeader>
                        </Card>

                    </Link>

                    <Link href="/faktaover/statistik">

                        <Card className="w-38 h-24 flex justify-center items-center">
                            <CardHeader>
                                <CardTitle className='text-center text-darkGreyBackgroundCustomColor text-sm'>42 statliga företag</CardTitle>
                            </CardHeader>
                        </Card>

                    </Link>
                </div>
            </div>
        </div>
    );
}