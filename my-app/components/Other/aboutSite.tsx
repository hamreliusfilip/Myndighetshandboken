import React from "react";
import Link from 'next/link';

import { Button } from "@/components/ui/button"
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";

export default function AboutSite() {
    return (
        <div className="flex justify-center pt-16">
            <div className="w-full sm:w-3/4 lg:w-1/2">
                <Card className="m-4 p+2">
                    <CardHeader>
                        <CardTitle>Om hemsidan</CardTitle>
                        <CardDescription className="text-sm"><span className='bg-gradient-to-r from-cyan-500 to-blue-500 inline-block text-transparent bg-clip-text'>Varför finns denna hemsida?</span></CardDescription>
                    </CardHeader>
                    <CardContent>
                        <p>Denna hemsida har utvecklats av två masterstudenter vid Linköpings universitet inom ramen för kursen Avancerad Webbprogrammering (TDDD27). Syftet med hemsidan är att, utöver kursens innehåll, ge en tydlig överblick över hur den svenska staten fungerar och bidra med intressant fakta och statisitik på ett och samma ställe. Den här typen av data är svår att få tag och ligger ofta djupt på statliga hemsidor det krävs ofta ett flertal källor för att få en sammanhängande bild. Denna hemsida erbjuder all denna information på ett och samma ställe, presenterat på ett intuitivt sätt. Denna hemsida är inte officiell och har ingen koppling till regeringen eller någon annan myndighet.</p>
                    </CardContent>
                    <CardContent>
                        <Link href="https://www.linkedin.com/in/annagranberg00/" target="_blank">
                            <Button variant="outline" className='m-1 bg-gradient-to-r from-cyan-500 to-blue-500 text-white'>Anna Granberg</Button>
                        </Link>
                        <Link href="https://www.linkedin.com/in/filip-hamrelius/" target="_blank">
                            <Button variant="outline" className='m-1 bg-gradient-to-r from-cyan-500 to-blue-500 text-white'>Filip Hamrelius</Button>
                        </Link>
                    </CardContent>
                </Card>
                <Card className="m-4 p+2">
                    <CardHeader>
                        <CardTitle>Om databasen</CardTitle>
                        <CardDescription className="text-sm"><span className='bg-gradient-to-r from-cyan-500 to-blue-500 inline-block text-transparent bg-clip-text'>Vart databaserna om myndigheter och statliga företag ifrån?</span></CardDescription>
                    </CardHeader>
                    <CardContent>
                        <p>Denna hemsida arbetar med två olika databaser, en för myndigheter och en för statliga företag. Båda databaserna har konstruerats av oss själva. Databasen med myndigheter består av 342 myndigheter med 10 datapunkter för varje myndighet. Databasen saknar motstycke och har konstruerats med information från Riksarkivet, SCB:s myndighetsregister, Regeringskansliets hemsida, Statskontorets rapport 'Statsförvaltningen i korthet' - 2023 och Wikipedia. Logotyperna har hämtats från respektive myndighets hemsida. Databasen över statliga företag är till största del baserad på information från Wikipedia och Alla bolag.</p>
                    </CardContent>
                    <CardContent>
                        <Link href="https://riksarkivet.se/start" target="_blank">
                            <Button variant="outline" className='m-1 bg-gradient-to-r from-cyan-500 to-blue-500 text-white'>Riksarkivet</Button>
                        </Link>
                        <Link href="https://myndighetsregistret.scb.se/Myndighet" target="_blank">
                            <Button variant="outline" className='m-1 bg-gradient-to-r from-cyan-500 to-blue-500 text-white'>SCB - Myndighetsregistret</Button>
                        </Link>
                        <Link href="https://www.regeringen.se/regeringskansliet/" target="_blank">
                            <Button variant="outline" className='m-1 bg-gradient-to-r from-cyan-500 to-blue-500 text-white'>Regeringskansliet</Button>
                        </Link>
                        <Link href="https://www.statskontoret.se/publicerat/publikationer/publikationer-2023/statsforvaltningen-i-korthet-2023/" target="_blank">
                            <Button variant="outline" className='m-1 bg-gradient-to-r from-cyan-500 to-blue-500 text-white'>Statskontoret - Statsförvaltning i korthet</Button>
                        </Link>
                        <Link href="https://sv.wikipedia.org/wiki/Portal:Huvudsida" target="_blank">
                            <Button variant="outline" className='m-1 bg-gradient-to-r from-cyan-500 to-blue-500 text-white'>Wikipedia</Button>
                        </Link>
                        <Link href="https://www.allabolag.se" target="_blank">
                            <Button variant="outline" className="m-1 bg-gradient-to-r from-cyan-500 to-blue-500 text-white">Alla Bolag</Button>
                        </Link>
                    </CardContent>
                </Card>
                <Card className="m-4 p+2">
                    <CardHeader>
                        <CardTitle>Om informationen</CardTitle>
                        <CardDescription className="text-sm"><span className='bg-gradient-to-r from-cyan-500 to-blue-500 inline-block text-transparent bg-clip-text'>Vart kommer informationen ifrån?</span></CardDescription>
                    </CardHeader>
                    <CardContent>
                        <p>Informationen som finns tillgänglig på denna hemsida har samlats in från ett flertal källor. Vi tar inget ansvar kring trovärdigheten av faktan som presenteras på denna sida, huvudsyftet för oss är utvecklingen och strukturen bakom applikationen.</p>
                    </CardContent>
                    <CardContent>
                        <Link href="https://riksarkivet.se/start" target="_blank">
                            <Button variant="outline" className='m-1 bg-gradient-to-r from-cyan-500 to-blue-500 text-white'>Riksarkivet</Button>
                        </Link>
                        <Link href="https://www.regeringen.se/regeringskansliet/" target="_blank">
                            <Button variant="outline" className='m-1 bg-gradient-to-r from-cyan-500 to-blue-500 text-white'>Regeringskansliet</Button>
                        </Link>
                        <Link href="https://www.statskontoret.se/publicerat/publikationer/publikationer-2023/statsforvaltningen-i-korthet-2023/" target="_blank">
                            <Button variant="outline" className='m-1 bg-gradient-to-r from-cyan-500 to-blue-500 text-white'>Statskontoret - Statsförvaltning i korthet</Button>
                        </Link>
                        <Link href="https://sv.wikipedia.org/wiki/Portal:Huvudsida" target="_blank">
                            <Button variant="outline" className='m-1 bg-gradient-to-r from-cyan-500 to-blue-500 text-white'>Wikipedia</Button>
                        </Link>
                        <Link href="https://myndighetsregistret.scb.se/Myndighet" target="_blank">
                            <Button variant="outline" className='m-1 bg-gradient-to-r from-cyan-500 to-blue-500 text-white'>SCB - Myndighetsregistret</Button>
                        </Link>
                        <Link href="https://chat.openai.com" target="_blank">
                            <Button variant="outline" className="m-1 bg-gradient-to-r from-cyan-500 to-blue-500 text-white">ChatGPT - OpenAI</Button>
                        </Link>
                    </CardContent>
                </Card>
            </div>
        </div>
    );
}