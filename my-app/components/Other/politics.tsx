import React from "react";
import Link from 'next/link';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardTitle } from "@/components/ui/card";
import data from '@/Assets/Data/pol_parties.json';

function shuffle(array: any[]) {
    let currentIndex = array.length, randomIndex;

    while (currentIndex !== 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;
        [array[currentIndex], array[randomIndex]] = [array[randomIndex], array[currentIndex]];
    }

    return array;
}

export default function PolCom() {
    let tipsData = shuffle(data);

    return (
        <div>
            <div className="text-center">
                <div className="mb-8">
                    <h1 className="font-bold text-4xl mt-20 bg-gradient-to-r from-cyan-500 to-blue-500 inline-block text-transparent bg-clip-text px-1 pb-1">En detaljerad guide till våra politiska ledare</h1>
                    <p className='text-center font-normal text-l mt-5 p-4'>Utforska de svenska riksdagspartierna och deras ledare med vår omfattande guide. <br /> Här hittar du detaljerad information om varje parti, deras politiska plattformar och aktuella ledarskap. </p>
                </div>
            </div>

            <div className="m-5">
                <div className="flex justify-center">
                    <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 2xl:grid-cols-4 gap-6">
                        {tipsData.map((tip: any, index: any) => (
                            <Card key={index} className="m-5 w-auto">
                                <div className="ml-6 mt-6 flex justify-between items-center">
                                    <CardTitle>{tip.name}</CardTitle>
                                    <img src={tip.bild} alt={tip.name} className="w-20 rounded-sm mr-6" />
                                </div>
                                <div className="ml-6">
                                </div>
                                <CardContent>
                                    <CardDescription className="mt-2"><span className="font-bold">Grundat: </span>{tip.grundat}</CardDescription>
                                    <CardDescription className="mt-2"><span className="font-bold">Partiledare: </span>{tip.ledare}</CardDescription>
                                    <CardDescription className="mt-2"><span className="font-bold">Ideologi: </span>{tip.ideologi}</CardDescription>
                                    <CardDescription className="mt-2"><span className="font-bold">Mandat: </span>{tip.mandat}</CardDescription>
                                    <CardDescription className="mt-2"><span className="font-bold">Röster 2022: </span>{tip.votes} %</CardDescription>
                                    <CardDescription className="mt-2"><span className="font-bold">Antal medlemmar: </span>{tip.antal_medlemmar} st</CardDescription>
                                </CardContent>
                                <CardContent>
                                    <Link href={`/faktaover/politik/${tip.id2}`} passHref>
                                        <Button variant={"outline"} className="mt-4">
                                            Detaljerad Information
                                        </Button>
                                    </Link>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

