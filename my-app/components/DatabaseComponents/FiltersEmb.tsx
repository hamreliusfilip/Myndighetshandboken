'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { navigationMenuTriggerStyle } from "@/components/ui/navigation-menu";
import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
} from "@/components/ui/navigation-menu"

import { AMyndigheter } from '@/lib/models/Amyndighet';


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

    const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSearchQuery(event.target.value);
    };

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
                    <div className="flex flex-col m-1 gap-0 justify-items-center p-5">
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
                <div>
                    <div className="flex flex-row justify-between items-center mb-4">
                        <div className="flex flex-row relative w-full basis-2/3 mr-2">
                            <input
                                type="text"
                                placeholder="Sök med land, stad eller delegation..."
                                value={searchQuery}
                                onChange={handleSearchChange}
                                className="border border-gray-200 rounded-md p-3 w-full font-base font-inter text-xs"
                            />
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth={1.5}
                                stroke="grey"
                                className="absolute size-6 right-2 top-2"
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
                            </svg>
                        </div>
                        <NavigationMenu className='basis-1/3'>
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
                </div>
            )}
        </div>
    );
};

export default FiltersEmb;
