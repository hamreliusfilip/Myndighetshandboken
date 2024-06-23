import React from "react";
import CompleteMenu from '../../../components/Main/completeMenu';
import Logo from '../../../components/Main/logo';
import Footer from '../../../components/Main/footer';
import AboutRiks from '../../../components/Other/aboutRiks';
import Head from 'next/head'

export default function Page() {
  return (
    <div>
      <Head>
        <title>Riksdagen - Myndighetshandboken</title>
      </Head>
      <Logo />
      <CompleteMenu />
      <AboutRiks />
      <Footer />
    </div>
  );
}
