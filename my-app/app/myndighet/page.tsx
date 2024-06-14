import React, { Suspense } from "react";
import CompleteMenu from '@/components/Main/completeMenu';
import Logo from '@/components/Main/logo';
import Footer from '@/components/Main/footer';
import ClientSideComponent from "@/components/DatabaseComponents/ClientSideComponent";

const fetchMyndigheter = async () => {
    try {
        const res = await fetch("http://localhost:3000/api/myndigheter?fields=name,_id,relation,created,rule,info,org", {
            method: "GET",
            next: { revalidate: 10 }
        });
        const data = await res.json();
        return data.myndighet;
    } catch (error) {
        console.error("Error fetching myndigheter:", error);
        return [];
    }
};

const MyndigheterComponent = async () => {

    const myndigheter = await fetchMyndigheter();

    if (!myndigheter) {
        return <p className="font-bold mt-10 text-red-600 flex justify-center items-center">Ett oväntat fel har inträffat - Besök oss vid ett senare tillfälle.</p>;
    }

    return (
        <div>
            <ClientSideComponent myndigheter={myndigheter} />
        </div>
    );
};

export default function Page() {

    return (
        <div>
            <Logo />
            <CompleteMenu />
            <Suspense fallback={<p className="font-bold mt-10 text-black flex justify-center items-center">Laddar data...</p>}>
                <MyndigheterComponent />
            </Suspense>
            <Footer />
        </div>
    );
}
