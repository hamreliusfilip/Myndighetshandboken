'use client';

import React from 'react';
import Link from 'next/link';
import { Bar } from 'react-chartjs-2';
import { Chart, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import data from '../../Assets/Data/StatisticsData.json';
import option from '../../Assets/Data/StatisticsOptions.json';

Chart.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

export default function Graph() {
  return (
    <div className="text-center">
      <div className="mb-8">
        <h1 className="font-bold text-4xl mt-20 bg-gradient-to-r from-cyan-500 to-blue-500 inline-block text-transparent bg-clip-text px-1 pb-1"> Generell statistik - Myndigheter </h1>
        <p className='text-center font-normal text-l mt-5'> Data över ledningsform, verksamhetsområde <br></br> och antal myndigheter genom åren.</p>
        <hr className="w-96 h-1 mx-auto my-4 bg-gradient-to-r from-cyan-500 to-blue-500 border-0 rounded md:my-10 dark:bg-gray-700" />
      </div>
      <div className="grid grid-cols-2 gap-8 p-10">
        <div>
          {/* @ts-ignore */}
          <Bar data={data.data8} options={option.option8} />
        </div>
        <div>
          {/* @ts-ignore */}
          <Bar data={data.data7} options={option.option7} />
        </div>
        <div>
          {/* @ts-ignore */}
          <Bar data={data.data10} options={option.option10} />
        </div>
      </div>
      <div className="mb-8">
        <h1 className="font-bold text-4xl mt-20 bg-gradient-to-r from-cyan-500 to-blue-500 inline-block text-transparent bg-clip-text px-1 pb-1"> Allmänhetens uppfattning </h1>
        <p className='text-center font-normal text-l mt-5'> Allmänhetens uppfattning om tio myndigheter.</p>
        <hr className="w-96 h-1 mx-auto my-4 bg-gradient-to-r from-cyan-500 to-blue-500 border-0 rounded md:my-10 dark:bg-gray-700" />
      </div>
      <div className="grid grid-cols-2 gap-8 p-10">
        <div>
          {/* @ts-ignore */}
          <Bar data={data.data6} options={option.option6} />
        </div>
        <div>
          {/* @ts-ignore */}
          <Bar data={data.data11} options={option.option11} />
        </div>
      </div>
      <div className="mb-8">
        <h1 className="font-bold text-4xl mt-20 bg-gradient-to-r from-cyan-500 to-blue-500 inline-block text-transparent bg-clip-text px-1 pb-1"> Jämställdhet i myndigheterna </h1>
        <p className='text-center font-normal text-l mt-5'> Data om könsfördelningen inom den statliga sektorn, <br></br> inklusive en åldersmässig kontext.</p>
        <hr className="w-96 h-1 mx-auto my-4 bg-gradient-to-r from-cyan-500 to-blue-500 border-0 rounded md:my-10 dark:bg-gray-700" />
      </div>
      <div className="grid grid-cols-2 gap-8 p-10">
        <div>
          {/* @ts-ignore */}
          <Bar data={data.data2} options={option.option2} />
        </div>
        <div>
          {/* @ts-ignore */}
          <Bar data={data.data1} options={option.option1} />
        </div>
        <div>
          {/* @ts-ignore */}
          <Bar data={data.data5} options={option.option5} />
        </div>
      </div>
      <div className="mb-8">
        <h1 className="font-bold text-4xl mt-20 bg-gradient-to-r from-cyan-500 to-blue-500 inline-block text-transparent bg-clip-text px-1 pb-1"> Anställda i myndigheterna </h1>
        <p className='text-center font-normal text-l mt-5'> Data över antal anställda inom olika områden.</p>
        <hr className="w-96 h-1 mx-auto my-4 bg-gradient-to-r from-cyan-500 to-blue-500 border-0 rounded md:my-10 dark:bg-gray-700" />
      </div>
      <div className="grid grid-cols-2 gap-8 p-10">
        <div>
          {/* @ts-ignore */}
          <Bar data={data.data3} options={option.option3} />
        </div>
        <div>
          {/* @ts-ignore */}
          <Bar data={data.data4} options={option.option4} />
        </div>
        <div>
          {/* @ts-ignore */}
          <Bar data={data.data9} options={option.option9} />
        </div>
        <div>
          {/* @ts-ignore */}
          <Bar data={data.data12} options={option.option12} />
        </div>
      </div>
      <div className="flex justify-center pt-16">
        <div className="w-full sm:w-3/4 lg:w-1/2">
          <Card className="m-4 p+2 text-left">
            <CardHeader>
              <CardTitle>Om datan</CardTitle>
              <CardDescription className="text-sm bg-gradient-to-r from-cyan-500 to-blue-500 inline-block text-transparent bg-clip-text">Vart kommer statistiken ifrån?</CardDescription>
            </CardHeader>
            <CardContent>
              <p> Data är tagen direkt ur statskontorets rapport: "Statsförvaltningen i korthet" - 2023 samt från Statskontorets hemsida. Graferna representeras på samma sätt som i rapporten. </p>
            </CardContent>
            <CardContent>
              <Link href="https://www.statskontoret.se/publicerat/publikationer/publikationer-2023/statsforvaltningen-i-korthet-2023/" target="_blank">
                <Button variant="outline" className='m-1 bg-gradient-to-r from-cyan-500 to-blue-500 text-white'>Statskontoret - Rapport</Button>
              </Link>
              <Link href="https://www.statskontoret.se" target="_blank">
                <Button variant="outline" className='m-1 bg-gradient-to-r from-cyan-500 to-blue-500 text-white'>Statskontoret - Hemsida</Button>
              </Link>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}

