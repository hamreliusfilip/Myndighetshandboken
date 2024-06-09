import React from "react";
import CompleteMenu from '@/components/Main/completeMenu';
import Logo from '@/components/Main/logo';
import Footer from '@/components/Main/footer';
import Link from 'next/link';
import { Button } from "@/components/ui/button"
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";

export default function Page() {
    return (
        <div>
            <Logo />
            <CompleteMenu />
            <div className="text-center">
                <h1 className="font-bold text-4xl bg-gradient-to-r from-cyan-500 to-blue-500 inline-block text-transparent bg-clip-text mt-10 mb-1 px-1 pb-1">
                    Om oss
                </h1>
                <p className="font-regular text-small text-slate-300 mb-10">Vilka ligger bakom den här hemsidan?</p>
                <div className="flex justify-center mt-10">
                    <Card className="m-4 p+2 w-full md:w-1/2">
                        <div className="p-5">
                            <CardContent>
                                <p>Denna hemsida har utvecklats av två masterstudenter vid Linköpings universitet inom ramen för kursen Avancerad Webbprogrammering (TDDD27). Syftet med hemsidan är att, utöver kursens innehåll, ge en tydlig överblick över hur den svenska staten fungerar och bidra med intressant fakta och statisitik på ett och samma ställe. Den här typen av data är svår att få tag och ligger ofta djupt på statliga hemsidor det krävs ofta ett flertal källor för att få en sammanhängande bild. Denna hemsida erbjuder all denna information på ett och samma ställe, presenterat på ett intuitivt sätt. Denna hemsida är inte officiell och har ingen koppling till regeringen eller någon annan myndighet.</p>
                            </CardContent>
                            <CardContent>
                                <Link href="https://www.linkedin.com/in/annagranberg00/" target="_blank">
                                    <Button variant="outline" className='bg-white text-black m-1'>Anna Granberg</Button>
                                </Link>
                                <Link href="https://www.linkedin.com/in/filip-hamrelius/" target="_blank">
                                    <Button variant="outline" className='bg-white text-black m-1'>Filip Hamrelius</Button>
                                </Link>
                            </CardContent>
                        </div>
                    </Card>
                </div>
            </div>
            <Footer />
        </div>
    );
}