import React from "react";
import CompleteMenu from '../../../components/Main/completeMenu';
import Logo from '../../../components/Main/logo';
import Footer from '../../../components/Main/footer';
import Graph from "../../../components/Other/graph";
import Head from 'next/head'

export default function Home() {

  return (
    <div>
      <Head>
        <title>Myndighets statistik - Myndighetshandboken</title>
      </Head>
      <Logo />
      <CompleteMenu /> 
      <Graph />
      <Footer />
    </div>
  );
}
