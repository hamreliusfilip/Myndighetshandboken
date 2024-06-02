'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { Card, CardContent, CardTitle } from '@/components/ui/card';
import { navigationMenuTriggerStyle } from "@/components/ui/navigation-menu";
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
} from "@/components/ui/select"
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
import CompleteMenu from '../../components/Main/completeMenu';
import Logo from '../../components/Main/logo';
import Footer from '../../components/Main/footer';
import ListCard from '@/components/DatabaseComponents/listCard';

import CheckFilter from '@/components/DatabaseComponents/CheckFilter';

export default function Page() {

    const [loading, setLoading] = useState(true);
    const [myndigheter, setMyndigheter] = useState<Myndigheter[]>([]);
    const [filterReset, setFilterReset] = useState(false);
    const [filteredMyndigheter, setFilteredMyndigheter] = useState<Myndigheter[]>([]);
    const [sortingPlaceholder, setSortingPlaceholder] = useState("Alfabetisk ordning");

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
            return '1477';
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

    const fetchMyndigheter = async () => {
        
        try {
            const res = await fetch("http://localhost:3000/api/myndigheter?fields=name,_id,relation,created,rule,info,org", {
                method: "GET",
            });
            const data = await res.json();
            return data.myndighet;
        } catch (error) {
            console.error("Error fetching myndigheter:", error);
            return [];
        }
    }

    useEffect(() => {

        let storedSort: string | null;

        if (typeof window !== 'undefined') {
            storedSort = localStorage.getItem('mynSort');
        }

        fetchMyndigheter().then((myndigheter) => {
            setLoading(false);

            if (storedSort === 'yearDec') {
                setMyndigheter([...myndigheter].sort((a, b) => b.created.toString().localeCompare(a.created.toString())));
                localStorage.setItem('mynSort', 'yearDec');
                setSortingPlaceholder("Nyast till äldst");
            }
            else if (storedSort === 'yearInc') {
                setMyndigheter([...myndigheter].sort((a, b) => a.created.toString().localeCompare(b.created.toString())));
                localStorage.setItem('mynSort', 'yearInc');
                setSortingPlaceholder("Äldst till nyast");
            } else {
                const normalize = (str: string) => str.replace(/[^a-zA-Z0-9]/g, '').toUpperCase();
                const sortedMyndigheter = [...myndigheter].sort((a, b) => {
                    const aName = normalize(a.name);
                    const bName = normalize(b.name);
                    return aName.localeCompare(bName);
                });
                
                setMyndigheter(sortedMyndigheter);
                localStorage.setItem('compSort', 'alfa');
                setSortingPlaceholder("Alfabetisk ordning");
            }

        }).catch((error) => {
            console.error("Error setting myndigheter:", error);
        });
    }, []);

    const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSearchQuery(event.target.value);
    }

    const handleRelationFilterChange = (filters: Record<string, boolean>) => {
        setRelationFilters(filters);

    };

    const handleRuleFilterChange = (filters: Record<string, boolean>) => {
        setRuleFilters(filters);
    };

    useEffect(() => {
        const filteredMyndigheter = myndigheter.filter(myndighet => {
            
            const nameMatch = myndighet.name.toLowerCase().includes(searchQuery.toLowerCase());
            const orgMatch = myndighet.org.toLowerCase().includes(searchQuery.toLowerCase());

            const minValue = parseInt(slider1Value);
            const maxValue = parseInt(slider2Value);
            const createdMatch = myndighet.created >= minValue && myndighet.created <= maxValue;

            const relationMatch = Object.entries(relationFilters).every(([relation, checked]) => !checked || checked && relationFilters[myndighet.relation]);

            const ruleMatch = Object.entries(ruleFilters).every(([rule, checked]) => !checked || checked && ruleFilters[myndighet.rule]);

            return (nameMatch || orgMatch) && ruleMatch && relationMatch && createdMatch;
        });
        setFilteredMyndigheter(filteredMyndigheter);
    }, [myndigheter, searchQuery, slider1Value, slider2Value, relationFilters, ruleFilters]);

    const handleClearFilters = () => {
        setRuleFilters({});
        setRelationFilters({});
        setSearchQuery('');
        setFilterReset(true);
        setSlider1Value('1477');
        setSlider2Value('2024');
        localStorage.setItem('mynSort', 'alfa');
        setMyndigheter([...myndigheter].sort((a, b) => a.name.localeCompare(b.name)));
        setSortingPlaceholder("Alfabetisk ordning");

        setTimeout(() => {
            setFilterReset(false);
        }, 0);
    };

    const handleInput1Change = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSlider1Value(event.target.value);
    };

    const handleInput2Change = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSlider2Value(event.target.value);
    };

    const cards = [];

    for (let i = 0; i < 7; i++) {
        cards.push(
            <Card key={i} className='m-4 p-5'>
                <div className="animate-pulse">
                    <div className="h-6 bg-gray-200 rounded mb-2 h-16 mt-1"></div>
                    <div className="h-4 bg-gray-200 rounded mb-2 h-12 mt-5"></div>
                    <div className="h-4 bg-gray-200 rounded mb-2 h-12 mt-5"></div>
                </div>
            </Card>
        );
    }

    function changeSorting(value: string) {

        if (value === 'alfa') {
            const normalize = (str: string) => str.replace(/[^a-zA-Z0-9]/g, '').toUpperCase();
                const sortedMyndigheter = [...myndigheter].sort((a, b) => {
                    const aName = normalize(a.name);
                    const bName = normalize(b.name);
                    return aName.localeCompare(bName);
                });
                
                setMyndigheter(sortedMyndigheter);
                localStorage.setItem('compSort', 'alfa');
                setSortingPlaceholder("Alfabetisk ordning");
        }
        if (value === 'yearDec') {
            setMyndigheter([...myndigheter].sort((a, b) => b.created.toString().localeCompare(a.created.toString())));
            localStorage.setItem('mynSort', 'yearDec');
            setSortingPlaceholder("Nyast till äldst");
        }
        else if (value === 'yearInc') {
            setMyndigheter([...myndigheter].sort((a, b) => a.created.toString().localeCompare(b.created.toString())));
            localStorage.setItem('mynSort', 'yearInc');
            setSortingPlaceholder("Äldst till nyast");
        }
    }

    return (
        <>
            <div>
                <Logo />
                <CompleteMenu />
                <div className="text-center">
                    <h1 className="font-bold text-4xl bg-gradient-to-r from-cyan-500 to-blue-500 inline-block text-transparent bg-clip-text mt-10 mb-1 px-1 pb-1"> Myndigheter </h1>
                    <p className="font-semibold text-small text-slate-300 mb-10">Alla svenska myndigheter</p>
                </div>
            </div>
            <div className='flex flex-column m-4 gap-5 justify-items-center h-30'>
                <div className='basis-1/3 ml-10'>
                    <Card className='p-5'>
                        <CardTitle className='mb-5'>Filtreringsalternativ</CardTitle>
                        <CardContent className='grid grid-cols-1'>
                            <Accordion type="single" defaultValue='item-1' collapsible>
                                <AccordionItem value="item-1">
                                    <AccordionTrigger>Departement</AccordionTrigger>
                                    <AccordionContent>
                                        <CheckFilter
                                            options={['Arbetsmarknadsdepartementet', 'Finansdepartementet', 'Försvarsdepartementet', 'Justitiedepartementet', 'Klimat- och näringslivsdepartementet', 'Kulturdepartementet', 'Landsbygds- och infrastrukturdepartementet', 'Socialdepartementet', 'Statsrådsberedningen', 'Utbildningsdepartementet', 'Utrikesdepartementet']}
                                            onChange={handleRelationFilterChange}
                                            reset={filterReset}
                                            storageKey="myndighetFilters"
                                        />
                                    </AccordionContent>
                                </AccordionItem>
                            </Accordion>
                            <Accordion type="single" defaultValue='item-2' collapsible>
                                <AccordionItem value="item-2">
                                    <AccordionTrigger>Styre</AccordionTrigger>
                                    <AccordionContent>
                                        <CheckFilter
                                            options={['Styrelse', 'Enrådighet', 'SBA', 'Nämnd', 'Kommitté', 'Universitet eller högskola', 'Regeringskansliet', 'Arbetsgivarkollegium', 'Domstol', 'AP-Fond', 'Hyresnämnd', 'Lagråd', 'Övrigt']}
                                            onChange={handleRuleFilterChange}
                                            reset={filterReset}
                                            storageKey="myndighetFilters"
                                        />
                                    </AccordionContent>
                                </AccordionItem>
                            </Accordion>
                            <Accordion type="single" defaultValue='item-3' collapsible>
                                <AccordionItem value="item-3">
                                    <AccordionTrigger>Årtal</AccordionTrigger>
                                    <AccordionContent>
                                        <div className='flex items-center mt-3'>
                                            <div className='flex items-center text-sm font-semibold'>
                                                <p className='mr-4'>Från</p>
                                                <input
                                                    type="number"
                                                    min="1477"
                                                    max="2024"
                                                    value={slider1Value}
                                                    onChange={handleInput1Change}
                                                    className=' border border-bg-slate-300 rounded p-1'
                                                />
                                            </div>
                                            <div className='flex items-center ml-7 text-sm font-semibold'>
                                                <p className='mr-4 font-semibold text-sm'>Till&nbsp;&nbsp;</p>
                                                <input
                                                    type="number"
                                                    min="1477"
                                                    max="2024"
                                                    value={slider2Value}
                                                    onChange={handleInput2Change}
                                                    className=' border border-bg-slate-300 rounded p-1'
                                                />
                                            </div>
                                        </div>
                                    </AccordionContent>
                                </AccordionItem>
                            </Accordion>
                        </CardContent>
                        <Button className='bg-red-600 mt-5' onClick={handleClearFilters}>Rensa filter</Button>
                    </Card>
                    <div className='flex justify-start mt-5'>
                        <NavigationMenu>
                            <NavigationMenuList className="border border-bg-slate-300 rounded-md">
                                <NavigationMenuItem>
                                    <NavigationMenuTrigger>Hjälp</NavigationMenuTrigger>
                                    <NavigationMenuContent>
                                        <div className='w-96 h-68 p-7'>
                                            Detta är en sökmotor för svenska myndigheter. Du kan söka på samtliga myndigheter i Sverige och filtrera på olika kriterier. Det finns tio datapunkter för varje myndighet, till exempel generell fakta, mailadress och logotyp. Använd Filtreringsalternativen till vänster eller sökrutan för att hitta en specifik myndighet Klickar du på knappen högst upp i högra hörnet på varje myndighet kommer du till den specifka sidan för just den myndigheten.
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
                </div>
                <div className='basis-1/2'>
                    <input
                        type="text"
                        placeholder="Sök med namn eller organisationsnummer..."
                        value={searchQuery}
                        onChange={handleSearchChange}
                        className="border border-gray-200 rounded-md p-2 w-full mb-4 font-light font-sans text-sm"
                    />
                    <p className='font-slate-300 text-sm font-light'>Antal hittade myndigheter: {filteredMyndigheter.length} st</p>

                    {loading == true ? (
                        <Card className="h-120 overflow-y-auto mt-4">
                            <>{cards}</>
                        </Card>
                    ) : (
                        <div className='overflow-y-auto mt-4'>
                            <Card className="h-120 overflow-y-auto">
                                {filteredMyndigheter.map((myndighet: any) => (
                                    <div key={myndighet._id}>
                                        <ListCard myndighet={myndighet} />
                                    </div>
                                ))}
                            </Card>
                        </div>)}
                </div>
                <div className='basis-1/6 pr-10'>
                    <div className=''>
                        <Select onValueChange={changeSorting} >
                            <SelectTrigger className="w-[180px]">
                                <p>{sortingPlaceholder}</p>
                            </SelectTrigger>
                            <SelectContent>
                                <SelectGroup>
                                    <SelectLabel>Sortering</SelectLabel>
                                    <SelectItem value="alfa">Alfabetisk ordning</SelectItem>
                                    <SelectItem value="yearDec">Nyast till äldst</SelectItem>
                                    <SelectItem value="yearInc">Äldst till nyast</SelectItem>
                                </SelectGroup>
                            </SelectContent>
                        </Select>
                    </div>
                </div>
            </div >
            <Footer />
        </>
    );
}


