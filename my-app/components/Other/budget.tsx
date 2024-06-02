'use client';

import React from "react";
import Link from 'next/link';
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Bar, Doughnut } from 'react-chartjs-2';
import { Chart, ArcElement, CategoryScale, LinearScale, Title, Tooltip, Legend, BarElement } from 'chart.js';

import data from '../../Assets/Data/BudgetData.json';
import option from '../../Assets/Data/BudgetOptions.json';

Chart.register(ArcElement, CategoryScale, LinearScale, Title, Tooltip, Legend, BarElement);

export default function Budget() {
    return (
        <div className="flex flex-col items-center justify-center">

            <h1 className="font-bold text-4xl mt-20 bg-gradient-to-r from-cyan-500 to-blue-500 inline-block text-transparent bg-clip-text px-1 pb-1"> Utgifter i fokus </h1>
            <p className="font-semibold text-small text-slate-300 m-4">Utgifter i procent - 2020</p>
            <div className="pl-20 pr-20 w-1/2">
                {/* @ts-ignore */}
                <Doughnut data={data.data2} options={option.option2} />
            </div>

            <Card className="mx-10 mb-12 w-1/2">
                <CardHeader>
                    <CardTitle>Sveriges Statsbudget</CardTitle>
                    <CardDescription className="text-sm"><span className='bg-gradient-to-r from-cyan-500 to-blue-500 inline-block text-transparent bg-clip-text'>Ur Regeringens proposition 2023/24:1</span></CardDescription>
                </CardHeader>
                <CardContent>
                    <p>Utgiftsramarna för de 27 utgiftsområdena i statens budget beräknas uppgå till totalt 1 347 miljarder kronor 2024. Det är 95 miljarder kronor mer än ramarna för 2023 i den av riksdagen ursprungligen beslutade budgeten för 2023. Därefter har dock riksdagen beslutat om ändringar i statens budget för 2023, som tillsammans med regeringens förslag i propositionen Höständringsbudget för 2023 (prop. 2023/24:2) uppgår till 32 miljarder kronor. <br></br> <br></br>De takbegränsade utgifterna beräknas uppgå till 1 688 miljarder kronor 2024. Det är en ökning med 100 miljarder kronor jämfört med 2023. Ökningen beror främst på den makroekonomiska utvecklingen, inte minst den höga inflationen.<br></br><br></br>För 2023 beräknas utgifterna i statens budget bli 10 miljarder kronor högre jämfört med den av riksdagen ursprungligen beslutade budgeten för 2023 framför allt till följd av högre statsskuldsräntor.</p>
                </CardContent>
            </Card>

            <h1 className="font-bold text-4xl mt-20 bg-gradient-to-r from-cyan-500 to-blue-500 inline-block text-transparent bg-clip-text"> Kommande år </h1>
            <p className="font-semibold text-small text-slate-300 m-4">Statens budgetsaldo 2023–2027 (miljarder kronor)</p>
            <div className="pr-20 pl-20 w-2/3 mb-44">
                {/* @ts-ignore */}
                <Bar data={data.data1} options={option.option1} />
            </div>

            <div className="w-full sm:w-3/4 lg:w-1/2">
                <Card className="m-4 p+2">
                    <CardHeader>
                        <CardTitle>Budgetprocessens Händelseförlopp</CardTitle>
                        <CardDescription className="text-sm"><span className='bg-gradient-to-r from-cyan-500 to-blue-500 inline-block text-transparent bg-clip-text'>Budgetarbetet under året inom Finansdepartementet och Riksdagen.</span></CardDescription>
                    </CardHeader>
                    <CardContent>

                        <ul>
                            <li><span className='bg-gradient-to-r from-cyan-500 to-blue-500 inline-block text-transparent bg-clip-text font-bold'>December</span><br></br>Finansdepartementet redovisar prognoser för samhällsekonomin.</li>
                            <br></br>
                            <li><span className='bg-gradient-to-r from-cyan-500 to-blue-500 inline-block text-transparent bg-clip-text font-bold'>Januari</span><br></br>Finansdepartementet fortsätter att arbeta med prognoserna. Det gör även respektive departement för sina.</li>
                            <br></br>
                            <li><span className='bg-gradient-to-r from-cyan-500 to-blue-500 inline-block text-transparent bg-clip-text font-bold'>Febrauri</span><br></br>Regeringen fortsätter med det förberedande budgetarbetet. Myndigheterna lämnar in årsredovisningar och budgetunderlag till regeringen.</li>
                            <br></br>
                            <li><span className='bg-gradient-to-r from-cyan-500 to-blue-500 inline-block text-transparent bg-clip-text font-bold'>Mars</span><br></br>Regeringen har överläggning och enas om huvuddragen i den ekonomiska politiken och budgetpolitiken.</li>
                            <br></br>
                            <li><span className='bg-gradient-to-r from-cyan-500 to-blue-500 inline-block text-transparent bg-clip-text font-bold'>April</span><br></br>Regeringen lämnar över den ekonomiska vårpropositionen, VÅP:en, och årsredovisning för staten till riksdagen.</li>
                            <br></br>
                            <li><span className='bg-gradient-to-r from-cyan-500 to-blue-500 inline-block text-transparent bg-clip-text font-bold'>Maj</span><br></br>Riksdagen fortsätter att behandla VÅP:en. Budgetarbetet fortsätter i de olika departementen. Oppositionen lägger fram alternativ till regeringens förslag i VÅP:en.</li>
                            <br></br>
                            <li><span className='bg-gradient-to-r from-cyan-500 to-blue-500 inline-block text-transparent bg-clip-text font-bold'>Juni</span><br></br>Riksdagen fattar beslut om den ekonomiska VÅP:en och årsredovisningen för staten. Regeringen håller regeringsöverläggningar.</li>
                            <br></br>
                            <li><span className='bg-gradient-to-r from-cyan-500 to-blue-500 inline-block text-transparent bg-clip-text font-bold'>Juli</span><br></br>Paus i budgetarbetet.</li>
                            <br></br>
                            <li><span className='bg-gradient-to-r from-cyan-500 to-blue-500 inline-block text-transparent bg-clip-text font-bold'>Augusti</span><br></br>Regeringen fortsätter budgetarbetet.</li>
                            <br></br>
                            <li><span className='bg-gradient-to-r from-cyan-500 to-blue-500 inline-block text-transparent bg-clip-text font-bold'>September</span><br></br>Regeringen lämnar budgetproposition till riksdagen.</li>
                            <br></br>
                            <li><span className='bg-gradient-to-r from-cyan-500 to-blue-500 inline-block text-transparent bg-clip-text font-bold'>Oktober</span><br></br>Riksdagen behandlar budgetpropositionen. Oppositionen lägger fram olika alternativ till regeringens budgetförslag.</li>
                            <br></br>
                            <li><span className='bg-gradient-to-r from-cyan-500 to-blue-500 inline-block text-transparent bg-clip-text font-bold'>November</span><br></br>Riksdagen beslutar om ramar för utgiftsområden. Departementen förbereder utformningen av regleringsbreven.</li>
                            <br></br>
                            <li><span className='bg-gradient-to-r from-cyan-500 to-blue-500 inline-block text-transparent bg-clip-text font-bold'>December</span><br></br>Riksdagen beslutar om anslag till statsbudgeten. Regeringen ger myndigheterna i uppdrag att verkställa den beslutade budgeten.</li>
                        </ul>
                    </CardContent>
                </Card>
            </div>
            <div className="w-full sm:w-3/4 lg:w-1/2">
                <Card className="m-4 p+2">
                    <CardHeader>
                        <CardTitle>Om datan</CardTitle>
                        <CardDescription className="text-sm"><span className='bg-gradient-to-r from-cyan-500 to-blue-500 inline-block text-transparent bg-clip-text'>Vart kommer datan ifrån?</span></CardDescription>
                    </CardHeader>
                    <CardContent>
                        <p> Data hämtas från Regeringens proposition 2023/24:1 - Budgetpropositionen för 2024, utgiven den 15 september 2023 i Stockholm. Cirkeldiagrammet och händelseförloppet baseras på information från Wikipedia - Sveriges statsbudget och i sin tur Regeringskansliets årsbok 2020, s 59.</p>
                    </CardContent>
                    <CardContent>
                        <Link href="https://www.regeringen.se/contentassets/e1afccd2ec7e42f6af3b651091df139c/budgetpropositionen-for-2024-hela-dokumentet-prop.2023241.pdf" target="_blank">
                            <Button variant="outline" className='m-1 bg-gradient-to-r from-cyan-500 to-blue-500 text-white'>Budget proposition</Button>
                        </Link>
                        <Link href="https://sv.wikipedia.org/wiki/Sveriges_statsbudget" target="_blank">
                            <Button variant="outline" className='m-1 bg-gradient-to-r from-cyan-500 to-blue-500 text-white'>Wikipedia - Sveriges Statsbudget</Button>
                        </Link>
                    </CardContent>
                </Card>
            </div>
        </div>
    );
}

