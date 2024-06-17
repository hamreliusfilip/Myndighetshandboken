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
            <div className="mb-8">
                <h1 className="font-bold text-4xl mt-20 bg-gradient-to-r from-cyan-500 to-blue-500 inline-block text-transparent bg-clip-text px-1 pb-1"> Statens bolagsportfölj </h1>
                <p className='text-center font-normal text-l mt-5'> Statens bolagsportfölj bestod av 43 bolag vid årsskiftet 2022/23 <br></br> och har sin tyngdpunkt inom basindustri och energi.</p>
            </div>
            <div className='flex justify-center'>
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
                    <div className="flex justify-center">
                        <div className="grid gap-4 p-5 grid-cols-1">
                            <Card className='w-96 h-96'>
                                <CardContent>
                                    <div className='m-5 mt-10'>
                                        <p className='font-bold text-sm text-left mb-2'>Utdelning</p>
                                        <div className='flex justify-left items-end'>
                                            <p className='font-extrabold text-5xl bg-gradient-to-r from-cyan-500 to-blue-500 inline-block text-transparent bg-clip-text'>23,0</p>
                                            <p className='font-regular text-sm'>mdkr</p>
                                        </div>
                                    </div>
                                    <div className='m-5'>
                                        <p className='font-bold text-sm text-left mb-2'>Direktavkastning</p>
                                        <div className='flex justify-left items-end'>
                                            <p className='font-extrabold text-5xl bg-gradient-to-r from-cyan-500 to-blue-500 inline-block text-transparent bg-clip-text'>2,7</p>
                                            <p className='font-regular text-sm'>%</p>
                                        </div>
                                    </div>
                                    <div className='m-5'>
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
                        <div className="grid gap-4 p-5 grid-cols-1">
                            <Card className='w-96 h-96'>
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
                        <div className="grid gap-4 p-5 grid-cols-1">
                            <Card className='w-96 h-96'>
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
            </div>


            <div className='flex justify-center'>
                <div className="grid grid-cols-1">

                    <div>
                    <h1 className="font-bold text-4xl mt-20 text-black"> Område </h1>
                        <p className="font-semibold text-small text-slate-300 m-4">Bolagsportföljen per område i procent - 2022/23</p>

                        <div className="chart-container min-h-[300px] p-5">
                            {/* @ts-ignore */}
                            <Bar data={data.data1} options={option.option1} />
                        </div>
                    </div>


                    <div className="">
                    <h1 className="font-bold text-4xl mt-20 text-black"> Sju bolag står för 80% av nettoomsttningen </h1>
                        <p className="font-semibold text-small text-slate-300 m-4">Inklusive intressebolag - Nettoomstättning mnkr</p>

                        <div className="chart-container min-h-[300px] p-5">
                            {/* @ts-ignore */}
                            <Bar data={data.data3} options={option.option3} />
                        </div>
                    </div>

                    <div className="">
                    <h1 className="font-bold text-4xl mt-20 text-black"> Resultat efter skatt </h1>
                        <p className="font-semibold text-small text-slate-300 m-4">Bolag med störst resultatpåverkan, jan-dec 2022, mdkr</p>

                        <div className="chart-container min-h-[300px] p-5">
                            {/* @ts-ignore */}
                            <Bar data={data.data2} options={option.option2} />
                        </div>
                    </div>
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
                                <Button variant="outline" className='bg-white text-black m-1'>Riksdagen</Button>
                            </Link>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </div>
    );
}

