'use client'

import React, { useState, useCallback } from 'react';
import FiltersEmb from '@/components/DatabaseComponents/FiltersEmb';
import ListCard from '@/components/DatabaseComponents/listCardVariant';
import { AMyndigheter } from '@/lib/models/Amyndighet';
import { Card } from '@/components/ui/card';

interface AClientSideComponentProps {
    Amyndigheter: AMyndigheter[];
}

const ClientSideComponent: React.FC<AClientSideComponentProps> = ({ Amyndigheter }) => {

    const [filteredMyndigheter, setFilteredAMyndigheter] = useState<AMyndigheter[]>(Amyndigheter);

    const handleFiltersChange = useCallback((filteredData: AMyndigheter[]) => {
        setFilteredAMyndigheter(filteredData);
    }, []);

    return (
        <div className='mt-4 md:mt-20'>
            <div className="flex flex-col lg:flex-row m-4 gap-5 justify-items-center">
                <div className='lg:basis-1/2'>
                    <FiltersEmb Amyndigheter={Amyndigheter} onFiltersChange={handleFiltersChange} />
                </div>
                <div className="lg:basis-1/2">
                    <div className="overflow-y-auto overflow-x-hidden">
                        <Card className="h-full md:h-120 overflow-y-auto overflow-x-hidden w-full min-w-96 md:min-w-120">
                            {filteredMyndigheter.map((Amyndighet) => (
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




