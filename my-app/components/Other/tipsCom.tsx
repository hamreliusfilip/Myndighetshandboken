import React from "react";
import Link from 'next/link';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import data from '../../Assets/Data/TipsData.json';

export default function TipsCom() {
    const mapData = (data: any) => {

        const mappedData: { id: string, name: string, info: string, web: string, img: string }[] = [];
        Object.keys(data).forEach(key => {
            data[key].forEach((item: { name: string, info: string, web: string, img: string }) => {
                mappedData.push({
                    id: key,
                    name: item.name,
                    info: item.info,
                    web: item.web,
                    img: item.img
                });
            });
        });
        return mappedData;
    };

    const tipsData = mapData(data);

    return (
        <div>
            <div className="text-center">
                <div className="mb-8 p-3">
                    <h1 className="font-bold text-4xl mt-20 bg-gradient-to-r from-cyan-500 to-blue-500 inline-block text-transparent bg-clip-text px-1 pb-1">Hemsidor för pålitlig information och kvalitetsinnehåll</h1>
                    <p className='text-center font-normal text-l mt-5'> Vår sammanställning erbjuder en kort guide till högkvalitativa <br></br>  webbplatser där du kan hitta relevant och auktoritativt innehåll.</p>
                </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                {tipsData.map((tip, index) => (
                    <Card key={index} className="m-5">
                  
                        <div className="ml-6">
                            <img src={tip.img} alt={tip.name} className="w-56 rounded-sm mt-5 mb-5" />
                        </div>
                        <CardContent>
                            <p className="text-black font-regular">{tip.info}</p>
                        </CardContent>
                        <CardContent>
                            <Link href={tip.web} target="_blank">
                                <Button variant="outline" className='bg-white text-black'>Läs mer</Button>
                            </Link>
                        </CardContent>
                    </Card>
                ))}
            </div>
        </div>
    );
}
