'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { Card, CardContent, CardTitle } from '@/components/ui/card';
import { navigationMenuTriggerStyle } from "@/components/ui/navigation-menu";
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"
import { Button } from '@/components/ui/button';
import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
} from "@/components/ui/navigation-menu"

import { AMyndigheter } from '@/lib/models/Amyndighet';
import CheckFilter from '@/components/DatabaseComponents/CheckFilter';


interface FiltersProps {
    Amyndigheter: AMyndigheter[];
    onFiltersChange: (filteredData: AMyndigheter[]) => void;
}

const FiltersEmb: React.FC<FiltersProps> = ({ Amyndigheter, onFiltersChange }) => {

    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const checkIfMobile = () => {
            const userAgent = navigator.userAgent;
            const isMobile = /Android|webOS|iPhone|iPod|BlackBerry|IEMobile|Opera Mini/i.test(userAgent);
            const isiPad = /iPad/i.test(userAgent);

            return isMobile && !isiPad;
        }
        setIsMobile(checkIfMobile());
    }, []);


    const [filterReset, setFilterReset] = useState(false);
    const [loading, setLoading] = useState(true);
    const [filteredAMyndigheter, setFilteredAMyndigheter] = useState<AMyndigheter[]>([]);
    const [sortingPlaceholder, setSortingPlaceholder] = useState("Alfabetisk - Underrubrik");

    const [searchQuery, setSearchQuery] = useState(() => {
        if (typeof window !== 'undefined') {
            const storedFilters = localStorage.getItem('AmyndighetFilters');
            if (storedFilters) {
                return JSON.parse(storedFilters).searchQuery;
            }
            return '';
        }
    });

    if (typeof window !== 'undefined') {

        useEffect(() => {
            const storedFilters = localStorage.getItem('AmyndighetFilters');
            if (storedFilters) {
                const parsedFilters = JSON.parse(storedFilters);

                setSearchQuery(parsedFilters.searchQuery);
            }
        }, []);

        useEffect(() => {
            const filtersToStore = JSON.stringify({
                searchQuery
            });
            localStorage.setItem('AmyndighetFilters', filtersToStore);
        }, [searchQuery]);

    }
    useEffect(() => {
        const filteredAMyndigheter = Amyndigheter.filter(Amyndighet => {

            const cityMatch = Amyndighet.City.toLowerCase().includes(searchQuery.toLowerCase());
            const countryMatch = Amyndighet.Country.toLowerCase().includes(searchQuery.toLowerCase());

            return (cityMatch || countryMatch);
        });

        onFiltersChange(filteredAMyndigheter);
    }, [Amyndigheter, searchQuery, onFiltersChange]);

    return (
        <div>
            {isMobile ? (
                <div className='overflow-x-hidden'>
                    <div className="flex flex-col m-1 gap-0 justify-items-center">
                        <div className="flex flex-row relative w-full">
                            <input
                                type="text"
                                placeholder="Sök med namn eller org nr..."
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                className="border border-gray-200 rounded-md p-2 w-full mb-4 font-base font-inter text-xs h-14"
                            />
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth={1.5}
                                stroke="grey"
                                className="absolute size-8 right-3 top-3"
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
                            </svg>
                        </div>
                    </div>
                </div>
            ) : (
                <>
                    <div>
                        <div className="text-center">
                            <h1 className="font-bold text-4xl bg-gradient-to-r from-cyan-500 to-blue-500 inline-block text-transparent bg-clip-text mt-10 mb-1 px-1 pb-1">
                                Sveriges ambassader och generalkonsulat
                            </h1>
                            <p className="font-semibold text-small text-slate-300 mb-10">
                                Alla svenska utlandsmyndigheter
                            </p>
                        </div>
                    </div>
                    <div className="flex flex-col lg:flex-row justify-center m-4 gap-5">
                        <div className='flex justify-between items-center'>
                            <p className="font-slate-300 text-sm font-light">
                                Antal hittade utlandsmyndigheter: {filteredAMyndigheter.length} st
                            </p>
                            {!isMobile && (
                                <div className="">
                                    <NavigationMenu>
                                        <NavigationMenuList className="border border-bg-slate-300 rounded-md">
                                            <NavigationMenuItem>
                                                <NavigationMenuTrigger className="font-regular">Hjälp</NavigationMenuTrigger>
                                                <NavigationMenuContent>
                                                    <div className="w-full lg:w-96 h-68 p-7">
                                                        Detta är en sökmotor för svenska utlandsmyndigheter. Du kan söka på samtliga utlandsmyndigheter i Sverige och filtrera på olika kriterier. Använd Filtreringsalternativen till vänster eller sökrutan för att hitta en specifik myndighet. Klickar du på knappen högst upp i högra hörnet på varje myndighet kommer du till den specifika sidan för just den myndigheten.
                                                    </div>
                                                </NavigationMenuContent>
                                            </NavigationMenuItem>
                                            <NavigationMenuItem>
                                                <Link href="abroadMyndighet/listaAmyndighet" legacyBehavior passHref>
                                                    <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                                                        Generisk lista
                                                    </NavigationMenuLink>
                                                </Link>
                                            </NavigationMenuItem>
                                        </NavigationMenuList>
                                    </NavigationMenu>
                                </div>
                            )}
                        </div>
                    </div>
                </>
            )}
        </div>
    );
};

export default FiltersEmb;
