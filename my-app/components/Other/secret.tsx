import React from "react";
import Link from 'next/link';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import data from '../../Assets/Data/secrets.json';

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
                    <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 2xl:grid-cols-4 gap-6">
                        {tipsData.map((tip: any, index: any) => (
                            <Card key={index} className="m-5 w-auto">
                                <div className="ml-6 mt-6 flex justify-between items-center">
                                    <CardTitle className="text-lg">{tip.name}</CardTitle>
                                    <img src={tip.img} alt={tip.name} className="w-20 rounded-sm mr-6 h-20 w-auto" />
                                </div>
                                <div className="ml-6">
                                </div>
                                <CardContent>
                                    <CardDescription className="mt-2"><span className="font-bold">Akronym: </span>{tip.ak}</CardDescription>
                                    <CardDescription className="mt-2"><span className="font-bold">Tillhörande myndighet: </span>{tip.Tillhörandemyndighet}</CardDescription>
                                    <CardDescription className="mt-2"><span className="font-bold">Tillhörande departement: </span>{tip.Tillhörandedepartement}</CardDescription>
                                    <CardDescription className="mt-2"><span className="font-bold">Grundat: </span>{tip.Grundat}</CardDescription>
                                    <CardDescription className="mt-2"><span className="font-bold">Typ av verksamhet: </span>{tip.Typavverksamhet}</CardDescription>
                                    <CardDescription className="mt-2"><span className="font-bold">Antal anställda: </span>{tip.Antalanställda}</CardDescription>
                                    <CardDescription className="mt-2"><span className="font-bold">Chef: </span>{tip.Chef}</CardDescription>
                                    <CardDescription className="mt-2"><span className="font-bold">Information: </span>{tip.info}</CardDescription>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
