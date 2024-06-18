import React from "react";
import Link from 'next/link';
import { Card, CardContent, CardDescription, CardTitle } from "@/components/ui/card";
import data from '../../Assets/Data/secret.json';

function shuffle(array: any[]) {
    let currentIndex = array.length, randomIndex;

    while (currentIndex !== 0) {

        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;

        [array[currentIndex], array[randomIndex]] = [
            array[randomIndex], array[currentIndex]];
    }

    return array;
}

export default function SecComp() {

    let tipsData = shuffle(data);

    return (
        <div>
            <div className="text-center">
                <div className="mb-8">
                    <h1 className="font-bold text-4xl mt-20 bg-gradient-to-r from-cyan-500 to-blue-500 inline-block text-transparent bg-clip-text px-1 pb-1">Utforska Sveriges okända myndighets <br></br> organ och underrättelse enheter</h1>
                    <p className='text-center font-normal text-l mt-5 p-4'>En lista över mindre kända organ eller organisationer <br></br> inom myndigheter med särskilt intressanta och spännande syften. </p>
                </div>
            </div>

            <div className="m-5">
                <div className="flex justify-center">
                    <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-6">
                        {tipsData.map((tip: any, index: any) => (
                            <Card key={index} className="m-5 w-auto">
                                <div className="flex justify-between items-center">
                                    <CardTitle className="text-lg ml-5">{tip.name}</CardTitle>
                                    {tip.img === "" ? <div className="bg-white w-20 h-20"> </div> : <img src={tip.img} alt={""} className="w-20 h-auto mr-5 mt-5" />}
                                </div>
                                <CardContent>
                                    <CardDescription className="mt-2"><span className="font-bold">Akronym: </span>{tip.ak}</CardDescription>
                                    <CardDescription className="mt-2"><span className="font-bold">Tillhörande myndighet: </span>{tip.Tillhörandemyndighet}</CardDescription>
                                    <CardDescription className="mt-2"><span className="font-bold">Tillhörande departement: </span>{tip.Tillhörandedepartement}</CardDescription>

                                    <CardDescription className="mt-2"><span className="font-bold">Typ av verksamhet: </span>{tip.Typavverksamhet}</CardDescription>

                                    {tip.web === "" ? null :
                                        <Link href={tip.web} target="_blank" rel="noreferrer">
                                            <div className="flex justify-start items-center flex-row">
                                                <CardDescription className="mt-2"><span className="font-bold">Organisationens hemsida: </span></CardDescription>
                                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5 mt-1 ml-1">
                                                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 0 0 3 8.25v10.5A2.25 2.25 0 0 0 5.25 21h10.5A2.25 2.25 0 0 0 18 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
                                                </svg>
                                            </div>
                                        </Link>
                                    }

                                    <CardDescription className="mt-2"><span className="font-bold">Information: </span>{tip.info}</CardDescription>

                                    {tip.infoLink === "" ? null :
                                        <Link href={tip.infoLink} target="_blank" rel="noreferrer">
                                            <div className="flex justify-start items-center flex-row">
                                                <CardDescription className="mt-2"><span className="font-bold">Källa: </span></CardDescription>
                                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5 mt-1 ml-1">
                                                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 0 0 3 8.25v10.5A2.25 2.25 0 0 0 5.25 21h10.5A2.25 2.25 0 0 0 18 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
                                                </svg>
                                            </div>
                                        </Link>
                                    }

                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
