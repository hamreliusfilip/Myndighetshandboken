'use client';

import React from "react";
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import Link from "next/link";
import { Button } from "@/components/ui/button"
import { Bar } from 'react-chartjs-2';
import { Chart, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';

import data from '../../Assets/Data/VoteData.json';
import option from '../../Assets/Data/VoteOptions.json';

Chart.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

export default function AboutRiks() {
    return (
        <div>
            <div className="text-center">
                <h1 className="font-bold text-4xl mt-20 bg-gradient-to-r from-cyan-500 to-blue-500 inline-block text-transparent bg-clip-text px-1 pb-1"> Vem styr Sverige? </h1>
                <p className='text-center font-normal text-l mt-5'> Information, statistik och förklarande, <br></br> texter kring det svenska politiska systemet. </p>
                <hr className="w-96 h-1 mx-auto my-4 bg-gradient-to-r from-cyan-500 to-blue-500 border-0 rounded md:my-10 dark:bg-gray-700" />
            </div>
            <div className="grid grid-cols-2 gap-8 p-10">
                <div>
                    <p className="text-center font-semibold text-2xl">Fördelning i Riksdagen</p>
                    <hr className="w-24 h-1 mx-auto my-4 bg-gradient-to-r from-cyan-500 to-blue-500 border-0 rounded md:my-10 dark:bg-gray-700" />
                    {/* @ts-ignore */}
                    <Bar data={data.data1} options={option.option1} />
                </div>
                <div>
                    <p className="text-center font-semibold text-2xl">Fördelning i Regeringen</p>
                    <hr className="w-24 h-1 mx-auto my-4 bg-gradient-to-r from-cyan-500 to-blue-500 border-0 rounded md:my-10 dark:bg-gray-700" />
                    {/* @ts-ignore */}
                    <Bar data={data.data2} options={option.option2} />
                </div>
            </div>
            <div className="px-4 pt-16">
                <div className="flex flex-wrap justify-center">
                    <Card className="m-4 p+2 w-full sm:w-1/2 md:w-1/2 lg:w-1/3 xl:w-1/3">
                        <CardHeader>
                            <CardTitle>Riksdagen</CardTitle>
                            <CardDescription className="text-sm"><span className='bg-gradient-to-r from-cyan-500 to-blue-500 inline-block text-transparent bg-clip-text'>Vad gör riksdagen?</span></CardDescription>
                        </CardHeader>
                        <CardContent>
                            <p>Riksdagen är Sveriges lagstiftande församling och består av 349 ledamöter som väljs vart fjärde år i allmänna val. Valresultatet avgör hur de 349 platserna eller mandaten ska fördelas mellan de politiska partierna. För att komma in i riksdagen måste ett parti ha fått minst fyra procent av alla röster i riksdagsvalet eller minst 12 procent av rösterna i en valkrets. Svenska medborgare som är eller har varit bosatta i landet och har fyllt 18 år senast på valdagen har rätt att kandidera till riksdagen. För att kunna väljas in i riksdagen måste man företräda ett politiskt parti. Partimedlemmarna utser de personer inom det egna partiet som de tycker är lämpliga att representera partiet i riksdagen. <br></br> <br></br> Riksdagens viktigaste uppgifter är att stifta lagar, besluta om statens finanser och kontrollera regeringens arbete. Talmannen leder riksdagens arbete och är riksdagens högste ämbetsman. Ett lagförslag som läggs fram av en riksdagsman eller ett parti kallas motion. Ett förslag från regeringen kallas proposition. Innan riksdagen röstar om ett lagförslag förbereds frågan i något av riksdagens utskott. Utskotten är arbetsgrupper med ansvar för olika politikområden där alla riksdagspartierna finns representerade. Exempel på utskott är Finansutskottet och Arbetsmarknadsutskottet. En annan viktig uppgift för riksdagen är att besluta om statens utgifter och inkomster. Detta görs med utgångspunkt i två propositioner som regeringen lämnar i april och september varje år: den ekonomiska vårpropositionen och budgetpropositionen. En ytterligare uppgift för riksdagen är att kontrollera regeringen och den offentliga förvaltningen. Det kallas riksdagens kontrollmakt. Reglerna för denna kontroll finns i regeringsformen. Riksdagen har fem kontrollinstrument: Konstitutionsutskottets granskning av regeringen. Misstroendeförklaring mot statsråd. Riksdagens ombudsmän. Riksrevisionen. Ledamöternas interpellationer och frågor till statsråden.</p>
                        </CardContent>
                    </Card>
                    <Card className="m-4 p+2 w-full sm:w-1/2 md:w-1/2 lg:w-1/3 xl:w-1/3">
                        <CardHeader>
                            <CardTitle>Regeringen</CardTitle>
                            <CardDescription><span className='bg-gradient-to-r from-cyan-500 to-blue-500 inline-block text-transparent bg-clip-text'>Vad gör regeringen?</span></CardDescription>
                        </CardHeader>
                        <CardContent>
                        <p>Regeringen utgör en central del av den svenska politiska processen och har en avgörande roll i att driva landets utveckling och förvalta dess lagstiftning. Efter varje riksdagsval är det det parti eller den partikoalition som får flest röster som har möjlighet att bilda regering. Talmannen har i uppgift att nominera en statsminister för den nyvalda riksdagen, som sedan måste godkännas av riksdagen för att officiellt tillträda som regeringschef. Som regeringschef har statsministern makten att utse övriga ministrar, eller statsråd, som tillsammans utgör regeringen. Dessa ministrar ansvarar för olika politikområden och arbetar tillsammans för att genomföra regeringens politiska agenda.</p><br></br> <p>Regeringen är följaktligen ansvarig gentemot riksdagen och måste kunna få dess stöd för att genomföra sina politiska mål och beslut. För att underlätta sitt arbete har regeringen tillgång till ett omfattande regeringskansli, organiserat i olika departement, som hanterar specifika frågor inom samhället. Dessutom finns det statliga myndigheter och bolag som verkar under regeringens ledning och stödjer dess arbete inom olika sektorer såsom utbildning, hälsa, och infrastruktur.</p><br></br> <p>Genom denna komplexa struktur samarbetar regeringen med riksdagen och andra statliga organ för att formulera och genomföra lagar och politiska åtgärder som syftar till att främja Sveriges samhällsutveckling och välfärd. Regeringens arbete och samspel med andra aktörer i samhället är avgörande för att säkerställa en stabil och framgångsrik utveckling för landet och dess medborgare.</p>
                        </CardContent>
                    </Card>
                </div>
            </div>
            <div className="flex justify-center pt-16">
                <div className="w-full sm:w-3/4 lg:w-1/2">
                    <Card className="m-4 p+2 text-left">
                        <CardHeader>
                            <CardTitle>Om datan</CardTitle>
                            <CardDescription className="text-sm bg-gradient-to-r from-cyan-500 to-blue-500 inline-block text-transparent bg-clip-text">Vart kommer informationen ifrån?</CardDescription>
                        </CardHeader>
                        <CardContent>
                            <p>Statistiken är baserad Valmyndighetens resultat från valet 2022. Informationen presenterad i text är tagen från Regeringskansliets hemsida.</p>
                        </CardContent>
                        <CardContent>
                            <Link href="https://www.val.se/valresultat/riksdag-region-och-kommun/2022/valresultat.html" target="_blank">
                                <Button variant="outline" className="m-1 bg-gradient-to-r from-cyan-500 to-blue-500 text-white">Valmyndigheten</Button>
                            </Link>
                            <Link href="https://www.regeringen.se/sa-styrs-sverige/arbetet-pa-nationell-niva/" target="_blank">
                                <Button variant="outline" className="m-1 bg-gradient-to-r from-cyan-500 to-blue-500 text-white">Regeringskansliet</Button>
                            </Link>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </div>
    );
}
