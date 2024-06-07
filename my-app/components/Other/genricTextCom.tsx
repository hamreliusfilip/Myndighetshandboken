'use client';

import React, { useState, useEffect } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";
import { Button } from "@/components/ui/button";

interface TextData {
    id?: string;
    title?: string;
    subtitle?: string;
    subtitle2?: string;
    vad?: string;
    cost?: string;
    since?: string;
    members?: string;
    web?: string;
    img?: string;
    contentEasy?: string;
    contentNormal?: string;
    contentHard?: string;
    test?: string;
    fuck?: string;
}

interface DataStructure {
    texts: TextData[];
}

export default function GenericText({ type }: { type: string }) {
    const [texts, setTexts] = useState<DataStructure | null>(null);
    const [selectedIndex, setSelectedIndex] = useState(0);
    const [difficulty, setDifficulty] = useState(0);

    useEffect(() => {
        let dataPath: string;
        if (type === "Inter") {
            dataPath = '/InternationellaRel.json';
        } else if (type === "Basic") {
            dataPath = '/basicFacts.json';
        } else {
            dataPath = '/mynVsComp.json';
        }

        fetch(dataPath)
            .then((response) => response.json())
            .then((data) => setTexts(data))
            .catch((error) => console.error('Error fetching data:', error));
    }, [type]);

    const handleButtonClick = (index: number) => {
        setSelectedIndex(index);
    };

    const handleButtonClick2 = (value: number) => {
        setDifficulty(value);
    };

    if (!texts) {
        return <div className="text-center flex justify-center items center font-regular text-black text-xl">Laddar...</div>;
    }

    const selectedText = texts.texts[selectedIndex];

    return (
        <div>
            <div className="">
                <div className="mt-10 m-3">
                    <div className="flex flex-wrap justify-center">
                        <Card className="p-2 mt-10 w-full lg:w-1/3">
                            {texts.texts.map((text, index) => (
                                <div
                                    key={text.id}
                                    onClick={() => handleButtonClick(index)}
                                    className={selectedIndex === index ? 'font-regular text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-blue-600 px-4 py-2 rounded-md mr-2 cursor-pointer' : 'font-regular text-slate-500 bg-white hover:bg-slate-100 px-4 py-2 rounded-md mr-2 cursor-pointer'}
                                >
                                    {text.title}
                                </div>
                            ))}
                        </Card>
                    </div>
                </div>

                <div className="mt-10 m-3">
                    <div className="flex flex-wrap justify-center">
                        <Card key={selectedText.id} className="w-full lg:w-1/3">
                            <CardContent>
                                <div className="p-1 flex justify-between flex-grow mt-3">
                                    {[{ label: "Lätt", value: 1 }, { label: "Normal", value: 0 }, { label: "Avancerad", value: 2 }].map(({ label, value }) => (
                                        <div
                                            key={value}
                                            onClick={() => handleButtonClick2(value)}
                                            className={difficulty === value ? 'font-regular text-white bg-black px-4 py-2 rounded-md mr-2 cursor-pointer flex justify-left items-center' : 'font-regular text-slate-500 bg-white hover:bg-slate-100 px-4 py-2 rounded-md mr-2 cursor-pointer flex justify-left items-center'}
                                        >
                                            <p>{label}</p>
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6 ml-1">
                                                <path strokeLinecap="round" strokeLinejoin="round" d={value === 1 ? "M4.26 10.147a60.438 60.438 0 0 0-.491 6.347A48.62 48.62 0 0 1 12 20.904a48.62 48.62 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a50.636 50.636 0 0 0-2.658-.813A59.906 59.906 0 0 1 12 3.493a59.903 59.903 0 0 1 10.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0 1 12 13.489a50.702 50.702 0 0 1 7.74-3.342M6.75 15a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm0 0v-3.675A55.378 55.378 0 0 1 12 8.443m-7.007 11.55A5.981 5.981 0 0 0 6.75 15.75v-1.5" : value === 0 ? "M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z" : "M16.5 18.75h-9m9 0a3 3 0 0 1 3 3h-15a3 3 0 0 1 3-3m9 0v-3.375c0-.621-.503-1.125-1.125-1.125h-.871M7.5 18.75v-3.375c0-.621.504-1.125 1.125-1.125h.872m5.007 0H9.497m5.007 0a7.454 7.454 0 0 1-.982-3.172M9.497 14.25a7.454 7.454 0 0 0 .981-3.172M5.25 4.236c-.982.143-1.954.317-2.916.52A6.003 6.003 0 0 0 7.73 9.728M5.25 4.236V4.5c0 2.108.966 3.99 2.48 5.228M5.25 4.236V2.721C7.456 2.41 9.71 2.25 12 2.25c2.291 0 4.545.16 6.75.47v1.516M7.73 9.728a6.726 6.726 0 0 0 2.748 1.35m8.272-6.842V4.5c0 2.108-.966 3.99-2.48 5.228m2.48-5.492a46.32 46.32 0 0 1 2.916.52 6.003 6.003 0 0 1-5.395 4.972m0 0a6.726 6.726 0 0 1-2.749 1.35m0 0a6.772 6.772 0 0 1-3.044 0"} />
                                            </svg>
                                        </div>
                                    ))}
                                </div>
                            </CardContent>
                            <CardHeader className="pb-3">
                                {selectedText.title && <CardTitle>{selectedText.title}</CardTitle>}
                                {selectedText.subtitle && <CardDescription>{selectedText.subtitle}</CardDescription>}
                                {selectedText.vad && <CardDescription className="text-sm"><span className='text-slate-600'><span className="font-bold">Vad är det?: </span> {selectedText.vad}</span></CardDescription>}
                                {selectedText.cost && <CardDescription className="text-sm"><span className='text-slate-600'><span className="font-bold">Kostnad: </span> {selectedText.cost}</span></CardDescription>}
                                {selectedText.since && <CardDescription className="text-sm"><span className='text-slate-600'><span className="font-bold">Sverige gick med: </span> {selectedText.since}</span></CardDescription>}
                                {selectedText.members && <CardDescription className="text-sm"><span className='text-slate-600'><span className="font-bold">Antal medlemsländer: </span> {selectedText.members} st</span></CardDescription>}
                                {selectedText.web && (
                                    <CardDescription className="text-sm">
                                        <span className="text-slate-600 flex justify-left items-center">
                                            <span className="font-bold">Hemsida: </span>
                                            <a href={selectedText.web} target="_blank" rel="noopener noreferrer">
                                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-4 ml-1">
                                                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 0 0 3 8.25v10.5A2.25 2.25 0 0 0 5.25 21h10.5A2.25 2.25 0 0 0 18 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
                                                </svg>
                                            </a>
                                        </span>
                                    </CardDescription>
                                )}
                            </CardHeader>
                            <CardContent>
                                {selectedText.img && <CardDescription className="text-sm"><span className='text-slate-600'><span className="font-bold">Flagga: </span></span></CardDescription>}
                                {selectedText.img && <img src={selectedText.img} alt={selectedText.title} className="w-1/3 mt-3" />}
                            </CardContent>
                            <CardContent>
                                <p className="text-lg"><span className='text-slate-600'><span className="font-bold">Generell information: </span></span></p>
                                {difficulty === 0 && selectedText.contentNormal && <p>{selectedText.contentNormal}</p>}
                                {difficulty === 1 && selectedText.contentEasy && <p>{selectedText.contentEasy}</p>}
                                {difficulty === 2 && selectedText.contentHard && <p>{selectedText.contentHard}</p>}
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </div>

            <div className="mt-10 m-3">
                <div className="flex flex-wrap justify-center">
                    <Card className="w-full lg:w-1/3">
                        <CardHeader>
                            <CardTitle>Om datan</CardTitle>
                            <CardDescription className="text-sm bg-gradient-to-r from-cyan-500 to-blue-500 inline-block text-transparent bg-clip-text">Vart kommer informationen ifrån?</CardDescription>
                        </CardHeader>
                        <CardContent>
                            <p>Den här datan är AI genererad med hjälp av Open AI's ChatGPT-3.5. Informationen har tagits fram genom att ställa de frågor som är markerat i blått på respektive kort.</p>
                        </CardContent>
                        <CardContent>
                            <Link href="https://chat.openai.com" target="_blank">
                                <Button variant="outline" className='bg-white text-black m-1'>ChatGPT - OpenAI</Button>
                            </Link>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </div>
    );
}
