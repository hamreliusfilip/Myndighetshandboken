"use client";

import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import { Card, CardContent, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function List() {
    const [loading, setLoading] = useState(true);
    const [items, setItems] = useState<any[]>([]);

    const fetchItems = async () => {
        try {
            const res = await fetch("/api/Amyndigheter", {
                method: "GET",
            });
            if (!res.ok) {
                throw new Error("Network response was not ok");
            }
            const data = await res.json();
            return data.Amyndighet;
        } catch (error) {
            console.error("Error fetching Amyndigheter:", error);
            return [];
        }
    };

    useEffect(() => {
        fetchItems().then((items) => {
            setItems(items);
            setLoading(false);
        }).catch((error) => {
            console.error("Error setting myndigheter:", error);
        });
    }, []);

    const groupAndSortItems = (items: any[]) => {
        const grouped = items.reduce((acc: any, item: any) => {
            const firstLetter = item.Country.charAt(0).toUpperCase();
            acc[firstLetter] = acc[firstLetter] || [];
            acc[firstLetter].push({
                id: item._id,
                Country: item.Country,
                City: item.City,
                Type: item.Type,
            });
            return acc;
        }, {});

        Object.keys(grouped).forEach((key) => {
            grouped[key].sort((a: any, b: any) => {
                const normalize = (str: string) => str.replace(/[^a-zA-Z0-9]/g, '').toUpperCase();
                const aCon = normalize(a.Country);
                const bCon = normalize(b.Country);
                return aCon.localeCompare(bCon);
            });
        });

        return grouped;
    };

    const grouped = groupAndSortItems(items);
    const sortedKeys = Object.keys(grouped).sort();

    const loadingPlaceholder = Array.from({ length: 30 }).map((_, i) => (
        <div key={i} className="animate-pulse">
            <div className="h-16 bg-gray-200 rounded mb-3 mt-1"></div>
        </div>
    ));

    return (
        <div>
            <Link href="/abroadMyndighet">
                <Button variant="outline" className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white ml-8 mt-8">
                    Tillbaka
                </Button>
            </Link>
            <Card className="h-5/6 w-2/4 mx-auto">
                <CardContent className="m-1 my-10">
                    <CardTitle className="my-10">Utlands myndigheter under regeringen utifrån alfabetisk ordning</CardTitle>
                    {loading ? (
                        <div>{loadingPlaceholder}</div>
                    ) : (
                        <div>
                            {sortedKeys.map((letter) => (
                                <div key={letter}>
                                    <h2 className="font-bold">{letter}</h2>
                                    {grouped[letter].map((item: any) => (
                                        <p key={item.id}>{item.Country} - {item.City}: <span className='text-slate-400 font-light'>{item.Type}</span></p>
                                    ))}
                                </div>
                            ))}
                        </div>
                    )}
                </CardContent>
            </Card>
        </div>
    );
}
