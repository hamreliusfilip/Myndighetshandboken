import React from 'react';
import Link from 'next/link';

import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"

export default function NavCardsHoms() {
    return (
        <div className='mt-40'>
            <div className='flex justify-center items-center'>
                <hr className="w-24 h-1 my-4 mr-2 bg-gradient-to-r from-cyan-500 to-blue-500 border-0 rounded md:my-10 dark:bg-gray-700"></hr>
                <h1 className='text-center font-bold text-2xl'>
                    <span className='bg-gradient-to-r from-cyan-500 to-blue-500 inline-block text-transparent bg-clip-text'>Utvalda höjdpunkter</span>
                </h1>
                <hr className="w-24 h-1 my-4 ml-2 bg-gradient-to-r from-cyan-500 to-blue-500 border-0 rounded md:my-10 dark:bg-gray-700"></hr>
            </div>

            <div className="flex flex-wrap justify-center">
                <Link href="/myndighet">
                    <div className='transition-all duration-300 hover:scale-105'>
                        <Card className="m-4 p+2 w-64 h-64">
                            <CardHeader>
                                <CardTitle>Myndigheter</CardTitle>
                                <CardDescription> <span className='bg-gradient-to-r from-cyan-500 to-blue-500 inline-block text-transparent bg-clip-text'>Gå till myndighetssida</span></CardDescription>
                            </CardHeader>
                            <CardContent>
                                <p>Filterera, sök och forska bland de svenska myndigheterna</p>
                            </CardContent>
                        </Card>
                    </div>
                </Link>

                <Link href="/departement">
                    <div className='transition-all duration-300 hover:scale-105'>
                        <Card className="m-4 p+2 w-64 h-64">
                            <CardHeader>
                                <CardTitle>Departement</CardTitle>
                                <CardDescription> <span className='bg-gradient-to-r from-cyan-500 to-blue-500 inline-block text-transparent bg-clip-text'>Gå till departementsida</span></CardDescription>
                            </CardHeader>
                            <CardContent>
                                <p>Utforska departementen och hur allt sitter ihop genom en intuituv graf och filterings funktion.</p>
                            </CardContent>
                        </Card>
                    </div>
                </Link>

                <Link href="/company">
                    <div className='transition-all duration-300 hover:scale-105'>
                        <Card className="m-4 p+2 w-64 h-64">
                            <CardHeader>
                                <CardTitle>Statliga företag</CardTitle>
                                <CardDescription> <span className='bg-gradient-to-r from-cyan-500 to-blue-500 inline-block text-transparent bg-clip-text'>Gå till företagssida</span></CardDescription>
                            </CardHeader>
                            <CardContent>
                                <p>Filterera, sök och forska bland de statliga företagen</p>
                            </CardContent>
                        </Card>
                    </div>
                </Link>

                <Link href="/faktaover/statsbudget">
                    <div className='transition-all duration-300 hover:scale-105'>
                        <Card className="m-4 p+2 w-64 h-64">
                            <CardHeader>
                                <CardTitle>Statsbudgeten</CardTitle>
                                <CardDescription> <span className='bg-gradient-to-r from-cyan-500 to-blue-500 inline-block text-transparent bg-clip-text'>Gå till sidan för statsbudget</span></CardDescription>
                            </CardHeader>
                            <CardContent>
                                <p>Dyk djupare in i statsbudgeten för en utforskning av olika aspekter. Hur ser fördelningen ut?</p>
                            </CardContent>
                        </Card>
                    </div>
                </Link>
            </div>
        </div>
    );
}
