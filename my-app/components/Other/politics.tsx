import React from "react";
import Link from 'next/link';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import data from '../../Assets/Data/politics.json';

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

export default function PolCom() {

   let tipsData = shuffle(data);

    return (
        <div>
            <div className="text-center">
                <div className="mb-8">
                    <h1 className="font-bold text-4xl mt-20 bg-gradient-to-r from-cyan-500 to-blue-500 inline-block text-transparent bg-clip-text px-1 pb-1">En detaljerad guide till våra politiska ledare</h1>
                    <p className='text-center font-normal text-l mt-5 p-4'>Utforska de svenska riksdagspartierna och deras ledare med vår omfattande guide. <br></br> Här hittar du detaljerad information om varje parti, deras politiska plattformar och aktuella ledarskap. </p>
                </div>
            </div>
            
            <div className="m-5">
                <CardHeader className="text-center">
                    <h1 className="font-bold text-3xl bg-gradient-to-r from-cyan-500 to-blue-500 inline-block text-transparent bg-clip-text px-1 pb-1">Partier i riksdagen</h1>
                </CardHeader>
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
                                    <CardDescription className="mt-2"><span className="font-bold">Partiledare lön: </span>{tip.ledareMoney} kr</CardDescription>
                                    <CardDescription className="mt-2"><span className="font-bold">Ideologi: </span>{tip.ideologi}</CardDescription>
                                    <CardDescription className="mt-2"><span className="font-bold">Mandat: </span>{tip.mandat}</CardDescription>
                                    <CardDescription className="mt-2"><span className="font-bold">Röster 2022: </span>{tip.votes} %</CardDescription>
                                    <CardDescription className="mt-2"><span className="font-bold">Antal medlemmar: </span>{tip.antal_medlemmar} st</CardDescription>
                                    <CardDescription className="mt-2"><span className="font-bold">Bidrag till partiet: </span>{tip.money} kr</CardDescription>
                                    <CardDescription className="mt-2"><span className="font-bold">Ungdomsförbrund: </span>{tip.ungdomsförbund}</CardDescription>
                                    <CardDescription className="mt-2"><span className="font-bold">Ungdomsförbund ledare: </span>{tip.ungdomsförbund_ledare}</CardDescription>
                                </CardContent>
                                <CardContent>
                                    <Link href={tip.parti_hemsida} target="_blank">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="black " className="size-6">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 0 0 3 8.25v10.5A2.25 2.25 0 0 0 5.25 21h10.5A2.25 2.25 0 0 0 18 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
                                        </svg>
                                    </Link>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>
            </div>

            <div className="flex justify-center items-center">
                <Card className="w-64 m-5">
                    <CardHeader>
                        <CardTitle>Läs mer</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <p className="font-regular text-sm"> Läs mer om hur riksdagen och regeringen fungerar samt fördelningen i riksdagen</p>
                        <Link href="/faktaover/riksdagen">
                            <Button variant={"outline"} className="mt-4 bg-white text-black"> Riksdagen & Regeringen </Button>
                        </Link>
                    </CardContent>
                </Card>
            </div>
        </div >
    );
}
