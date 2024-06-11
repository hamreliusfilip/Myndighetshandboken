import React, { Suspense } from "react";
import CompleteMenu from '@/components/Main/completeMenu';
import Logo from '@/components/Main/logo';
import Footer from '@/components/Main/footer';
import { Card } from "@/components/ui/card";
import ClientSideComponentCom from "@/components/DatabaseComponents/ClientSideComponentCom";

const fetchCompanies = async () => {
    try {
        const res = await fetch("http://localhost:3000/api/companies?fields=name,_id,owner,created,org,info", {
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

    return (
        <div>
            <ClientSideComponentCom companies={companies} />
        </div>
    );
};

export default function Page() {

    return (
        <div>
            <Logo />
            <CompleteMenu />
            <Suspense fallback={<p className="font-bold mt-10 text-black flex justify-center items-center">Laddar data...</p>}>
                <CompanyComponent />
            </Suspense>
            <Footer />
        </div>
    );
}
