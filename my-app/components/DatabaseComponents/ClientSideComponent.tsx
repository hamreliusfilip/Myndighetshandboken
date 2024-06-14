'use client'

import React, { useState, useCallback } from 'react';
import Filters from '@/components/DatabaseComponents/Filters';
import ListCard from '@/components/DatabaseComponents/listCard';
import { Myndigheter } from '@/lib/models/myndighet';
import { Card } from '@/components/ui/card';

interface ClientSideComponentProps {
    myndigheter: Myndigheter[];
}

const ClientSideComponent: React.FC<ClientSideComponentProps> = ({ myndigheter }) => {

    const [filteredMyndigheter, setFilteredMyndigheter] = useState<Myndigheter[]>(myndigheter);

    const handleFiltersChange = useCallback((filteredData: Myndigheter[]) => {
        setFilteredMyndigheter(filteredData);
    }, []);

    return (
        <div className='mt-4 md:mt-20'>
            <div className="flex flex-col lg:flex-row m-4 gap-5 justify-center">
                <div className='lg:basis-1/3'>
                    <Filters myndigheter={myndigheter} onFiltersChange={handleFiltersChange} />
                </div>
                <div className="lg:basis-1/2">
                    <div className="overflow-y-auto overflow-x-hidden">
                        <Card className="h-full md:h-120 overflow-y-auto overflow-x-hidden w-full min-w-96 md:min-w-120">
                            {filteredMyndigheter.map((myndighet) => (
                                <div key={myndighet._id}>
                                    <ListCard myndighet={myndighet} />
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