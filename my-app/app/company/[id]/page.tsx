import CompleteMenu from "@/components/Main/completeMenu";
import Logo from "@/components/Main/logo";
import Footer from "@/components/Main/footer";
import { Button } from "@/components/ui/button";
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";

export default async function Page({ params }: any) {

    const fetchCompanies = async () => {
        try {
            const res = await fetch(`http://localhost:3000/api/companies/${params.id}`, {
                method: "GET",
                cache: "no-cache"
            });
            const data = await res.json();
            return data.company;
        } catch (error) {
            console.error("Error fetching companies:", error);
            return [];
        }
    }

    const data = await fetchCompanies();
    const base64String = data.img;

    return (
        <>
            <div>
                <Logo />
                <CompleteMenu />
            </div>
            <Link href="/company">
                <Button variant="outline" className='mt-8 ml-8 bg-gradient-to-r from-cyan-500 to-blue-500 text-white'>Tillbaka</Button>
            </Link>
            <div className="mx-auto w-4/5 ">
                <div className="mx-auto w-4/5 flex justify-center items-center mt-10">
                    <div className="grid grid-cols-1 gap-10 items-center">
                        <p className="2xl:text-4xl xl:text-3xl text-2xl font-bold text-center">{data.name}</p>
                        {base64String ? (
                            <div className="flex justify-center">
                                <img className="h-auto max-h-40 w-auto max-w-sm" src={base64String} alt="Base64 Encoded" />
                            </div>
                        ) : null}
                    </div>
                </div>
                <div className="grid grid-cols-1 gap-5 mt-10">
                    <div>
                        <div className="flex justify-center">
                            <Card className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10 p-5 w-full'>
                                {data.created && (
                                    <div className="col-span-1">
                                        <p className="text-m font-bold">Grundat:</p>
                                        <p className="text-base">{data.created}</p>
                                    </div>
                                )}
                                {data.org && (
                                    <div className="col-span-1">
                                        <p className="text-m font-bold">Org nr:</p>
                                        <p className="text-base">{data.org}</p>
                                    </div>
                                )}
                                {data.owner && (
                                    <div className="col-span-1">
                                        <p className="text-m font-bold">Ägande:</p>
                                        <p className="text-base">{data.owner}</p>
                                    </div>
                                )}
                                {data.web && (
                                    <div className="col-span-1">
                                        <p className="text-m font-bold">Hemsida:</p>
                                        <Link className="text-xs" href={data.web} target="_blank">
                                            <div className="flex justify-start items-left">
                                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                                                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 0 0 3 8.25v10.5A2.25 2.25 0 0 0 5.25 21h10.5A2.25 2.25 0 0 0 18 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
                                                </svg>
                                            </div>
                                        </Link>
                                    </div>
                                )}
                            </Card>
                        </div>
                    </div>
                    <div>
                        <Card className='p-5 h-96 overflow-y-auto'>
                            <CardDescription>{data.info}</CardDescription>
                        </Card>
                    </div>
                </div>
            </div >
            <Footer />
        </>
    );
}
