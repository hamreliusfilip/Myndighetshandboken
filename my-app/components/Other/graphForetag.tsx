'use client';

import React from 'react';
import Link from 'next/link';
import { Bar, Doughnut } from 'react-chartjs-2';
import { Chart, ArcElement, CategoryScale, LinearScale, Title, Tooltip, Legend, BarElement } from 'chart.js';
import { Button } from "@/components/ui/button"
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";

import data from '../../Assets/Data/ForetagData.json';
import option from '../../Assets/Data/ForetagOptions.json';

Chart.register(ArcElement, CategoryScale, LinearScale, Title, Tooltip, Legend, BarElement);

export default function GraphForetag() {
    return (
        <div className="text-center">
            <div className="mb-2">
                <h1 className="font-bold text-4xl mt-20 bg-gradient-to-r from-cyan-500 to-blue-500 inline-block text-transparent bg-clip-text px-1 pb-1"> Statens bolagsportfölj </h1>
                <p className='text-center font-normal text-l mt-5'> Statens bolagsportfölj bestod av 43 bolag vid årsskiftet 2022/23 <br></br>och har sin tyngdpunkt inom basindustri och energi.</p>
                <hr className="w-96 h-1 mx-auto my-4 bg-gradient-to-r from-cyan-500 to-blue-500 border-0 rounded md:my-10 dark:bg-gray-700" />
            </div>
            <div className="flex justify-center grid gap-8 p-10 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">

                <div className="flex justify-center">
                    <div className="grid gap-8 p-10 sm:grid-cols-1">
                        <Card className='w-96 h-auto'>
                            <CardContent>
                                <div className='m-10'>

                                    <p className='font-bold text-sm text-left mb-2'>Utdelning</p>
                                    <div className='flex justify-left items-end'>
                                        <p className='font-extrabold text-5xl bg-gradient-to-r from-cyan-500 to-blue-500 inline-block text-transparent bg-clip-text'>23,0</p>
                                        <p className='font-regular text-sm'>mdkr</p>
                                    </div>

                                </div>
                                <div className='m-10'>

                                    <p className='font-bold text-sm text-left mb-2'>Direktavkastning</p>
                                    <div className='flex justify-left items-end'>
                                        <p className='font-extrabold text-5xl bg-gradient-to-r from-cyan-500 to-blue-500 inline-block text-transparent bg-clip-text'>2,7</p>
                                        <p className='font-regular text-sm'>%</p>
                                    </div>

                                </div>
                                <div className='m-10'>
                                    <p className='font-bold text-sm text-left mb-2'>Antal anställda</p>
                                    <div className='flex justify-left items-end'>
                                        <p className='font-extrabold text-5xl bg-gradient-to-r from-cyan-500 to-blue-500 inline-block text-transparent bg-clip-text'>134 000</p>
                                        <p className='font-regular text-sm'>st</p>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                    </div>
                </div>
                <div className="flex justify-center">
                    <div className="grid gap-8 p-10 sm:grid-cols-1">
                        <Card className='w-96 h-auto'>
                            <CardContent className=''>
                                <div className='m-10'>
                                    <p className='font-bold text-sm text-left mb-2'>Styrelseordförande och ledamöter</p>
                                    <div className='flex justify-left items-end'>
                                        <p className='font-extrabold text-5xl bg-gradient-to-r from-cyan-500 to-blue-500 inline-block text-transparent bg-clip-text'>50/50</p>
                                        <p className='font-regular text-sm'>Kvinnor/Män,%</p>
                                    </div>
                                </div>
                                <div className='m-10'>
                                    <p className='font-bold text-sm text-left mb-2'>Styrelseordförande</p>
                                    <div className='flex justify-left items-end'>
                                        <p className='font-extrabold text-5xl bg-gradient-to-r from-cyan-500 to-blue-500 inline-block text-transparent bg-clip-text'>45/55</p>
                                        <p className='font-regular text-sm'>Kvinnor/Män,%</p>
                                    </div>
                                </div>
                                <div className='m-10'>
                                    <p className='font-bold text-sm text-left mb-2'>Antal ordförande & ledamöter</p>
                                    <div className='flex justify-left items-end'>
                                        <p className='font-extrabold text-5xl bg-gradient-to-r from-cyan-500 to-blue-500 inline-block text-transparent bg-clip-text'>285</p>
                                        <p className='font-regular text-sm'>st</p>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                    </div>
                </div>

                <div className="flex justify-center">
                    <div className="grid gap-8 p-10 sm:grid-cols-1">
                        <Card className='w-96 h-auto'>
                            <CardContent>
                                <div className='m-10'>
                                    <p className='font-bold text-sm text-left mb-2'>Nettoomstättning Exkl. IB</p>
                                    <div className='flex justify-left items-end'>
                                        <p className='font-extrabold text-5xl bg-gradient-to-r from-cyan-500 to-blue-500 inline-block text-transparent bg-clip-text'>476</p>
                                        <p className='font-regular text-sm'>Mdkr</p>
                                    </div>
                                </div>
                                <div className='m-10'>
                                    <p className='font-bold text-sm text-left mb-2'>Nettoomstättning Inkl IB</p>
                                    <div className='flex justify-left items-end'>
                                        <p className='font-extrabold text-5xl bg-gradient-to-r from-cyan-500 to-blue-500 inline-block text-transparent bg-clip-text'>520</p>
                                        <p className='font-regular text-sm'>Mdkr</p>
                                    </div>
                                </div>
                                <div className='m-10'>
                                    <p className='font-bold text-sm text-left mb-2'>IB = Intressebolag</p>
                                    
                                </div>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </div>


            <div className="flex flex-col items-center justify-center">
                <h1 className="font-bold text-4xl mt-20 bg-gradient-to-r from-cyan-500 to-blue-500 inline-block text-transparent bg-clip-text"> Område </h1>
                <p className="font-semibold text-small text-slate-300 m-4">Bolagsportföljen per område i procent - 2022/23</p>
                <div className="pl-20 pr-20 w-1/2">
                    {/* @ts-ignore */}
                    <Doughnut data={data.data1} options={option.option1} />
                </div>
            </div>

            <div className="flex flex-col items-center justify-center">
                <h1 className="font-bold text-4xl mt-20 bg-gradient-to-r from-cyan-500 to-blue-500 inline-block text-transparent bg-clip-text px-1 pb-1"> Sju bolag står för 80% av nettoomsttningen </h1>
                <p className="font-semibold text-small text-slate-300 m-4">Inklusive intressebolag - Nettoomstättning mnkr</p>
                <div className="pr-20 pl-20 w-2/3 mb-44">
                    {/* @ts-ignore */}
                    <Bar data={data.data3} options={option.option3} />
                </div>

                <h1 className="font-bold text-4xl mt-20 bg-gradient-to-r from-cyan-500 to-blue-500 inline-block text-transparent bg-clip-text px-1 pb-1"> Resultat efter skatt </h1>
                <p className="font-semibold text-small text-slate-300 m-4">Bolag med störst resultatpåverkan, jan-dec 2022, mdkr</p>
                <div className="pr-20 pl-20 w-2/3 mb-44">
                    {/* @ts-ignore */}
                    <Bar data={data.data2} options={option.option2} />
                </div>
            </div>

            <div className="flex justify-center pt-16">
                <div className="w-full sm:w-3/4 lg:w-1/2">
                    <Card className="m-4 p+2 text-left">
                        <CardHeader>
                            <CardTitle>Om datan</CardTitle>
                            <CardDescription className="text-sm bg-gradient-to-r from-cyan-500 to-blue-500 inline-block text-transparent bg-clip-text">Vart kommer datan ifrån?</CardDescription>
                        </CardHeader>
                        <CardContent>
                            <p>Datan är baserad på Regeringens skrivelse 2022/23:140 - 2023 års redogörelse för företag med statligt ägande.</p>
                        </CardContent>
                        <CardContent>
                            <Link href="https://data.riksdagen.se/dokument/HA03140" target="_blank">
                                <Button variant="outline" className='m-1 bg-gradient-to-r from-cyan-500 to-blue-500 text-white'>Riksdagen</Button>
                            </Link>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </div>
    );
}

