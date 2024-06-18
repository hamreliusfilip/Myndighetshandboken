'use client'

import React, { useState, useCallback } from 'react';
import FiltersEmb from '@/components/DatabaseComponents/FiltersEmb';
import ListCard from '@/components/DatabaseComponents/listCardVariant';
import { AMyndigheter } from '@/lib/models/Amyndighet';
import { Card } from '@/components/ui/card';
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
} from "@/components/ui/select"

interface AClientSideComponentProps {
    Amyndigheter: AMyndigheter[];
}

const ClientSideComponent: React.FC<AClientSideComponentProps> = ({ Amyndigheter }) => {

    const [filteredAMyndigheter, setFilteredAMyndigheter] = useState<AMyndigheter[]>(Amyndigheter);
    const [sortingPlaceholder, setSortingPlaceholder] = useState("Alfabetisk ordning");

    const handleFiltersChange = useCallback((filteredData: AMyndigheter[]) => {
        setFilteredAMyndigheter(filteredData);
    }, []);

    function changeSorting(value: string) {

        if (value === 'alfa') {
            const normalize = (str: string) => str.replace(/[^a-zA-Z0-9]/g, '').toUpperCase();
            const sortedMyndigheter = [...Amyndigheter].sort((a, b) => {
                const aName = normalize(a.Country);
                const bName = normalize(b.Country);
                return aName.localeCompare(bName);
            });

            setFilteredAMyndigheter(sortedMyndigheter);
            setSortingPlaceholder("Alfabetisk ordning");
        }
        if (value === 'alfaReverse') {
            const normalize = (str: string) => str.replace(/[^a-zA-Z0-9]/g, '').toUpperCase();
            const sortedMyndigheter = [...Amyndigheter].sort((a, b) => {
                const aName = normalize(a.Country);
                const bName = normalize(b.Country);
                return bName.localeCompare(aName);
            });

            setFilteredAMyndigheter(sortedMyndigheter);
            setSortingPlaceholder("Omvänd alfabetisk ordning");
        }

    }

    return (
        <div className='mt-4 md:mt-20'>
            <div className="flex flex-col lg:flex-row m-4 gap-5 justify-center">
                <div className='lg:basis-1/3'>
                    <FiltersEmb Amyndigheter={Amyndigheter} onFiltersChange={handleFiltersChange} />
                </div>
                <div className="lg:basis-1/2">
                    <div className="overflow-y-auto overflow-x-hidden">
                        <Card className='p-1 mb-5 flex justify-between items-center'>
                            <div className='flex justify-start flex-row items-center ml-2'>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="black" className="mr-1 size-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m5.231 13.481L15 17.25m-4.5-15H5.625c-.621 0-1.125.504-1.125 1.125v16.5c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Zm3.75 11.625a2.625 2.625 0 1 1-5.25 0 2.625 2.625 0 0 1 5.25 0Z" />
                                </svg>
                                <p className='font-base text-black'> {filteredAMyndigheter.length} resultat</p>
                            </div>
                            <div className='basis-1/6'>
                                <Select onValueChange={changeSorting} >
                                    <SelectTrigger className="w-[180px]">
                                        <p>{sortingPlaceholder}</p>
                                    </SelectTrigger>
                                    <SelectContent>
                                        <SelectGroup>
                                            <SelectLabel>Sortering</SelectLabel>
                                            <SelectItem value="alfa">Alfabetisk ordning</SelectItem>
                                            <SelectItem value="alfaReverse">Omvänd alfabetisk ordning</SelectItem>
                                        </SelectGroup>
                                    </SelectContent>
                                </Select>
                            </div>
                        </Card>
                        <Card className="h-full md:h-120 overflow-y-auto overflow-x-hidden">
                            {filteredAMyndigheter.map((Amyndighet) => (
                                <div key={Amyndighet._id}>
                                    <ListCard Amyndighet={Amyndighet} />
                                </div>
                            ))}
                        </Card>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ClientSideComponent;