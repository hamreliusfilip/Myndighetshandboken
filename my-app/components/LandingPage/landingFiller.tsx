import React from 'react';
import Link from 'next/link';

import {
    Card,
    CardContent,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"

export default function LandingFiller() {
    return (
        <div className='mt-40 mb-40'>
            <div className='mb-8'>
                <h1 className='text-center font-bold text-4xl'>
                    <span className='bg-gradient-to-r from-cyan-500 to-blue-500 inline-block text-transparent bg-clip-text px-1 pb-1'>Interaktiva verktyg </span>
                </h1>
                <p className='text-center font-normal text-l mt-5'> Utforska Svenska statens byrokrati med interaktiva och intuitiva verktyg. <br></br> Flödesscheman och extensiva listor med filter. </p>
            </div>
            <div>
                <hr className="w-48 h-1 mx-auto my-4 bg-gradient-to-r from-cyan-500 to-blue-500 border-0 rounded md:my-10 dark:bg-gray-700"></hr>
            </div>
            <div className="flex justify-center">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mt-10">

                    <Link href="/myndighet">
                        <div className='transition-all duration-300 hover:scale-105 relative'>
                            <Card className="w-96 h-48 flex flex-col justify-center items-center bg-white">
                                <CardHeader>
                                    <CardTitle className='text-center text-darkGreyBackgroundCustomColor'>Sökmotor över myndigheter</CardTitle>
                                </CardHeader>
                                <CardContent>   
                                    <p className='font-regular text-sm text-slate-500 text-center'> En unik och utförlig databas över myndigheterna med avancerade filter- och sökfunktioner. Databasen är den enda av sitt slag. </p>
                                </CardContent>
                            </Card>
                            <div className="w-96 h-48 transition-all duration-300 absolute inset-0 bg-gradient-to-r from-cyan-500 to-blue-500 opacity-0 hover:opacity-30 rounded-lg"></div>
                        </div>

                    </Link>

                    <Link href="/departement">
                        <div className='transition-all duration-300 hover:scale-105'>
                            <Card className="w-96 h-48 flex flex-col justify-center items-center bg-white">
                                <CardHeader>
                                    <CardTitle className='text-center text-darkGreyBackgroundCustomColor'>Karta över departementen</CardTitle>
                                </CardHeader>
                                <CardContent>   
                                    <p className='font-regular text-sm text-slate-500 text-center'> En interaktiv karta över departementen och dess tillhörande ministrar, politska parti och underliggande myndigheter. </p>
                                </CardContent>
                            </Card>
                            <div className="w-96 h-48 transition-all duration-300 absolute inset-0 bg-gradient-to-r from-cyan-500 to-blue-500 opacity-0 hover:opacity-30 rounded-lg"></div>
                        </div>
                    </Link>

                    <Link href="/faktaover/statsbudget">
                        <div className='transition-all duration-300 hover:scale-105'>
                            <Card className="w-96 h-48 flex flex-col justify-center items-center bg-white">
                                <CardHeader>
                                    <CardTitle className='text-center text-darkGreyBackgroundCustomColor'>Statsbudgeten i grafer</CardTitle>
                                </CardHeader>
                                <CardContent>   
                                    <p className='font-regular text-sm text-slate-500 text-center'> En tydlig genomgång på vart statens pengar går men också hur processen ser ut och hur utgifterna ser ut i framtiden. </p>
                                </CardContent>
                            </Card>
                            <div className="w-96 h-48 transition-all duration-300 absolute inset-0 bg-gradient-to-r from-cyan-500 to-blue-500 opacity-0 hover:opacity-30 rounded-lg"></div>
                        </div>
                    </Link>

                    <Link href="/company">
                        <div className='transition-all duration-300 hover:scale-105'>
                            <Card className="w-96 h-48 flex flex-col justify-center items-center bg-white">
                                <CardHeader>
                                    <CardTitle className='text-center text-darkGreyBackgroundCustomColor'>Sökmotor över statliga företag</CardTitle>
                                </CardHeader>
                                <CardContent>   
                                    <p className='font-regular text-sm text-slate-500 text-center'> En unik och utförlig databas över de statliga företagen med avancerade filter- och sökfunktioner. </p>
                                </CardContent>
                            </Card>
                            <div className="w-96 h-48 transition-all duration-300 absolute inset-0 bg-gradient-to-r from-cyan-500 to-blue-500 opacity-0 hover:opacity-30 rounded-lg"></div>
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    );
}


