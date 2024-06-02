import React from 'react';
import { Card, CardDescription, CardTitle } from '../ui/card';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import Link from 'next/link';

type ListCardProps = {
    myndighet?: any;
    company?: any;
};

export default function ListCard({ myndighet, company }: ListCardProps) {
    const [isOpen, setIsOpen] = React.useState(false);

    const item = myndighet || company;
    const type = myndighet ? 'myndighet' : 'company';
    const linkPath = type === 'myndighet' ? `/myndighet/${item._id}` : `/company/${item._id}`;

    return (
        <Card className='m-4 p-5'>
            <Collapsible open={isOpen} onOpenChange={setIsOpen}>
                <div className='grid grid-cols-2' style={{ gridTemplateColumns: '3fr 1fr' }}>
                    <div className='flex-1'>
                        <CardTitle>{item.name}</CardTitle>
                        <CardDescription className='mt-2'>{item.created}</CardDescription>
                        {isOpen ? (
                            <CollapsibleContent className="space-y-2">
                                <p className='mt-2'>{item.info}</p>
                            </CollapsibleContent>
                        ) : (
                            <p className='mt-2'>{item.info.substring(0, 50)}...</p>
                        )}
                    </div>

                    <div className='grid grid-cols-1 gap-3 content-start justify-self-end flex-none'>
                        <Link href={linkPath}>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6 ">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 9V5.25A2.25 2.25 0 0 0 13.5 3h-6a2.25 2.25 0 0 0-2.25 2.25v13.5A2.25 2.25 0 0 0 7.5 21h6a2.25 2.25 0 0 0 2.25-2.25V15m3 0 3-3m0 0-3-3m3 3H9" />
                            </svg>
                        </Link>
                    </div>
                </div>
                <CollapsibleTrigger asChild className='w-full flex items-center'>
                    {isOpen ? (
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6  mt-5 cursor-pointer">
                            <path stroke-linecap="round" stroke-linejoin="round" d="m4.5 15.75 7.5-7.5 7.5 7.5" />
                        </svg>
                    ) : (
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6  mt-5 cursor-pointer">
                            <path stroke-linecap="round" stroke-linejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                        </svg>
                    )}
                </CollapsibleTrigger>
            </Collapsible>
        </Card>
    );
}
