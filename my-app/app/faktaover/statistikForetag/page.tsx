import React from "react";
import CompleteMenu from '../../../components/Main/completeMenu';
import Logo from '../../../components/Main/logo';
import Footer from '../../../components/Main/footer';
import GraphForetag from '../../../components/Other/graphForetag';
import Head from 'next/head'

export default function Home() {

  return (
    <div>
      <Head>
        <title>Företags statistik - Myndighetshandboken</title>
      </Head>
      <Logo />
      <CompleteMenu /> 
      <GraphForetag />
      <Footer />
    </div>
  );
}
