import React from "react";
import Link from 'next/link';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
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
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-7">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 0 0 3 8.25v10.5A2.25 2.25 0 0 0 5.25 21h10.5A2.25 2.25 0 0 0 18 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
                                </svg>
                            </Link>
                        </CardContent>
                    </Card>
                ))}
            </div>
        </div>
    );
}
