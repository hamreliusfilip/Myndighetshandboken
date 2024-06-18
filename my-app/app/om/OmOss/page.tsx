import React from "react";
import CompleteMenu from '@/components/Main/completeMenu';
import Logo from '@/components/Main/logo';
import Footer from '@/components/Main/footer';
import Link from 'next/link';
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card";

export default function Page() {
    return (
        <div>
            <Logo />
            <CompleteMenu />
            <div className="text-center mt-10">
                <h1 className="font-bold text-4xl bg-gradient-to-r from-cyan-500 to-blue-500 inline-block text-transparent bg-clip-text mt-10 mb-1 px-1 pb-1">
                    Om oss
                </h1>
                <p className="font-regular text-small text-slate-300 mb-10">Vilka ligger bakom den här hemsidan?</p>
                <div className="flex justify-center mt-10">
                    <div className="p-5">
                        <div className="flex justify-center">
                            <p className="w-full m-3 md:m-0 lg:w-2/3 text-justify">Denna hemsida har utvecklats av två masterstudenter på programmet Civilingenjör Medieteknik vid Linköpings universitet. Syftet med hemsidan är att, utifrån vårt tekniska och generella samhällsintresse, bidra med en tydlig överblick över hur den svenska staten fungerar samt att tillhandahålla intressant fakta och statistik på ett och samma ställe. Den här typen av data är svår att få tag på och ligger ofta djupt på statliga hemsidor, vilket kräver ett flertal källor för att få en sammanhängande bild. Denna hemsida erbjuder all denna information på ett och samma ställe, presenterat på ett intuitivt sätt. Hemsidan är inte officiell och har ingen koppling till regeringen eller någon annan myndighet. All data är samlad på egen hand – liksom hemsidan och verktygen är utvecklade av oss själva.</p>
                        </div>

                        <Card className="mt-10 p-10 w-full md:w-1/3 mx-auto"> 
                        <div className="flex justify-center">
                            <p>
                                <span className="font-base text-slate-400">Ansvarig utgivare och kontaktperson: Filip Hamrelius</span>

                                <br></br><br></br>

                                <span className="font-base text-slate-400">Ansvarig för databaser & Informationen: Filip Hamrelius</span>

                                <br></br><br></br>

                                <span className="font-base text-slate-400">Utveckling och Design: Filip Hamrelius & Anna Granberg</span>

                            </p>
                        </div>
                        <div className="mt-10">
                            <Link href="https://www.linkedin.com/in/annagranberg00/" target="_blank">
                                <Button variant="outline" className='bg-white text-black m-1'>Anna Granberg</Button>
                            </Link>
                            <Link href="https://www.linkedin.com/in/filip-hamrelius/" target="_blank">
                                <Button variant="outline" className='bg-white text-black m-1'>Filip Hamrelius</Button>
                            </Link>
                        </div>
                        </Card> 
                    </div>
                </div>
            </div >
            <Footer />
        </div >
    );
}