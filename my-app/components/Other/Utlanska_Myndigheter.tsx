'use client'

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import embassyData from '../../Assets/Data/embassyData.json';

interface Embassy {
    country: string;
    city: string;
    link?: string;
}

export default function Umyn() {
    const [groupedEmbassies, setGroupedEmbassies] = useState<{ [key: string]: Embassy[] }>({});

    useEffect(() => {
        const groupByLetter = embassyData.reduce((acc: { [key: string]: Embassy[] }, embassy: Embassy) => {
            const firstLetter = embassy.country.charAt(0).toUpperCase();
            if (!acc[firstLetter]) {
                acc[firstLetter] = [];
            }
            acc[firstLetter].push(embassy);
            return acc;
        }, {});
        setGroupedEmbassies(groupByLetter);
    }, []);


    const generateUrl = (country: string, city: string) => {
        const formattedCountry = country.toLowerCase().replace(/ /g, '-');
        const formattedCity = city.toLowerCase().replace(/ /g, '-');
        return `https://www.swedenabroad.se/sv/utlandsmyndigheter/${formattedCountry}-${formattedCity}/`;
    };

    return (
        <div className="text-center">
            <div className="mb-8">
                <h1 className="font-bold text-4xl mt-20 bg-gradient-to-r from-cyan-500 to-blue-500 inline-block text-transparent bg-clip-text px-1 pb-1">
                    Sveriges ambassader och generalkonsulat
                </h1>
                <p className='text-center font-normal text-l mt-5'>
                    Svergie har ambassader och utrikes <br></br> samarbeten i ett flertal länder.
                </p>
                <hr className="w-96 h-1 mx-auto my-4 bg-gradient-to-r from-cyan-500 to-blue-500 border-0 rounded md:my-10 dark:bg-gray-700" />
            </div>

            <Card className="h-5/6 w-2/4 mx-auto">
                <div className='flex items-center justify-end m-5'>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6 mr-2">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 0 0 3 8.25v10.5A2.25 2.25 0 0 0 5.25 21h10.5A2.25 2.25 0 0 0 18 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
                    </svg>
                    <p className='font-semibold'>
                        Tar dig till swedenabroad.se
                    </p>
                </div>
                <CardContent className="">
                    <div className='mt-10 ml-10'>
                        {Object.keys(groupedEmbassies).sort().map((letter) => (
                            <div key={letter}>
                                <h2 className='font-bold text-left mt-5 mb-5'>{letter}</h2>
                                {groupedEmbassies[letter].map((embassy, index) => {
                                    const url = embassy.link || generateUrl(embassy.country, embassy.city);
                                    return (
                                        <p key={index}>
                                            <div className='flex items-center justify-left mt-5 mb-5'>
                                                <div>
                                                    <div>{embassy.country} - {embassy.city}</div>
                                                </div>

                                                {url ? (
                                                    <a href={url} target="_blank">
                                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6 ml-2">
                                                            <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 0 0 3 8.25v10.5A2.25 2.25 0 0 0 5.25 21h10.5A2.25 2.25 0 0 0 18 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
                                                        </svg>
                                                    </a>
                                                ) : (
                                                    <span>{embassy.country} - {embassy.city}</span>
                                                )}
                                            </div>
                                        </p>
                                    );
                                })}
                            </div>
                        ))}
                    </div>
                </CardContent>
            </Card>

            <div className="flex justify-center pt-16">
                <div className="w-full sm:w-3/4 lg:w-1/2">
                    <Card className="m-4 p+2 text-left">
                        <CardHeader>
                            <CardTitle>Om datan</CardTitle>
                            <CardDescription className="text-sm bg-gradient-to-r from-cyan-500 to-blue-500 inline-block text-transparent bg-clip-text">Vart kommer datan ifrån?</CardDescription>
                        </CardHeader>
                        <CardContent>
                            <p>Datan är baserad på swedenabroad.se och deras lista över Sveriges ambassader och generalkonsulat.</p>
                        </CardContent>
                        <CardContent>
                            <Link href="https://www.swedenabroad.se/sv/utlandsmyndigheter/" target="_blank">
                                <Button variant="outline" className='bg-white text-black'>Listan i sin helhet</Button>
                            </Link>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </div>
    );
}