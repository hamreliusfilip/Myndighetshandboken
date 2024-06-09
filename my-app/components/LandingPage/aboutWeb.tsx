import React from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

export default function AboutWeb() {

    return (
        <div className='mt-20 mb-20 bg-black'>
            <div className='flex flex-col justify-center items-center'>
                <div className='pt-36 pb-36 w-1/2'>
                    <h1 className='text-left font-bold sm:text-3xl md:text-4xl text-white'>
                        Vad är myndighetshandboken?
                    </h1>
                    <p className='text-white mt-10'>Upptäck Myndighetshandboken. En omfattande encyklopedi som utforskar den svenska staten i sin helhet. Genom att kombinera tre unika och egenkonstruerade databaser har vi skapat den mest sofistikerade sökmotorn för svenska myndigheter, statliga företag och utlandsmyndigheter.<br></br>Denna kraftfulla verktygslåda ger dig inte bara omedelbar tillgång till snabbfakta om politik, departement, partier, internationella relationer och ministrar, utan erbjuder också en omfattande samling statistik från flera olika myndigheter, presenterad på ett intuitivt och effektivt sätt.<br></br>Dyk djupt in i den svenska byråkratin eller använd verktyget när du letar efter information som inte finns tillgänglig hos vanliga källor som SCB, Statskontoret eller regeringskansliet. Eller varför inte använda det för att uppdatera och fördjupa din förståelse av det svenska systemet?<br></br>För den tekniskt intresserade är Myndighetshandboken byggd med NEXT 14 och MongoDB Atlas som teknisk stack. Vi har också integrerat verktyg som Tailwind, Moongoose, Shadcn, chart.js och React Flow för att skapa en användarupplevelse av högsta kvalitet.
                    </p>
                </div>
            </div>
        </div>
    );
}
