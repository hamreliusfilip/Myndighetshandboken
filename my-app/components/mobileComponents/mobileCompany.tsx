import React from 'react';
import { Card } from '@/components/ui/card';
import CheckFilter from '@/components/DatabaseComponents/CheckFilter';
import ListCard from '../DatabaseComponents/listCard';
import { Button } from '@/components/ui/button';
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger
} from "@/components/ui/accordion"

const MobileCompany = ({
    searchQuery,
    setSearchQuery,
    slider1Value,
    setSlider1Value,
    slider2Value,
    setSlider2Value,
    handleRuleFilterChange,
    handleClearFilters,
    filteredCompanies,
    loading,
    cards,
    changeSorting,
    sortingPlaceholder,
    filterReset
}: {
    searchQuery: string,
    setSearchQuery: (query: string) => void,
    slider1Value: number,
    setSlider1Value: (value: number) => void,
    slider2Value: number,
    setSlider2Value: (value: number) => void,
    handleRuleFilterChange: (filters: Record<string, boolean>) => void,
    handleClearFilters: () => void,
    filteredCompanies: any[],
    loading: boolean,
    cards: JSX.Element[],
    changeSorting: (value: string) => void,
    sortingPlaceholder: string,
    filterReset: boolean
}) => (
    <div className='overflow-x-hidden'>
        <div className="flex flex-col m-5 gap-0 justify-items-center">
            <div className='text-center'>
                <h1 className="font-bold text-4xl bg-gradient-to-r from-cyan-500 to-blue-500 inline-block text-transparent bg-clip-text mt-10 mb-1 px-1 pb-1">
                    Statliga företag
                </h1>
                <p className="font-semibold text-small text-slate-300 mb-10">Alla svenska statliga eller delvis statliga företag</p>
            </div>
            <div className="relative w-full">
                <input
                    type="text"
                    placeholder="Sök med namn eller organisationsnummer..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="border border-gray-200 rounded-md p-2 pr-10 w-full mb-4 font-light font-sans text-sm"
                />
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="grey"
                    className="absolute right-0 mr-2 top-0 mt-5 transform -translate-y-1/2 size-6"
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
                                <AccordionItem value="item-2">
                                    <AccordionTrigger>Statligt ägande</AccordionTrigger>
                                    <AccordionContent>
                                        <CheckFilter
                                           options={['Helt statligt ägt', 'Delvis statligt ägt']}
                                            onChange={handleRuleFilterChange}
                                            reset={filterReset}
                                            storageKey="compFilters"
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
            <div className='flex justify-between items-center mt-3'>
                <div className='w-1/2 h-10'>
                    <select onChange={(e) => changeSorting(e.target.value)} className="border border-gray-200 rounded-md font-inter font-light text-black bg-white h-full">
                        <option value="alfa">Alfabetisk ordning</option>
                        <option value="yearDec">Nyast till äldst</option>
                        <option value="yearInc">Äldst till nyast</option>
                    </select>
                </div>
                <div className='w-1/2 flex justify-end'>
                    <p className="font-slate-300 font-light">Resultat: {filteredCompanies.length} st</p>
                </div>
            </div>


            {loading ? (
                <Card className="h-120 overflow-y-auto mt-4">
                    <>{cards}</>
                </Card>
            ) : (
                <div className="overflow-y-auto overflow-x-hidden mt-4">
                    <Card className="h-120 overflow-y-auto overflow-x-hidden">
                        {filteredCompanies.map((company: any) => (
                            <div key={company._id}>
                                <ListCard company={company} />
                            </div>
                        ))}
                    </Card>
                </div>

            )}
        </div>
    </div>
);

export default MobileCompany;
