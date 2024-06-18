import React, { Suspense } from "react";
import CompleteMenu from '@/components/Main/completeMenu';
import Logo from '@/components/Main/logo';
import Footer from '@/components/Main/footer';
import ClientSideComponentEmb from "@/components/DatabaseComponents/ClientSideComponentEmb";

const fetchAMyndigheter = async () => {
    try {
        const res = await fetch("https://myndighetshandboken.se/api/Amyndigheter?fields=Country,_id,City,Type", {
            method: "GET",
            next: { revalidate: 10 }
        });
        const data = await res.json();
        return data.Amyndighet;
    } catch (error) {
        console.error("Error fetching abroad myndigheter:", error);
        return [];
    }
};

const AMyndigheterComponent = async () => {
    const Amyndigheter = await fetchAMyndigheter();

    return (
        <div>
            <ClientSideComponentEmb Amyndigheter={Amyndigheter} />
        </div>
    );
};

export default function Page() {

    return (
        <div>
            <Logo />
            <CompleteMenu />
            <Suspense fallback={<p className="font-bold mt-10 text-black flex justify-center items-center">Laddar data...</p>}>
                <AMyndigheterComponent />
            </Suspense>
            <Footer />
        </div>
    );
}