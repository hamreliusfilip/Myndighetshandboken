import React from "react";
import CompleteMenu from '@/components/Main/completeMenu';
import Logo from '@/components/Main/logo';
import Footer from '@/components/Main/footer';
import Link from 'next/link';
import { Button } from "@/components/ui/button"

export default function Page() {
    return (
        <div>
            <Logo />
            <CompleteMenu />
            <div className="text-center mt-10">
                <h1 className="font-bold text-4xl bg-gradient-to-r from-cyan-500 to-blue-500 inline-block text-transparent bg-clip-text mt-10 mb-1 px-1 pb-1">
                    Om informationen & databaserna
                </h1>
                <p className="font-regular text-small text-slate-300 mb-10">Vart kommer all information och alla databaser ifrån? <br></br> Är det trovärdigt? </p>
                <div className="flex justify-center mt-10">
                    <div className="p-5">
                        <div className="flex justify-center">
                            <div className="w-full m-5 md:m-0 md:w-2/3">
                                <p className="text-justify">Denna hemsida arbetar med flera olika databaser, till exempel en för myndigheter och en för statliga företag. Alla databaser har konstruerats av oss själva, både ur ett tekniskt perspektiv och gällande data och information. Databaserna saknar motstycke och har konstruerats på olika sätt. Databasen över myndigheterna är baserad på information från Riksarkivet, SCB myndighetsregister, Regeringskansliets hemsida, Statskontorets rapport "Statsförvaltningen i korthet" - 2023 och Wikipedia. Logotyperna har hämtats från respektive myndighets hemsida. Det ska dock noteras att informationen inte är kontrollerad och att felaktigheter kan förekomma på grund av diskrepanser i källorna. Ett tydligt exempel är diskrepansen mellan SCB myndighetsregister och Statskontorets rapport: båda källorna från 2023 skiljer sig åt med fyra myndigheter. SCB listar fyra fler: Riksdagens ombudsmän, Riksdagsförvaltningen, Riksrevisionen och Sveriges Riksbank. Dessa är uppenbart myndigheter, men det förekommer alltså sådana skillnader i den publika data som finns tillgänglig. Detta leder till att det finns en risk för fel även i våra databaser. </p>
                            </div>
                        </div>
                        <p className="mb-3 text-slate-500 mt-20"> Exempel på använda källor: </p>
                        <div className="flex justify-center flex-wrap">
                            <div className="w-full md:w-1/3">
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
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
}