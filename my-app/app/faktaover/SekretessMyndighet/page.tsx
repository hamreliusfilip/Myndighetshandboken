import React from "react";
import CompleteMenu from '@/components/Main/completeMenu';
import Logo from '@/components/Main/logo';
import Footer from '@/components/Main/footer';
import SecComp from '@/components/Other/secret';
import Head from 'next/head'

export default function Page() {
  return (
    <div>
      <Head>
        <title>Hemliga myndigheter - Myndighetshandboken</title>
      </Head>
      <Logo />
      <CompleteMenu />
      <SecComp />
      <Footer />
    </div>
  );
}
