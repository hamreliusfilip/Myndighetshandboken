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

const Filters: React.FC<FiltersProps> = ({ Amyndigheter, onFiltersChange }) => {

    const [isMobile, setIsMobile] = useState(false);
    const [filterReset, setFilterReset] = useState(false);

    useEffect(() => {
        const checkIfMobile = () => {
            const userAgent = navigator.userAgent;
            const isMobile = /Android|webOS|iPhone|iPod|BlackBerry|IEMobile|Opera Mini/i.test(userAgent);
            const isiPad = /iPad/i.test(userAgent);

            return isMobile && !isiPad;
        }
        setIsMobile(checkIfMobile());
    }, []);

    const [searchQuery, setSearchQuery] = useState(() => {
        if (typeof window !== 'undefined') {
            const storedFilters = localStorage.getItem('AmyndighetFilters');
            if (storedFilters) {
                return JSON.parse(storedFilters).searchQuery || '';
            }
            return '';
        }
    });

    const [relationFilters, setRelationFilters] = useState(() => {
        if (typeof window !== 'undefined') {
            const storedFilters = localStorage.getItem('AmyndighetFilters');
            if (storedFilters) {
                return JSON.parse(storedFilters).relationFilters || {};
            }
            return {};
        }
    });

    if (typeof window !== 'undefined') {

        useEffect(() => {
            const storedFilters = localStorage.getItem('AmyndighetFilters');
            if (storedFilters) {
                const parsedFilters = JSON.parse(storedFilters);
                setRelationFilters(parsedFilters.relationFilters);
                setSearchQuery(parsedFilters.searchQuery);
            }
        }, []);

        useEffect(() => {
            const filtersToStore = JSON.stringify({
                relationFilters,
                searchQuery
            });
            localStorage.setItem('AmyndighetFilters', filtersToStore);
        }, [relationFilters, searchQuery]);

    }

    useEffect(() => {
        const filteredAMyndigheter = Amyndigheter.filter(Amyndighet => {
            const nameMatch = Amyndighet.City.toLowerCase().includes(searchQuery.toLowerCase());
            const orgMatch = Amyndighet.Country.toLowerCase().includes(searchQuery.toLowerCase());

            const relationMatch = Object.entries(relationFilters).every(([relation, checked]) => !checked || (checked && relationFilters[Amyndighet.Type]));

            return (nameMatch || orgMatch) && relationMatch;
        });

        onFiltersChange(filteredAMyndigheter);
    }, [Amyndigheter, searchQuery, relationFilters, onFiltersChange]);

    const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSearchQuery(event.target.value);
    };

    const handleRelationFilterChange = (filters: Record<string, boolean>) => {
        setRelationFilters(filters);
    };

    const handleClearFilters = () => {
        setRelationFilters({});
        setSearchQuery('');
    };

    return (
        <div>
            {isMobile ? (
                <div className='overflow-x-hidden'>
                    <div className="flex flex-col m-1 gap-0 justify-items-center">
                        <div className="flex flex-row relative w-full">
                            <input
                                type="text"
                                placeholder="Sök med Land eller Stad..."
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
                        <Card className='pl-3 pr-3'>
                            <Accordion type="single" collapsible>
                                <AccordionItem value="item-1">
                                    <AccordionTrigger>Filteringsalternativ</AccordionTrigger>
                                    <AccordionContent>
                                        <Accordion type="single" collapsible>
                                            <AccordionItem value="item-1">
                                                <AccordionTrigger>Typ av utlandsmyndighet</AccordionTrigger>
                                                <AccordionContent>
                                                    <CheckFilter
                                                        options={[
                                                            'Ambassad', 'Representation', 'Generalkonsulat', 'Dialoginstitutet', 'Delegation'
                                                        ]}
                                                        onChange={handleRelationFilterChange}
                                                        reset={filterReset}
                                                        storageKey="AmyndighetFilters"
                                                    />
                                                </AccordionContent>
                                            </AccordionItem>
                                        </Accordion>
                                        <Button className="bg-red-600 mt-5" onClick={handleClearFilters}>Rensa filter</Button>
                                    </AccordionContent>
                                </AccordionItem>
                            </Accordion>
                        </Card>
                    </div>
                </div>
            ) : (
                <div className='mb-5'>
                    <Card className="p-5">
                        <CardTitle className="mb-5">Filtreringsalternativ</CardTitle>
                        <CardContent className="grid grid-cols-1">
                            <div className="flex flex-row relative w-full">
                                <input
                                    type="text"
                                    placeholder="Sök med namn eller org nr..."
                                    value={searchQuery}
                                    onChange={handleSearchChange}
                                    className="border border-gray-200 rounded-md p-2 w-full mb-4 font-base font-inter text-xs"
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
                            <Accordion type="single" defaultValue="item-1" collapsible>
                                <AccordionItem value="item-1">
                                    <AccordionTrigger>Typ av utlandsmyndighet</AccordionTrigger>
                                    <AccordionContent>
                                        <CheckFilter
                                            options={[
                                                'Ambassad', 'Representation', 'Generalkonsulat', 'Dialoginstitutet', 'Delegation'
                                            ]}
                                            onChange={handleRelationFilterChange}
                                            reset={filterReset}
                                            storageKey="AmyndighetFilters"
                                        />
                                    </AccordionContent>
                                </AccordionItem>
                            </Accordion>
                        </CardContent>
                        <Button className="bg-red-600 mt-5" onClick={handleClearFilters}>Rensa filter</Button>
                    </Card>
                    <div className="flex justify-start mt-5">
                        <NavigationMenu>
                            <NavigationMenuList className="border border-bg-slate-300 rounded-md">
                                <NavigationMenuItem>
                                    <NavigationMenuTrigger>Hjälp</NavigationMenuTrigger>
                                    <NavigationMenuContent>
                                        <div className="w-96 h-68 p-7">
                                            Detta är en sökmotor för svenska utlandsmyndigheter. Du kan söka på samtliga myndigheter i Sverige och filtrera på olika kriterier. Klickar du på knappen högst upp i högra hörnet på varje myndighet kommer du till den specifika sidan för just den myndigheten.
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
                </div >
            )}
        </div>
    );
};

export default Filters;
