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
                    Om informationen & databaserna
                </h1>
                <p className="font-regular text-small text-slate-300 mb-10">Vart kommer all information och alla databaser ifrån? <br></br> Är det trovärdigt? </p>
                <div className="flex justify-center mt-10">
                    <Card className="m-4 p+2 w-full md:w-1/2">
                        <div className="p-5">
                            <CardContent>
                                <p>Informationen på den här hemsidan är hämtad från trovärdiga källor och myndighetskällor. I vissa fall har Wikipedia använts, detta är alltid förtydligat längst ner på sidan. </p>
                                <br></br>
                                <p>Denna hemsida arbetar med ett flertal olika databaser, till exemepl en för myndigheter eller en för statliga företag. Alla databaserna har konstruerats av oss själva - detta menar både ur tekniskt perspktiv men också angående datan och informationen. Databaserna saknar motstycke och har konstruerats på olika sätt, databasen över myndigheterna är konstruerad med information från Riksarkivet, SCB:s myndighetsregister, Regeringskansliets hemsida, Statskontorets rapport 'Statsförvaltningen i korthet' - 2023 och Wikipedia. Logotyperna har hämtats från respektive myndighets hemsida. Det ska dock noteras att informationen är inte kontrollerad, i vissa fall uppkommer felaktigheter - detta beror på diskreptenser i källor. Ett tydligt exempel är disprektansen mellan SCB's myndighetregister och Statskontorets rapport: båda källorna från 2023 skiljer 4 myndigheter i deras listor - där SCB har fyra fler: RIKSDAGENS OMBUDSMÄN, RIKSDAGSFÖRVALTNINGEN, RIKSREVISIONEN och SVERIGES RIKSBANK. Skillnader som dessa kan göra att även våra databaser är felaktiga, men i det stora hela stämmer de till största del.</p>
                            </CardContent>
                            <p className="mb-3 text-slate-500"> Exempel på använda källor: </p>  
                            <CardContent>
                                <Link href="https://riksarkivet.se/start" target="_blank">
                                    <Button variant="outline" className='bg-white text-black m-1'>Riksarkivet</Button>
                                </Link>
                                <Link href="https://www.regeringen.se/regeringskansliet/" target="_blank">
                                    <Button variant="outline" className='bg-white text-black m-1'>Regeringskansliet</Button>
                                </Link>
                                <Link href="https://www.statskontoret.se/publicerat/publikationer/publikationer-2023/statsforvaltningen-i-korthet-2023/" target="_blank">
                                    <Button variant="outline" className='bg-white text-black m-1'>Statskontoret - Statsförvaltning i korthet</Button>
                                </Link>
                                <Link href="https://sv.wikipedia.org/wiki/Portal:Huvudsida" target="_blank">
                                    <Button variant="outline" className='bg-white text-black m-1'>Wikipedia</Button>
                                </Link>
                                <Link href="https://myndighetsregistret.scb.se/Myndighet" target="_blank">
                                    <Button variant="outline" className='bg-white text-black m-1'>SCB - Myndighetsregistret</Button>
                                </Link>
                                <Link href="https://www.forsvarsmakten.se/sv/" target="_blank">
                                    <Button variant="outline" className='bg-white text-black m-1'>Försvarsmakten</Button>
                                </Link>
                                <Link href="https://polisen.se/" target="_blank">
                                    <Button variant="outline" className='bg-white text-black m-1'>Polisen</Button>
                                </Link>
                                <Link href="https://www.msb.se/" target="_blank">
                                    <Button variant="outline" className='bg-white text-black m-1'>MSB</Button>
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

