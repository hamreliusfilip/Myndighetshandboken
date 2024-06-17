'use client'

import React, { useState, useCallback } from 'react';
import FiltersCom from '@/components/DatabaseComponents/FiltersCompanies';
import ListCard from '@/components/DatabaseComponents/listCard';
import { companies } from '@/lib/models/company';
import { Card } from '@/components/ui/card';

interface ClientSideComponentProps {
    companies: companies[];
}

const ClientSideComponentCom: React.FC<ClientSideComponentProps> = ({ companies }) => {

    const [filteredCompanies, setFilteredCompanies] = useState<companies[]>(companies);

    const handleFiltersChange = useCallback((filteredData: companies[]) => {
        setFilteredCompanies(filteredData);
    }, []);

    return (
        <div className='mt-4 md:mt-20'>
            <div className="flex flex-col lg:flex-row m-4 gap-5 justify-center ">
                <div className='lg:basis-1/3'>
                    <FiltersCom companies={companies} onFiltersChange={handleFiltersChange} />
                </div>
                <div className="lg:basis-1/2">
                    <div className="overflow-y-auto overflow-x-hidden">
                        <Card className="h-full md:h-120 overflow-y-auto overflow-x-hidden">
                            {filteredCompanies.map((company) => (
                                <div key={company._id}>
                                    <ListCard company={company} />
                                </div>
                            ))}
                        </Card>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ClientSideComponentCom;