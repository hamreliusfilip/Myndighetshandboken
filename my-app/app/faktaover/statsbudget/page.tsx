import React from "react";
import CompleteMenu from '../../../components/Main/completeMenu';
import Logo from '../../../components/Main/logo';
import Footer from '../../../components/Main/footer';
import Budget from "../../../components/Other/budget";
import Head from 'next/head'

export default function Home() {

    return (
        <div>
            <Head>
                <title>Statsbudget - Myndighetshandboken</title>
            </Head>
            <Logo />
            <CompleteMenu />
            <Budget />
            <Footer />
        </div>
    );
}
