import React from "react";
import CompleteMenu from '@/components/Main/completeMenu';
import Logo from '@/components/Main/logo';
import Footer from '@/components/Main/footer';
import TipsCom from '@/components/Other/tipsCom';
import Head from 'next/head'

export default function Page() {
  return (
    <div>
      <Head>
        <title>Tips - Myndighetshandboken</title>
      </Head>
      <Logo />
      <CompleteMenu />
      <TipsCom />
      <Footer />
    </div>
  );
}