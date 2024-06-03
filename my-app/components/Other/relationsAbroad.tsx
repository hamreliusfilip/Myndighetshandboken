'use client';

import React, { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";
import { Button } from "@/components/ui/button";

import texts from '../../Assets/Data/InternationellaRel.json';

export default function AboutMynVsCom() {

    const [selectedIndex, setSelectedIndex] = useState(0);

    const handleButtonClick = (index: number) => {
        setSelectedIndex(index);
    };

    return (
        <div>
            <div className="text-center">
                <h1 className="font-bold text-4xl mt-20 bg-gradient-to-r from-cyan-500 to-blue-500 inline-block text-transparent bg-clip-text px-1 pb-1"> Internationella Relationer </h1>
                <p className='text-center font-normal text-l mt-5'> Grundläggande information om <br></br> Sveriges största internationella samarbeten.</p>
                <hr className="w-96 h-1 mx-auto my-4 bg-gradient-to-r from-cyan-500 to-blue-500 border-0 rounded md:my-10 dark:bg-gray-700" />
            </div>
            <div className="flex flex-col sm:flex-row p-10">
                <div className="w-full sm:w-1/6 sm:ml-36 sm:mt-28 mb-8 sm:mb-0">
                    {texts.texts.map((text, index) => (
                        <div
                            key={text.id}
                            onClick={() => handleButtonClick(index)}
                            className={selectedIndex === index ? 'font-regular text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-blue-600 px-4 py-2 rounded-md mr-2 cursor-pointer' : 'font-regular text-slate-500 bg-white hover:bg-slate-100 px-4 py-2 rounded-md mr-2 cursor-pointer'}
                        >
                            {text.title}
                        </div>
                    ))}
                </div>
                <div className="w-full sm:w-2/3 sm:-ml-36">
                    <div className="flex justify-center">
                        <div className="flex flex-wrap justify-center">
                            <Card key={texts.texts[selectedIndex].id} className="m-4 p+2 w-full sm:w-1/2 md:w-1/2 lg:w-1/2 xl:w-1/2 h-auto">
                                <CardHeader>
                                    <CardTitle>{texts.texts[selectedIndex].title}</CardTitle>
                                    <CardDescription className="text-sm"><span className='text-slate-600'><span className="font-bold">Fullständigt namn: </span> {texts.texts[selectedIndex].subtitle}</span></CardDescription>
                                    <CardDescription className="text-sm"><span className='text-slate-600'><span className="font-bold">Kostnad: </span> {texts.texts[selectedIndex].cost}</span></CardDescription>
                                    <CardDescription className="text-sm"><span className='text-slate-600'><span className="font-bold">Sverige gick med: </span> {texts.texts[selectedIndex].since}</span></CardDescription>
                                    <CardDescription className="text-sm"><span className='text-slate-600'><span className="font-bold">Antal medlemsländer: </span> {texts.texts[selectedIndex].members} st</span></CardDescription>
                                    <CardDescription className="text-sm">
                                        <span className="text-slate-600 flex justify-left items-center">
                                            <span className="font-bold">Hemsida: </span>
                                            <a href={texts.texts[selectedIndex].web} target="_blank" rel="noopener noreferrer">
                                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-4 ml-1">
                                                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 0 0 3 8.25v10.5A2.25 2.25 0 0 0 5.25 21h10.5A2.25 2.25 0 0 0 18 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
                                                </svg>
                                            </a>
                                        </span>
                                    </CardDescription>

                                </CardHeader>
                                <CardContent>
                                    <CardDescription className="text-sm"><span className='text-slate-600'><span className="font-bold">Flagga: </span></span></CardDescription>
                                    <img src={texts.texts[selectedIndex].img} alt={texts.texts[selectedIndex].title} className="w-2/3 mt-3" />
                                </CardContent>
                                <CardContent>
                                    <p className="text-lg"><span className='text-slate-600'><span className="font-bold">Generell information: </span></span></p>
                                    <p>{texts.texts[selectedIndex].content}</p>
                                </CardContent>
                            </Card>
                        </div>
                    </div>
                </div>
            </div>




            <div className="px-4 pt-16">
                <div className="flex flex-wrap justify-center">
                    <Card className="m-4 p+2 w-full sm:w-1/2 md:w-1/2 lg:w-1/3 xl:w-1/3">
                        <CardHeader>
                            <CardTitle>Om datan</CardTitle>
                            <CardDescription className="text-sm bg-gradient-to-r from-cyan-500 to-blue-500 inline-block text-transparent bg-clip-text">Vart kommer informationen ifrån?</CardDescription>
                        </CardHeader>
                        <CardContent>
                            <p>Den här datan är AI genererad med hjälp av Open AI's ChatGPT-3.5. Informationen har tagits fram genom att ställa de frågor som är markerat i blått på respketive kort.</p>
                        </CardContent>
                        <CardContent>
                            <Link href="https://chat.openai.com" target="_blank">
                                <Button variant="outline" className='bg-white text-black m-1'>ChatGPT - OpenAI</Button>
                            </Link>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </div >
    );
}
