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

import stats from '@/Assets/Data/votedataYears.json';
import optionsStats from '@/Assets/Data/votedataYearsOptions.json';
import option from '@/Assets/Data/VoteOptions.json';
import data from '@/Assets/Data/VoteData.json';
import stats2 from '@/Assets/Data/valDeltagande.json';
import optionsStats2 from '@/Assets/Data/valDeltagandeOptions.json';

Chart.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

export default function AboutRiks() {
    return (
        <div>
            <div className="text-center">
                <h1 className="font-bold text-4xl mt-20 bg-gradient-to-r from-cyan-500 to-blue-500 inline-block text-transparent bg-clip-text px-1 pb-1"> Vem styr Sverige? </h1>
                <p className='text-center font-normal text-l mt-5'> Information, statistik & grafer, <br></br> kring valresultat, regeringen och riksdagen. </p>
            </div>
            <div className="grid md:grid-cols-1 lg:grid-cols-2 gap-8 p-10">
                <div>
                    <p className="text-center font-semibold text-2xl">Fördelning i Riksdagen</p>
                    <hr className="w-24 h-1 mx-auto my-4 bg-gradient-to-r from-cyan-500 to-blue-500 border-0 rounded md:my-10 dark:bg-gray-700" />
                    <div className="chart-container min-h-[300px]">
                        {/* @ts-ignore */}
                        <Bar data={data.data1} options={option.option1} />
                    </div>
                </div>
                <div>
                    <p className="text-center font-semibold text-2xl">Fördelning i Regeringen</p>
                    <hr className="w-24 h-1 mx-auto my-4 bg-gradient-to-r from-cyan-500 to-blue-500 border-0 rounded md:my-10 dark:bg-gray-700" />
                    <div className="chart-container min-h-[300px]">
                        {/* @ts-ignore */}
                        <Bar data={data.data2} options={option.option2} />
                    </div>
                </div>
            </div>
           
            <div className="flex justify-center mt-10">
                <Card>
                    <CardHeader>
                        <CardTitle>Riksdagsvalen</CardTitle>
                        <CardDescription className="text-sm"><span className='bg-gradient-to-r from-cyan-500 to-blue-500 inline-block text-transparent bg-clip-text'>Valresultaten för 2002-2022</span></CardDescription>
                    </CardHeader>
                    <CardContent>
                        <div className="flex justify-center items-center mb-10">
                            <div className="flex grid grid-cols-1 md:grid-cols-3 gap-5">
                                <div className="chart-container-small min-h-[300px]">
                                    {/* @ts-ignore */}
                                    <Bar data={stats.data1} options={optionsStats.option1} />
                                </div>
                                <div className="chart-container-small min-h-[300px]">
                                    {/* @ts-ignore */}
                                    <Bar data={stats.data2} options={optionsStats.option2} />
                                </div>
                                <div className="chart-container-small min-h-[300px]">
                                    {/* @ts-ignore */}
                                    <Bar data={stats.data3} options={optionsStats.option3} />
                                </div>
                                <div className="chart-container-small min-h-[300px]">
                                    {/* @ts-ignore */}
                                    <Bar data={stats.data4} options={optionsStats.option4} />
                                </div>
                                <div className="chart-container-small min-h-[300px]">
                                    {/* @ts-ignore */}
                                    <Bar data={stats.data5} options={optionsStats.option5} />
                                </div>
                                <div className="chart-container-small min-h-[300px]">
                                    {/* @ts-ignore */}
                                    <Bar data={stats.data6} options={optionsStats.option6} />
                                </div>
                            </div>
                        </div>
                    </CardContent>
                </Card>
            </div>

            <div className="flex justify-center mt-10">
                <Card>
                    <CardHeader>
                        <CardTitle>Riksdagsvalen</CardTitle>
                        <CardDescription className="text-sm"><span className='bg-gradient-to-r from-cyan-500 to-blue-500 inline-block text-transparent bg-clip-text'>Valdeltagande för 1973-2022</span></CardDescription>
                    </CardHeader>
                    <CardContent className="grid grid-cols-1 md:grid-cols-3">
                        <div className="chart-container-small min-h-[300px]">
                            {/* @ts-ignore */}
                            <Bar data={stats2.data1} options={optionsStats2.option1} />
                        </div>
                        <div className="chart-container-small min-h-[300px]">
                            {/* @ts-ignore */}
                            <Bar data={stats2.data1} options={optionsStats2.option2} />
                        </div>
                        <div className="chart-container-small min-h-[300px]">
                            {/* @ts-ignore */}
                            <Bar data={stats2.data1} options={optionsStats2.option3} />
                        </div>
                    </CardContent>
                </Card>
            </div>

            <div className="flex justify-center mt-10">
                <div className="sm:w-full m-3 p-10">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                        <Card className="">
                            <CardHeader>
                                <CardTitle>Riksdagen</CardTitle>
                                <CardDescription className="text-sm"><span className='bg-gradient-to-r from-cyan-500 to-blue-500 inline-block text-transparent bg-clip-text'>Vad gör riksdagen?</span></CardDescription>
                            </CardHeader>
                            <CardContent>
                                <p>Riksdagen är Sveriges lagstiftande församling och består av 349 ledamöter som väljs vart fjärde år i allmänna val. Valresultatet avgör hur de 349 platserna eller mandaten ska fördelas mellan de politiska partierna. För att komma in i riksdagen måste ett parti ha fått minst fyra procent av alla röster i riksdagsvalet eller minst 12 procent av rösterna i en valkrets. Svenska medborgare som är eller har varit bosatta i landet och har fyllt 18 år senast på valdagen har rätt att kandidera till riksdagen. För att kunna väljas in i riksdagen måste man företräda ett politiskt parti. Partimedlemmarna utser de personer inom det egna partiet som de tycker är lämpliga att representera partiet i riksdagen. <br></br> <br></br> Riksdagens viktigaste uppgifter är att stifta lagar, besluta om statens finanser och kontrollera regeringens arbete. Talmannen leder riksdagens arbete och är riksdagens högste ämbetsman. Ett lagförslag som läggs fram av en riksdagsman eller ett parti kallas motion. Ett förslag från regeringen kallas proposition. Innan riksdagen röstar om ett lagförslag förbereds frågan i något av riksdagens utskott. Utskotten är arbetsgrupper med ansvar för olika politikområden där alla riksdagspartierna finns representerade. Exempel på utskott är Finansutskottet och Arbetsmarknadsutskottet. En annan viktig uppgift för riksdagen är att besluta om statens utgifter och inkomster. Detta görs med utgångspunkt i två propositioner som regeringen lämnar i april och september varje år: den ekonomiska vårpropositionen och budgetpropositionen. En ytterligare uppgift för riksdagen är att kontrollera regeringen och den offentliga förvaltningen. Det kallas riksdagens kontrollmakt. Reglerna för denna kontroll finns i regeringsformen. Riksdagen har fem kontrollinstrument: Konstitutionsutskottets granskning av regeringen. Misstroendeförklaring mot statsråd. Riksdagens ombudsmän. Riksrevisionen. Ledamöternas interpellationer och frågor till statsråden.</p>
                            </CardContent>
                        </Card>
                        <Card className="mt-10 md:mt-0">
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
            </div>

            <div className="flex justify-center mt-10">
                <div className="sm:w-full lg:w-1/2 m-3">
                    <Card className="">
                        <CardHeader>
                            <CardTitle>Om datan</CardTitle>
                            <CardDescription className="text-sm bg-gradient-to-r from-cyan-500 to-blue-500 inline-block text-transparent bg-clip-text">Vart kommer informationen ifrån?</CardDescription>
                        </CardHeader>
                        <CardContent>
                            <p>Graferna i toppen på sidan är baserad Valmyndighetens resultat från valet 2022. Informationen presenterad i text är tagen från Regeringskansliets hemsida. Historisk data över valresultaten är baserat på SCB's data. Valdeltagande är också från SCB.</p>
                        </CardContent>
                        <CardContent>
                            <Link href="https://www.val.se/valresultat/riksdag-region-och-kommun/2022/valresultat.html" target="_blank">
                                <Button variant="outline" className='bg-white text-black m-1'>Valmyndigheten</Button>
                            </Link>
                            <Link href="https://www.regeringen.se/sa-styrs-sverige/arbetet-pa-nationell-niva/" target="_blank">
                                <Button variant="outline" className='bg-white text-black m-1'>Regeringskansliet</Button>
                            </Link>
                            <Link href="https://www.scb.se/hitta-statistik/statistik-efter-amne/demokrati/allmanna-val/allmanna-val-valresultat/pong/tabell-och-diagram/historisk-valstatistik/historisk-statistik-over-valaren-19102022.-procentuell-fordelning-av-giltiga-valsedlar-efter-parti-och-typ-av-val" target="_blank">
                                <Button variant="outline" className='bg-white text-black m-1'>SCB - Resultat</Button>
                            </Link>
                            <Link href="https://www.scb.se/hitta-statistik/sverige-i-siffror/manniskorna-i-sverige/valdeltagande-i-sverige/" target="_blank">
                                <Button variant="outline" className='bg-white text-black m-1'>SCB - Deltagande</Button>
                            </Link>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </div>
    );
}
