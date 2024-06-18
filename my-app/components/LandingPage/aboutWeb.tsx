import React from 'react';
import { motion } from "framer-motion"

export default function AboutWeb() {

    return (

        <div className='mt-96 bg-neutral-900 pt-42 pb-42 rounded-3xl mr-20 ml-20 flex justify-center items-center flex-col'>
            <div className='flex flex-col justify-center items-center'>
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{
                        once: true,
                        amount: 0.7
                    }}
                >
                    <div className='p-48 '>
                        <h1 className='text-left font-bold text-2xl md:text-5xl text-white'>
                            Vad är myndighetshandboken?
                        </h1>
                        <p className='font-base mt-10 text-xl text-slate-500'>Upptäck <span className='text-white font-base'>Myndighetshandboken</span>. En omfattande <span className='text-white font-base'>encyklopedi</span> som utforskar den svenska staten i sin helhet. Genom att kombinera <span className='text-slate-100 font-base'>tre unika och egenkonstruerade databaser</span> har vi skapat den mest sofistikerade sökmotorn för svenska myndigheter, statliga företag och utlandsmyndigheter.<br></br><br></br><span className='text-white font-base'>Denna kraftfulla verktygslåda ger dig inte bara omedelbar tillgång till snabbfakta om politik, departement, partier, internationella relationer och ministrar, utan erbjuder också en omfattande samling statistik</span> från flera olika myndigheter, presenterad på ett intuitivt och effektivt sätt.<br></br><br></br>Dyk djupt in i den svenska byråkratin eller använd verktyget när du letar efter information som inte finns tillgänglig hos vanliga källor som  <span className='text-white font-base'>SCB, Statskontoret eller regeringskansliet</span>. Eller varför inte använda det för att uppdatera och fördjupa din förståelse av det svenska systemet?<br></br><br></br>För den tekniskt intresserade är Myndighetshandboken byggd med NEXT 14 och MongoDB Atlas som teknisk stack. Vi har också integrerat verktyg som Tailwind, Moongoose, Shadcn, chart.js och React Flow för att skapa en användarupplevelse av högsta kvalitet.
                        </p>
                    </div>
                </motion.div>
            </div>
        </div>

    );
}
