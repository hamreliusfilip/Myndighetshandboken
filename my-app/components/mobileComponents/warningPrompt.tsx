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
        <div className=" mt-56">
            <div className="flex justify-lef ml-5">
                <p className="text-3xl mb-3 font-bold text-black"> Utvalda höjpunkter </p>
            </div>
            <div className="flex overflow-x-auto space-x-4 p-4">

                <Link href="/myndighet" passHref>
                    <Card className="flex-shrink-0 w-64 h-64 p-4 bg-white">
                        <div>
                            <div className='flex justify-left'><p className="text-xl font-bold mb-3">Myndigheter</p>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="size-7 ml-2 pb-1">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
                                </svg>
                            </div>
                        </div>
                        <div>
                            <p>Utforska departementen och deras sammanhang med en intuitiv graf och filtreringsfunktion. Upptäck vilka ministrar som ansvarar för vad.</p>
                        </div>
                    </Card>
                </Link>

                <Link href="/departement" passHref>
                    <Card className="flex-shrink-0 w-64 h-64 p-4 bg-white">
                        <div>
                            <div className='flex justify-left'><p className="text-xl font-bold mb-3">Departement</p>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-7 ml-2 pb-1">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 7.125C2.25 6.504 2.754 6 3.375 6h6c.621 0 1.125.504 1.125 1.125v3.75c0 .621-.504 1.125-1.125 1.125h-6a1.125 1.125 0 0 1-1.125-1.125v-3.75ZM14.25 8.625c0-.621.504-1.125 1.125-1.125h5.25c.621 0 1.125.504 1.125 1.125v8.25c0 .621-.504 1.125-1.125 1.125h-5.25a1.125 1.125 0 0 1-1.125-1.125v-8.25ZM3.75 16.125c0-.621.504-1.125 1.125-1.125h5.25c.621 0 1.125.504 1.125 1.125v2.25c0 .621-.504 1.125-1.125 1.125h-5.25a1.125 1.125 0 0 1-1.125-1.125v-2.25Z" />
                                </svg>
                            </div>
                        </div>
                        <div>
                            <p>Utforska departementen och deras sammanhang med en intuitiv graf och filtreringsfunktion. Upptäck vilka ministrar som ansvarar för vad.</p>
                        </div>
                    </Card>
                </Link>
                <Link href="/company" passHref>
                    <Card className="flex-shrink-0 w-64 h-64 p-4 bg-white">
                        <div>
                            <div className='flex justify-left'><p className="text-xl font-bold mb-3">Statliga företag</p>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-7 ml-2 pb-1">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.59 14.37a6 6 0 0 1-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 0 0 6.16-12.12A14.98 14.98 0 0 0 9.631 8.41m5.96 5.96a14.926 14.926 0 0 1-5.841 2.58m-.119-8.54a6 6 0 0 0-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 0 0-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 0 1-2.448-2.448 14.9 14.9 0 0 1 .06-.312m-2.24 2.39a4.493 4.493 0 0 0-1.757 4.306 4.493 4.493 0 0 0 4.306-1.758M16.5 9a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Z" />
                                </svg>
                            </div>
                        </div>
                        <div>
                            <p>Utforska departementen och deras sammanhang med en intuitiv graf och filtreringsfunktion. Upptäck vilka ministrar som ansvarar för vad.</p>
                        </div>
                    </Card>
                </Link>
                <Link href="/faktaover/statsbudget" passHref>
                    <Card className="flex-shrink-0 w-64 h-64 p-4 bg-white">
                        <div>
                            <div className='flex justify-left'><p className="text-xl font-bold mb-3">Statsbudgeten</p>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-7 ml-2 pb-1">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m-3-2.818.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                                </svg>
                            </div>
                        </div>
                        <div>
                            <p>Utforska departementen och deras sammanhang med en intuitiv graf och filtreringsfunktion. Upptäck vilka ministrar som ansvarar för vad.</p>
                        </div>
                    </Card>
                </Link>

            </div>
        </div>

    );
}