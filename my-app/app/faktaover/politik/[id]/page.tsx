'use client';

import CompleteMenu from "@/components/Main/completeMenu";
import Logo from "@/components/Main/logo";
import Footer from "@/components/Main/footer";
import React, { useState, useEffect } from 'react';
import data from '@/Assets/Data/pol_parties.json';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Link from 'next/link';
import { Button } from "@/components/ui/button";

import stats from '@/Assets/Data/VoteSTER.json';
import option from '@/Assets/data/VoteSTEROtions.json';

import { Bar } from 'react-chartjs-2';
import { Chart, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';

Chart.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

interface PartyData {
    id: number;
    name: string;
    id2: string;
    grundat: string;
    ideologi: string;
    ledare: string;
    partisekreterare: string;
    Gruppledare: string;
    ledareMoney: string;
    mandat: string;
    eu_madat: string;
    money: string;
    votes: string;
    bild: string;
    antal_medlemmar: string;
    ungdomsförbund: string;
    ungdomsförbund_ledare: string;
    riksdagen: string;
    kommunfullmäktige: string;
    europaparlamentet: string;
    landsting: string;
    kommun: string;
    parti_hemsida: string;
    färg: string;
    info: string;
}

export default function PoliticianPage() {
    const [currentPath, setCurrentPath] = useState('');
    const [isMobile, setIsMobile] = useState(false);
    const [currentData, setCurrentData] = useState<PartyData | null>(null);

    useEffect(() => {
        setCurrentPath(window.location.pathname);
        setIsMobile(/Android|webOS|iPhone|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent));
    }, []);

    useEffect(() => {
        const pathSegments = currentPath.split('/');
        const id = pathSegments[pathSegments.length - 1];
        const matchedData = data.find(tip => tip.id2 === id);
        setCurrentData(matchedData || null);
    }, [currentPath]);

    return (
        <>
            <div>
                <Logo />
                <CompleteMenu />
            </div>
            <Link href="/faktaover/politik">
                <Button variant="outline" className='mt-8 ml-8 bg-gradient-to-r from-cyan-500 to-blue-500 text-white'>Tillbaka</Button>
            </Link>
            <div>
                {currentData ? (
                    <div>
                        <div className="flex justify-center flex-row items-center mt-5 p-10">
                            <CardTitle className='text-xl md:text-3xl lg:text-5xl md:mb-3 text-black'>{currentData.name}</CardTitle>
                            <img src={currentData.bild} alt={currentData.name} className="w-20 md:w-30 lg:w-40 rounded-sm ml-5" />
                        </div>
                        <div className="flex justify-center mt-5 md:mt-10 w-full">
                            <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 p-5">
                                <Card>
                                    <CardHeader className="font-bold text-lg flex flex-row" style={{ color: currentData.färg }}>Namn
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6 ml-2">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M9.568 3H5.25A2.25 2.25 0 0 0 3 5.25v4.318c0 .597.237 1.17.659 1.591l9.581 9.581c.699.699 1.78.872 2.607.33a18.095 18.095 0 0 0 5.223-5.223c.542-.827.369-1.908-.33-2.607L11.16 3.66A2.25 2.25 0 0 0 9.568 3Z" />
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M6 6h.008v.008H6V6Z" />
                                        </svg>
                                    </CardHeader>
                                    <CardContent>
                                        <CardDescription className="mt-2"><span className='font-bold text'>Namn: </span>{currentData.name}</CardDescription>
                                        <CardDescription className="mt-2"><span className="font-bold">Akronym: </span>{currentData.id2}</CardDescription>
                                        <CardDescription className="mt-2"><span className="font-bold">Ungdomsförbund: </span>{currentData.ungdomsförbund}</CardDescription>
                                    </CardContent>
                                </Card>
                                <Card>
                                    <CardHeader className="font-bold text-lg flex flex-row" style={{ color: currentData.färg }}>Mandat
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6 ml-2">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                                        </svg>
                                    </CardHeader>
                                    <CardContent>
                                        <CardDescription className="mt-2"><span className="font-bold">Mandat: </span>{currentData.mandat} st</CardDescription>
                                        <CardDescription className="mt-2"><span className="font-bold">Andel röster 2022: </span>{currentData.votes} %</CardDescription>
                                        <CardDescription className="mt-2"><span className="font-bold">EU-mandat: </span>{currentData.eu_madat} st</CardDescription>
                                    </CardContent>
                                </Card>
                                <Card>
                                    <CardHeader className="font-bold text-lg flex flex-row" style={{ color: currentData.färg }}>Ledare
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6 ml-2">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
                                        </svg>

                                    </CardHeader>
                                    <CardContent>
                                        <CardDescription className="mt-2"><span className="font-bold">Partiledare: </span>{currentData.ledare}</CardDescription>
                                        <CardDescription className="mt-2"><span className="font-bold">Partisekreterare: </span>{currentData.partisekreterare}</CardDescription>
                                        <CardDescription className="mt-2"><span className="font-bold">Gruppledare: </span>{currentData.Gruppledare}</CardDescription>
                                        <CardDescription className="mt-2"><span className="font-bold">Ungdomsförbund ledare: </span>{currentData.ungdomsförbund_ledare}</CardDescription>
                                    </CardContent>
                                </Card>
                                <Card>
                                    <CardHeader className="font-bold text-lg flex flex-row" style={{ color: currentData.färg }}>Ekonomi
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6 ml-2">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18.75a60.07 60.07 0 0 1 15.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 0 1 3 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 0 0-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 0 1-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 0 0 3 15h-.75M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm3 0h.008v.008H18V10.5Zm-12 0h.008v.008H6V10.5Z" />
                                        </svg>

                                    </CardHeader>
                                    <CardContent>
                                        <CardDescription className="mt-2"><span className="font-bold">Partiledare lön: </span>{currentData.ledareMoney} kr</CardDescription>
                                        <CardDescription className="mt-2"><span className="font-bold">Bidrag till partiet: </span>{currentData.money} kr</CardDescription>
                                    </CardContent>
                                </Card>
                                <Card>
                                    <CardHeader className="font-bold text-lg flex flex-row" style={{ color: currentData.färg }}>Generellt
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6 ml-2">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="m11.25 11.25.041-.02a.75.75 0 0 1 1.063.852l-.708 2.836a.75.75 0 0 0 1.063.853l.041-.021M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9-3.75h.008v.008H12V8.25Z" />
                                        </svg>
                                    </CardHeader>
                                    <CardContent>
                                        <CardDescription className="mt-2"><span className="font-bold">Grundat: </span>{currentData.grundat} </CardDescription>
                                        <CardDescription className="mt-2"><span className="font-bold">Ideologi: </span>{currentData.ideologi}</CardDescription>
                                        <CardDescription className="mt-2"><span className="font-bold">Antal medlemmar: </span>{currentData.antal_medlemmar} st </CardDescription>
                                        <CardDescription className="mt-2"><span className="font-bold">Partiets hemsida: </span><Link href={currentData.parti_hemsida} target="_blank" rel="noreferrer">
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5 mt-1">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 0 0 3 8.25v10.5A2.25 2.25 0 0 0 5.25 21h10.5A2.25 2.25 0 0 0 18 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
                                            </svg>
                                        </Link></CardDescription>
                                    </CardContent>
                                </Card>
                                <Card>
                                    <CardHeader className="font-bold text-lg flex flex-row" style={{ color: currentData.färg }}>Närvarande
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6 ml-2">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
                                        </svg>
                                    </CardHeader>
                                    <CardContent>
                                        <CardDescription className="mt-2"><span className="font-bold">Riksdagen: </span>{currentData.riksdagen}</CardDescription>
                                        <CardDescription className="mt-2"><span className="font-bold">Landsting: </span>{currentData.landsting}</CardDescription>
                                        <CardDescription className="mt-2"><span className="font-bold">Kommun: </span>{currentData.kommun}</CardDescription>
                                        <CardDescription className="mt-2"><span className="font-bold">Kommunfullmäktige: </span>{currentData.kommunfullmäktige}</CardDescription>
                                        <CardDescription className="mt-2"><span className="font-bold">Europaparlamentet: </span>{currentData.europaparlamentet}</CardDescription>
                                    </CardContent>
                                </Card>
                                <Card className=''>
                                    <CardHeader className="font-bold text-lg flex flex-row" style={{ color: currentData.färg }}>Valresultat i riksdagsvalet
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6 ml-2">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 6a7.5 7.5 0 1 0 7.5 7.5h-7.5V6Z" />
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 10.5H21A7.5 7.5 0 0 0 13.5 3v7.5Z" />
                                        </svg>
                                    </CardHeader>
                                    <div className="flex justify-center items-center mb-10">
                                        <div className="chart-container-small min-h-[300px] max-w-[400px] p-5">
                                            {/* @ts-ignore */}
                                            {currentData.id2 === 'S' ? (<Bar data={stats.S} options={option.option1} />) : null}
                                            {/* @ts-ignore */}
                                            {currentData.id2 === 'SD' ? (<Bar data={stats.SD} options={option.option1} />) : null}
                                            {/* @ts-ignore */}
                                            {currentData.id2 === 'M' ? (<Bar data={stats.M} options={option.option1} />) : null}
                                            {/* @ts-ignore */}
                                            {currentData.id2 === 'V' ? (<Bar data={stats.V} options={option.option1} />) : null}
                                            {/* @ts-ignore */}
                                            {currentData.id2 === 'C' ? (<Bar data={stats.C} options={option.option1} />) : null}
                                            {/* @ts-ignore */}
                                            {currentData.id2 === 'KD' ? (<Bar data={stats.KD} options={option.option1} />) : null}
                                            {/* @ts-ignore */}
                                            {currentData.id2 === 'MP' ? (<Bar data={stats.MP} options={option.option1} />) : null}
                                            {/* @ts-ignore */}
                                            {currentData.id2 === 'L' ? (<Bar data={stats.L} options={option.option1} />) : null}
                                        </div>
                                    </div>
                                </Card>
                            </div>
                        </div>
                        <div className="flex justify-center items-center p-5 ">
                            <Card className="col-span-1 md:col-span-2 w-full md:w-1/2">
                                <CardHeader className="font-bold text-lg flex flex-row" style={{ color: currentData.färg }}>Generell Information
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6 ml-2">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="m11.25 11.25.041-.02a.75.75 0 0 1 1.063.852l-.708 2.836a.75.75 0 0 0 1.063.853l.041-.021M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9-3.75h.008v.008H12V8.25Z" />
                                    </svg>
                                </CardHeader>
                                <CardContent>
                                    <p>{currentData.info}</p>
                                </CardContent>
                            </Card>
                        </div>
                    </div>
                ) : (
                    <div className='flex justify-center items-center font-bold text-xl mt-20'>Laddar data...</div>
                )}
            </div>
            <Footer />
        </>
    );
}