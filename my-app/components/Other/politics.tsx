import React from "react";
import Link from 'next/link';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import data from '../../Assets/Data/politics.json';

export default function PolCom() {
    const mapData = (data: any) => {

        const mappedData = data.map((item: {
            id: number,
            name: string,
            grundat: string,
            ideologi: string,
            ledare: string,
            ledareMoney: string,
            mandat: string,
            money: string,
            votes: string,
            bild: string,
            antal_medlemmar: number,
            ungdomsförbund: string,
            ungdomsförbund_ledare: string,
            riksdagen: string,
            kommunfullmäktige: string,
            landsting: string,
            parti_hemsida: string
        }) => ({
            id: item.id,
            name: item.name,
            grundat: item.grundat,
            ideologi: item.ideologi,
            ledare: item.ledare,
            ledareMoney: item.ledareMoney,
            mandat: item.mandat,
            money: item.money,
            votes: item.votes,
            bild: item.bild,
            antal_medlemmar: item.antal_medlemmar,
            ungdomsförbund: item.ungdomsförbund,
            ungdomsförbund_ledare: item.ungdomsförbund_ledare,
            riksdagen: item.riksdagen,
            kommunfullmäktige: item.kommunfullmäktige,
            landsting: item.landsting,
            parti_hemsida: item.parti_hemsida
        }));

        return mappedData;
    };

    const tipsData = mapData(data);

    return (
        <div>
            <div className="text-center">
                <div className="mb-8">
                    <h1 className="font-bold text-4xl mt-20 bg-gradient-to-r from-cyan-500 to-blue-500 inline-block text-transparent bg-clip-text px-1 pb-1">En detaljerad guide till våra politiska ledare</h1>
                    <p className='text-center font-normal text-l mt-5'>Utforska de svenska riksdagspartierna och deras ledare med vår omfattande guide. <br></br> Här hittar du detaljerad information om varje parti, deras politiska plattformar och aktuella ledarskap. </p>
                    <hr className="w-96 h-1 mx-auto my-4 bg-gradient-to-r from-cyan-500 to-blue-500 border-0 rounded md:my-10 dark:bg-gray-700" />
                </div>
            </div>



            <Card className="m-5">
                <CardHeader className="text-center">
                    <h1 className="font-bold text-3xl bg-gradient-to-r from-cyan-500 to-blue-500 inline-block text-transparent bg-clip-text px-1 pb-1">Partier i riksdagen</h1>
                </CardHeader>
                <div className="flex justify-center">
                    <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
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
                                    {/* <CardDescription className="mt-2"><span className="font-bold">Riksdagen: </span>{tip.riksdagen}</CardDescription>
                                    <CardDescription className="mt-2"><span className="font-bold">Kommunfullmäktige: </span>{tip.kommunfullmäktige}</CardDescription>
                                    <CardDescription className="mt-2"><span className="font-bold">Landsting: </span>{tip.landsting}</CardDescription> */}
                                </CardContent>
                                <CardContent>
                                    <Link href={tip.parti_hemsida} target="_blank">
                                        <Button variant="outline" className='bg-white text-black'>Hemsida</Button>
                                    </Link>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>
            </Card>
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
