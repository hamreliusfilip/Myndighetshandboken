import React from "react";
import CompleteMenu from '../../../components/Main/completeMenu';
import Logo from '../../../components/Main/logo';
import Footer from '../../../components/Main/footer';
import GenericText from '@/components/Other/genricTextCom';
import Head from 'next/head'

export default function Page() {
  return (
    <div>
      <Head>
        <title>Internationella Relationer - Myndighetshandboken</title>
      </Head>
      <Logo />
      <CompleteMenu />
      <div className="text-center">
        <h1 className="font-bold text-4xl mt-20 bg-gradient-to-r from-cyan-500 to-blue-500 inline-block text-transparent bg-clip-text px-1 pb-1"> Internationella Relationer </h1>
        <p className='text-center font-normal text-l mt-5'> Grundläggande information om <br></br> Sveriges största internationella samarbeten.</p>
      </div>
      <GenericText type={"Inter"} />
      <Footer />
    </div>
  );
}