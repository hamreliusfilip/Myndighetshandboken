import React from "react";
import {
    Card,
    CardContent,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { Button } from "@/components/ui/button";
import Link from 'next/link';

export default function MobileMenu() {


    return (
        <div className="mt-20">
            <div className="flex justify-lef ml-5">
                <p className="text-3xl mb-3 font-bold text-black"> Våra Sökmotorer </p>
            </div>
            <div className="flex overflow-x-auto space-x-4 p-4">

                <Link href="/company" passHref>
                    <Card className="flex-shrink-0 w-64 h-64 p-4 bg-white">
                        <div>
                        <div className='flex justify-start items-center flex-row mb-3'><p className="text-xl font-bold">Statliga Företag</p>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-8 ml-2">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.59 14.37a6 6 0 0 1-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 0 0 6.16-12.12A14.98 14.98 0 0 0 9.631 8.41m5.96 5.96a14.926 14.926 0 0 1-5.841 2.58m-.119-8.54a6 6 0 0 0-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 0 0-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 0 1-2.448-2.448 14.9 14.9 0 0 1 .06-.312m-2.24 2.39a4.493 4.493 0 0 0-1.757 4.306 4.493 4.493 0 0 0 4.306-1.758M16.5 9a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Z" />
                                </svg>
                            </div>
                        </div>
                        <div>
                            <p>Upptäck och undersök de statliga företagen med vår exklusiva databas. Enkelt och effektivt sökverktyg som står i en klass för sig.</p>
                        </div>
                    </Card>
                </Link>

                <Link href="/myndighet" passHref>
                    <Card className="flex-shrink-0 w-64 h-64 p-4 bg-gradient-to-r from-cyan-500 to-blue-500">
                        <div>
                        <div className='flex justify-start items-center flex-row mb-3'><p className="text-xl font-bold text-white">Myndigheter</p>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="white" className="size-8 ml-2">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
                                </svg>
                            </div>
                        </div>
                        <div>
                            <p className="text-white">Filtrera, sök och utforska de svenska myndigheterna med vår unika databas. Enkel och effektiv sökning som saknar motstycke.</p>
                        </div>
                    </Card>
                </Link>

                <Link href="/abroadMyndighet" passHref>
                    <Card className="flex-shrink-0 w-64 h-64 p-4 bg-white">
                        <div>
                            <div className='flex justify-start items-center flex-row mb-3'><p className="text-xl font-bold">Ambassader</p>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-8 ml-2">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 21v-8.25M15.75 21v-8.25M8.25 21v-8.25M3 9l9-6 9 6m-1.5 12V10.332A48.36 48.36 0 0 0 12 9.75c-2.551 0-5.056.2-7.5.582V21M3 21h18M12 6.75h.008v.008H12V6.75Z" />
                                </svg>

                            </div>
                        </div>
                        <div>
                            <p>Utforska vart Sverige har ambassader och generalkonsulat i en intuitiv sökmotor.</p>
                        </div>
                    </Card>
                </Link>
            </div>
        </div>

    );
}