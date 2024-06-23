import React, { Suspense } from "react";
import CompleteMenu from '@/components/Main/completeMenu';
import Logo from '@/components/Main/logo';
import Footer from '@/components/Main/footer';
import ClientSideComponentCom from "@/components/DatabaseComponents/ClientSideComponentCom";
import Head from 'next/head'

const fetchCompanies = async () => {
    try {
        const res = await fetch("https://myndighetshandboken.se/api/companies?fields=name,_id,owner,created,org,info", {
            method: "GET",
            next: { revalidate: 10 }
        });
        const data = await res.json();
        return data.company;
    } catch (error) {
        console.error("Error fetching companies:", error);
        return [];
    }
};

const CompanyComponent = async () => {
    const companies = await fetchCompanies();

    if (!companies) {
        return <p className="font-bold mt-10 text-red-600 flex justify-center items-center">Ett oväntat fel har inträffat - Besök oss vid ett senare tillfälle.</p>;
    }

    return (
        <div>
            <ClientSideComponentCom companies={companies} />
        </div>
    );
};

export default function Page() {

    return (
        <div>
            <Head>
                <title>Företag - Myndighetshandboken</title>
            </Head>
            <Logo />
            <CompleteMenu />
            <Suspense fallback={<p className="font-bold mt-10 text-black flex justify-center items-center">Laddar data...</p>}>
                <CompanyComponent />
            </Suspense>
            <Footer />
        </div>
    );
}
