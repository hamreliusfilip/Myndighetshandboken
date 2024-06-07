import React from "react";
import {
    Card,
    CardContent,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { Button } from "@/components/ui/button";
import Link from 'next/link';

export default function LandingFiller22() {


    return (
        <div className='mt-20'>
            <div className='flex flex-col lg:flex-row justify-center items-center relative'>
                <div className='grid grid-cols-1 sm:grid-cols-1 2xl:grid-cols-3 gap-4 bg-white rounded-xl p-6 sm:p-10 lg:p-20'>

                    <Card className="w-full h-96 bg-black">
                        <CardHeader>
                            <CardTitle className='text-white'>Tips</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="white" className="w-10 h-10">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M12.75 3.03v.568c0 .334.148.65.405.864l1.068.89c.442.369.535 1.01.216 1.49l-.51.766a2.25 2.25 0 0 1-1.161.886l-.143.048a1.107 1.107 0 0 0-.57 1.664c.369.555.169 1.307-.427 1.605L9 13.125l.423 1.059a.956.956 0 0 1-1.652.928l-.679-.906a1.125 1.125 0 0 0-1.906.172L4.5 15.75l-.612.153M12.75 3.031a9 9 0 0 0-8.862 12.872M12.75 3.031a9 9 0 0 1 6.69 14.036m0 0-.177-.529A2.25 2.25 0 0 0 17.128 15H16.5l-.324-.324a1.453 1.453 0 0 0-2.328.377l-.036.073a1.586 1.586 0 0 1-.982.816l-.99.282c-.55.157-.894.702-.8 1.267l.073.438c.08.474.49.821.97.821.846 0 1.598.542 1.865 1.345l.215.643m5.276-3.67a9.012 9.012 0 0 1-5.276 3.67m0 0a9 9 0 0 1-10.275-4.835M15.75 9c0 .896-.393 1.7-1.016 2.25" />
                            </svg>
                        </CardContent>
                        <CardContent>
                            <p className='text-white'>Svårt att hitta pålitlig och relevant information från svenska myndigheter? Kolla in våra tips för de bästa webbplatserna som erbjuds av den svenska staten.</p>
                        </CardContent>
                        <CardContent>
                            <Link href='/Tips'>
                                <Button variant="outline" className='bg-white text-black'>Läs mer</Button>
                            </Link>
                        </CardContent>
                    </Card>
                    <Card className="w-full h-96 bg-gradient-to-r from-cyan-500 to-blue-500">
                        <CardHeader>
                            <CardTitle className='text-white'>Ambassader</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="white" className="w-10 h-10">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M12 21v-8.25M15.75 21v-8.25M8.25 21v-8.25M3 9l9-6 9 6m-1.5 12V10.332A48.36 48.36 0 0 0 12 9.75c-2.551 0-5.056.2-7.5.582V21M3 21h18M12 6.75h.008v.008H12V6.75Z" />
                            </svg>
                        </CardContent>
                        <CardContent>
                            <p className='text-white'>Vill du veta var Sverige har sina ambassader? Ta reda på mer om Sveriges olika ambassader och generalkonsulat.</p>
                        </CardContent>
                        <CardContent>
                            <Link href='/utrikesrelationer/abroadMyndighet'>
                                <Button variant="outline" className='bg-white text-black'>Läs mer</Button>
                            </Link>
                        </CardContent>
                    </Card>
                    <Card className="w-full h-96 bg-black">
                        <CardHeader>
                            <CardTitle className='text-white'>Politiska ledare & partier</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="white" className="w-10 h-10">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 3.75V16.5L12 14.25 7.5 16.5V3.75m9 0H18A2.25 2.25 0 0 1 20.25 6v12A2.25 2.25 0 0 1 18 20.25H6A2.25 2.25 0 0 1 3.75 18V6A2.25 2.25 0 0 1 6 3.75h1.5m9 0h-9" />
                            </svg>
                        </CardContent>
                        <CardContent>
                            <p className='text-white'>Myndighetshandboken erbjuder snabb men detaljerad information om våra politiska ledare och partierna de representerar. Vill du veta hur mycket varje parti får i statligt stöd? Upptäck det här!</p>
                        </CardContent>
                        <CardContent>
                            <Link href='/faktaover/politik'>
                                <Button variant="outline" className='bg-white text-black'>Läs mer</Button>
                            </Link>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </div>
    );
}