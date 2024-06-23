import React from "react";
import CompleteMenu from '../../../components/Main/completeMenu';
import Logo from '../../../components/Main/logo';
import Footer from '../../../components/Main/footer';
import PolCom from '../../../components/Other/politics';
import Head from 'next/head'

export default function Page() {
  return (
    <div>
      <Head>
        <title>Riksdagspartierna - Myndighetshandboken</title>
      </Head>
      <Logo />
      <CompleteMenu />
      <PolCom />
      <Footer />
    </div>
  );
}