// <div className="flex justify-center flex-col items-center w-1/2">
// <Card className="m-4 p+2">
//     <CardHeader>
//         <CardTitle>Om databasen</CardTitle>
//         <CardDescription className="text-sm"><span className='bg-gradient-to-r from-cyan-500 to-blue-500 inline-block text-transparent bg-clip-text'>Vart databaserna om myndigheter och statliga företag ifrån?</span></CardDescription>
//     </CardHeader>
//     <CardContent>
//         <p>Denna hemsida arbetar med två olika databaser, en för myndigheter och en för statliga företag. Båda databaserna har konstruerats av oss själva. Databasen med myndigheter består av 342 myndigheter med 10 datapunkter för varje myndighet. Databasen saknar motstycke och har konstruerats med information från Riksarkivet, SCB:s myndighetsregister, Regeringskansliets hemsida, Statskontorets rapport 'Statsförvaltningen i korthet' - 2023 och Wikipedia. Logotyperna har hämtats från respektive myndighets hemsida. Databasen över statliga företag är till största del baserad på information från Wikipedia och Alla bolag.</p>
//     </CardContent>
//     <CardContent>
//         <Link href="https://riksarkivet.se/start" target="_blank">
//             <Button variant="outline" className='bg-white text-black m-1'>Riksarkivet</Button>
//         </Link>
//         <Link href="https://myndighetsregistret.scb.se/Myndighet" target="_blank">
//             <Button variant="outline" className='bg-white text-black m-1'>SCB - Myndighetsregistret</Button>
//         </Link>
//         <Link href="https://www.regeringen.se/regeringskansliet/" target="_blank">
//             <Button variant="outline" className='bg-white text-black m-1'>Regeringskansliet</Button>
//         </Link>
//         <Link href="https://www.statskontoret.se/publicerat/publikationer/publikationer-2023/statsforvaltningen-i-korthet-2023/" target="_blank">
//             <Button variant="outline" className='bg-white text-black m-1'>Statskontoret - Statsförvaltning i korthet</Button>
//         </Link>
//         <Link href="https://sv.wikipedia.org/wiki/Portal:Huvudsida" target="_blank">
//             <Button variant="outline" className='bg-white text-black m-1'>Wikipedia</Button>
//         </Link>
//         <Link href="https://www.allabolag.se" target="_blank">
//             <Button variant="outline" className='bg-white text-black m-1'>Alla Bolag</Button>
//         </Link>
//     </CardContent>
// </Card>
// <Card className="m-4 p+2">
//     <CardHeader>
//         <CardTitle>Om informationen</CardTitle>
//         <CardDescription className="text-sm"><span className='bg-gradient-to-r from-cyan-500 to-blue-500 inline-block text-transparent bg-clip-text'>Vart kommer informationen ifrån?</span></CardDescription>
//     </CardHeader>
//     <CardContent>
//         <p>Informationen som finns tillgänglig på denna hemsida har samlats in från ett flertal källor. Vi tar inget ansvar kring trovärdigheten av faktan som presenteras på denna sida, huvudsyftet för oss är utvecklingen och strukturen bakom applikationen.</p>
//     </CardContent>
//     <CardContent>
//         <Link href="https://riksarkivet.se/start" target="_blank">
//             <Button variant="outline" className='bg-white text-black m-1'>Riksarkivet</Button>
//         </Link>
//         <Link href="https://www.regeringen.se/regeringskansliet/" target="_blank">
//             <Button variant="outline" className='bg-white text-black m-1'>Regeringskansliet</Button>
//         </Link>
//         <Link href="https://www.statskontoret.se/publicerat/publikationer/publikationer-2023/statsforvaltningen-i-korthet-2023/" target="_blank">
//             <Button variant="outline" className='bg-white text-black m-1'>Statskontoret - Statsförvaltning i korthet</Button>
//         </Link>
//         <Link href="https://sv.wikipedia.org/wiki/Portal:Huvudsida" target="_blank">
//             <Button variant="outline" className='bg-white text-black m-1'>Wikipedia</Button>
//         </Link>
//         <Link href="https://myndighetsregistret.scb.se/Myndighet" target="_blank">
//             <Button variant="outline" className='bg-white text-black m-1'>SCB - Myndighetsregistret</Button>
//         </Link>
//         <Link href="https://chat.openai.com" target="_blank">
//             <Button variant="outline" className='bg-white text-black m-1'>ChatGPT - OpenAI</Button>
//         </Link>
//     </CardContent>
// </Card>
// </div>