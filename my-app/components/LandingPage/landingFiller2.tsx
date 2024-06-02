import React from 'react';
import Link from 'next/link';

export default function LandingFiller2() {
    return (
        <div className='mt-10 mb-72 bg-white h-96 flex justify-center items-center '>
            <div className='mt-20'>
                <h1 className='text-center font-bold text-4xl text-black mb-5 '>
                    All <span className='bg-gradient-to-r from-cyan-500 to-blue-500 inline-block text-transparent bg-clip-text'>data</span> på ett och <span className='bg-gradient-to-r from-cyan-500 to-blue-500 inline-block text-transparent bg-clip-text font-extrabold'>samma ställe</span>
                </h1>
                <h1 className='text-center font-normal text-l text-black mb-10 '>
                    All data kring vår statsapparat samlad på ett och samma ställe. <br /> Enkelt att hitta och enkelt att förstå.
                </h1>

                <div className='mt-20'>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 justify-center items-center">

                        <Link href="/faktaover/riksdagen">
                            <div className="flex flex-col items-center">
                                <div className="flex justify-center items-center w-32 h-32 rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 mb-2 transition-all duration-300 hover:scale-110">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="white" className="w-16 h-16">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 5.25a3 3 0 0 1 3 3m3 0a6 6 0 0 1-7.029 5.912c-.563-.097-1.159.026-1.563.43L10.5 17.25H8.25v2.25H6v2.25H2.25v-2.818c0-.597.237-1.17.659-1.591l6.499-6.499c.404-.404.527-1 .43-1.563A6 6 0 1 1 21.75 8.25Z" />
                                    </svg>

                                </div>
                                <p className="text-xl text-center font-bold m-3">Vem styr Sverige?</p>
                                <p className="text-sm text-center font-regular text-slate-500 m-3">Fakta och enkel statistik för att lättare <br></br> förstå fördelningen i riksdagen och regeringen.</p>
                            </div>
                        </Link>

                        <Link href="/faktaover/foretagMyndigheter">
                            <div className="flex flex-col items-center">
                                <div className="flex justify-center items-center w-32 h-32 rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 mb-2 transition-all duration-300 hover:scale-110">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="white" className="w-16 h-16">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 3.75h.008v.008h-.008v-.008Zm0 3h.008v.008h-.008v-.008Zm0 3h.008v.008h-.008v-.008Z" />
                                    </svg>
                                </div>
                                <p className="text-xl text-center font-bold m-3">Myndighet eller statligt bolag?</p>
                                <p className="text-sm text-center font-regular text-slate-500 m-3">Enkla förklaringar, vad är vad i den svenska byråkratin. <br></br>Hur fungerar och skiljer dem sig åt?</p>
                            </div>
                        </Link>

                        <Link href="/faktaover/staten">
                            <div className="flex flex-col items-center">
                                <div className="flex justify-center items-center w-32 h-32 rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 mb-2 transition-all duration-300 hover:scale-110">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="white" className="w-16 h-16">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 5.25h.008v.008H12v-.008Z" />
                                    </svg>
                                </div>
                                <p className="text-xl text-center font-bold m-3">Grundläggande fakta</p>
                                <p className="text-sm text-center font-regular text-slate-500 m-3">Har du dålig koll på grunderna? <br></br>Låt oss hjälpa dig med snabb och enkel information.</p>
                            </div>
                        </Link>

                    </div>
                </div>
            </div>
        </div>
    );
}

