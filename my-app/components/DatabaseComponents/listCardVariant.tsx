import React from 'react';
import { Card, CardDescription, CardTitle } from '../ui/card';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import Link from 'next/link';

type ListCardProps = {
    Amyndighet: any;
};

export default function ListCard({ Amyndighet }: ListCardProps) {
    const [isOpen, setIsOpen] = React.useState(false);

    const item = Amyndighet;
    const linkPath = `/abroadMyndighet/${item._id}`;

    return (
        <Card className='m-4 p-5'>
            <Collapsible open={isOpen} onOpenChange={setIsOpen}>
                <div className='grid grid-cols-2' style={{ gridTemplateColumns: '3fr 1fr' }}>
                    <div className='flex-1'>
                        <CardTitle>{item.Country}</CardTitle>
                        <CardDescription className='mt-2'>{item.City}</CardDescription>
                    </div>

                    <div className='grid grid-cols-1 gap-3 content-start justify-self-end flex-none'>
                        <Link href={linkPath}>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6 ">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 9V5.25A2.25 2.25 0 0 0 13.5 3h-6a2.25 2.25 0 0 0-2.25 2.25v13.5A2.25 2.25 0 0 0 7.5 21h6a2.25 2.25 0 0 0 2.25-2.25V15m3 0 3-3m0 0-3-3m3 3H9" />
                            </svg>
                        </Link>
                    </div>
                </div>
            </Collapsible>
        </Card>
    );
}
