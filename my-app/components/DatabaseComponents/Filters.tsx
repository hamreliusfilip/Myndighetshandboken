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

import { Myndigheter } from '@/lib/models/myndighet';
import CheckFilter from '@/components/DatabaseComponents/CheckFilter';


interface FiltersProps {
    myndigheter: Myndigheter[];
    onFiltersChange: (filteredData: Myndigheter[]) => void;
}

const Filters: React.FC<FiltersProps> = ({ myndigheter, onFiltersChange }) => {

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
            const storedFilters = localStorage.getItem('myndighetFilters');
            if (storedFilters) {
                return JSON.parse(storedFilters).searchQuery;
            }
            return '';
        }
    });

    const [ruleFilters, setRuleFilters] = useState(() => {
        if (typeof window !== 'undefined') {
            const storedFilters = localStorage.getItem('myndighetFilters');
            if (storedFilters) {
                return JSON.parse(storedFilters).ruleFilters;
            }
            return {};
        }
    });

    const [relationFilters, setRelationFilters] = useState(() => {
        if (typeof window !== 'undefined') {
            const storedFilters = localStorage.getItem('myndighetFilters');
            if (storedFilters) {
                return JSON.parse(storedFilters).relationFilters;
            }
            return {};
        }
    });

    const [slider1Value, setSlider1Value] = useState(() => {
        if (typeof window !== 'undefined') {
            const storedFilters = localStorage.getItem('myndighetFilters');
            if (storedFilters) {
                return JSON.parse(storedFilters).slider1Value;
            }
            return '1200';
        }
    });

    const [slider2Value, setSlider2Value] = useState(() => {
        if (typeof window !== 'undefined') {
            const storedFilters = localStorage.getItem('myndighetFilters');
            if (storedFilters) {
                return JSON.parse(storedFilters).slider2Value;
            }
            return '2024';
        }
    });

    if (typeof window !== 'undefined') {

        useEffect(() => {
            const storedFilters = localStorage.getItem('myndighetFilters');
            if (storedFilters) {
                const parsedFilters = JSON.parse(storedFilters);
                setRuleFilters(parsedFilters.ruleFilters);
                setRelationFilters(parsedFilters.relationFilters);
                setSearchQuery(parsedFilters.searchQuery);
                setSlider1Value(parsedFilters.slider1Value);
                setSlider2Value(parsedFilters.slider2Value);
            }
        }, []);

        useEffect(() => {
            const filtersToStore = JSON.stringify({
                ruleFilters,
                relationFilters,
                searchQuery,
                slider1Value,
                slider2Value
            });
            localStorage.setItem('myndighetFilters', filtersToStore);
        }, [ruleFilters, relationFilters, searchQuery, slider1Value, slider2Value]);

    }

    useEffect(() => {
        const filteredMyndigheter = myndigheter.filter(myndighet => {
            const nameMatch = myndighet.name.toLowerCase().includes(searchQuery.toLowerCase());
            const orgMatch = myndighet.org.toLowerCase().includes(searchQuery.toLowerCase());
            const minValue = parseInt(slider1Value);
            const maxValue = parseInt(slider2Value);
            const createdMatch = myndighet.created >= minValue && myndighet.created <= maxValue;
            const relationMatch = Object.entries(relationFilters).every(([relation, checked]) => !checked || (checked && relationFilters[myndighet.relation]));
            const ruleMatch = Object.entries(ruleFilters).every(([rule, checked]) => !checked || (checked && ruleFilters[myndighet.rule]));

            return (nameMatch || orgMatch) && ruleMatch && relationMatch && createdMatch;
        });

        onFiltersChange(filteredMyndigheter);
    }, [myndigheter, searchQuery, slider1Value, slider2Value, relationFilters, ruleFilters, onFiltersChange]);

    const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSearchQuery(event.target.value);
    };

    const handleRelationFilterChange = (filters: Record<string, boolean>) => {
        setRelationFilters(filters);
    };

    const handleRuleFilterChange = (filters: Record<string, boolean>) => {
        setRuleFilters(filters);
    };

    const handleInput1Change = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSlider1Value(event.target.value);
    };

    const handleInput2Change = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSlider2Value(event.target.value);
    };

    const handleClearFilters = () => {
        setRuleFilters({});
        setRelationFilters({});
        setSearchQuery('');
        setSlider1Value('1200');
        setSlider2Value('2024');
    };

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
                        <Card className='pl-3 pr-3'>
                            <Accordion type="single" collapsible>
                                <AccordionItem value="item-1">
                                    <AccordionTrigger>Filteringsalternativ</AccordionTrigger>
                                    <AccordionContent>
                                        <Accordion type="single" collapsible>
                                            <AccordionItem value="item-1">
                                                <AccordionTrigger>Departement</AccordionTrigger>
                                                <AccordionContent>
                                                    <CheckFilter
                                                        options={[
                                                            'Arbetsmarknadsdepartementet', 'Finansdepartementet', 'Försvarsdepartementet', 'Justitiedepartementet', 'Klimat- och näringslivsdepartementet', 'Kulturdepartementet', 'Landsbygds- och infrastrukturdepartementet', 'Socialdepartementet', 'Statsrådsberedningen', 'Utbildningsdepartementet', 'Utrikesdepartementet'
                                                        ]}
                                                        onChange={handleRelationFilterChange}
                                                        reset={filterReset}
                                                        storageKey="myndighetFilters"
                                                    />
                                                </AccordionContent>
                                            </AccordionItem>
                                        </Accordion>
                                        <Accordion type="single" collapsible>
                                            <AccordionItem value="item-2">
                                                <AccordionTrigger>Styre</AccordionTrigger>
                                                <AccordionContent>
                                                    <CheckFilter
                                                        options={[
                                                            'Styrelse', 'Enrådighet', 'SBA', 'Nämnd', 'Kommitté', 'Universitet eller högskola', 'Regeringskansliet', 'Arbetsgivarkollegium', 'Domstol', 'AP-Fond', 'Hyresnämnd', 'Lagråd', 'Övrigt'
                                                        ]}
                                                        onChange={handleRuleFilterChange}
                                                        reset={filterReset}
                                                        storageKey="myndighetFilters"
                                                    />
                                                </AccordionContent>
                                            </AccordionItem>
                                        </Accordion>
                                        <Accordion type="single" collapsible>
                                            <AccordionItem value="item-2">
                                                <AccordionTrigger>Årtal</AccordionTrigger>
                                                <AccordionContent>
                                                    <div className="flex items-center mt-3">
                                                        <div className="flex items-center text-sm font-semibold">
                                                            <p className="mr-4">Från</p>
                                                            <input
                                                                type="number"
                                                                min="1200"
                                                                max="2024"
                                                                value={slider1Value}
                                                                onChange={(e) => setSlider1Value(Number(e.target.value))}
                                                                className="border border-bg-slate-300 rounded p-1"
                                                            />
                                                        </div>
                                                        <div className="flex items-center ml-7 text-sm font-semibold">
                                                            <p className="mr-4 font-semibold text-sm">Till&nbsp;&nbsp;</p>
                                                            <input
                                                                type="number"
                                                                min="1200"
                                                                max="2024"
                                                                value={slider2Value}
                                                                onChange={(e) => setSlider2Value(Number(e.target.value))}
                                                                className="border border-bg-slate-300 rounded p-1"
                                                            />
                                                        </div>
                                                    </div>
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
                                    <AccordionTrigger>Departement</AccordionTrigger>
                                    <AccordionContent>
                                        <CheckFilter
                                            options={[
                                                'Arbetsmarknadsdepartementet', 'Finansdepartementet', 'Försvarsdepartementet', 'Justitiedepartementet', 'Klimat- och näringslivsdepartementet', 'Kulturdepartementet', 'Landsbygds- och infrastrukturdepartementet', 'Socialdepartementet', 'Statsrådsberedningen', 'Utbildningsdepartementet', 'Utrikesdepartementet'
                                            ]}
                                            onChange={handleRelationFilterChange}
                                            reset={filterReset}
                                            storageKey="myndighetFilters"
                                        />
                                    </AccordionContent>
                                </AccordionItem>
                            </Accordion>
                            <Accordion type="single" defaultValue="item-2" collapsible>
                                <AccordionItem value="item-2">
                                    <AccordionTrigger>Styre</AccordionTrigger>
                                    <AccordionContent>
                                        <CheckFilter
                                            options={[
                                                'Styrelse', 'Enrådighet', 'SBA', 'Nämnd', 'Kommitté', 'Universitet eller högskola', 'Regeringskansliet', 'Arbetsgivarkollegium', 'Domstol', 'AP-Fond', 'Hyresnämnd', 'Lagråd', 'Övrigt'
                                            ]}
                                            onChange={handleRuleFilterChange}
                                            reset={filterReset}
                                            storageKey="myndighetFilters"
                                        />
                                    </AccordionContent>
                                </AccordionItem>
                            </Accordion>
                            <Accordion type="single" defaultValue="item-3" collapsible>
                                <AccordionItem value="item-3">
                                    <AccordionTrigger>Årtal</AccordionTrigger>
                                    <AccordionContent>
                                        <div className="flex items-center mt-3">
                                            <div className="flex items-center text-sm font-semibold">
                                                <p className="mr-4">Från</p>
                                                <input
                                                    type="number"
                                                    min="1200"
                                                    max="2024"
                                                    value={slider1Value}
                                                    onChange={handleInput1Change}
                                                    className="border border-bg-slate-300 rounded p-1 w-20"
                                                />
                                            </div>
                                            <div className="flex items-center ml-7 text-sm font-semibold">
                                                <p className="mr-4 font-semibold text-sm">Till&nbsp;&nbsp;</p>
                                                <input
                                                    type="number"
                                                    min="1200"
                                                    max="2024"
                                                    value={slider2Value}
                                                    onChange={handleInput2Change}
                                                    className="border border-bg-slate-300 rounded p-1 w-20"
                                                />
                                            </div>
                                        </div>
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
                                            Detta är en sökmotor för svenska myndigheter. Du kan söka på samtliga myndigheter i Sverige och filtrera på olika kriterier. Det finns tio datapunkter för varje myndighet, till exempel generell fakta, mailadress och logotyp. Använd Filtreringsalternativen till vänster eller sökrutan för att hitta en specifik myndighet Klickar du på knappen högst upp i högra hörnet på varje myndighet kommer du till den specifika sidan för just den myndigheten.
                                        </div>
                                    </NavigationMenuContent>
                                </NavigationMenuItem>
                                <NavigationMenuItem>
                                    <Link href="myndighet/listaMyndighet" legacyBehavior passHref>
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
