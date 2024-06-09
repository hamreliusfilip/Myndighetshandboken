import React from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

export default function AboutMobile() {
    return (
        <div className='mt-10 mb-10 bg-white'>
            <div className='flex flex-col justify-center items-center'>
                <div className='pt-10 pb-10 w-full'>
                    <p className='pl-5 font-bold text-2xl text-black'>
                        Vad är Myndighetshandboken?
                    </p>
                    <p className='text-black mt-5 pr-5 pl-5'>Upptäck Myndighetshandboken. En omfattande encyklopedi som utforskar den svenska staten i sin helhet. Genom att kombinera tre unika och egenkonstruerade databaser har vi skapat den mest sofistikerade sökmotorn för svenska myndigheter, statliga företag och utlandsmyndigheter.<br /><br />Denna kraftfulla verktygslåda ger dig inte bara omedelbar tillgång till snabbfakta om politik, departement, partier, internationella relationer och ministrar, utan erbjuder också en omfattande samling statistik från flera olika myndigheter, presenterad på ett intuitivt och effektivt sätt.<br /><br />Dyk djupt in i den svenska byråkratin eller använd verktyget när du letar efter information som inte finns tillgänglig hos vanliga källor som SCB, Statskontoret eller regeringskansliet. Eller varför inte använda det för att uppdatera och fördjupa din förståelse av det svenska systemet?</p>
                </div>
            </div>
        </div>
    );
}
