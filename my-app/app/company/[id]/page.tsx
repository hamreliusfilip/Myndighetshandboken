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
    const web = data.web.replace('www.', '');

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
                <div className="mx-auto w-4/5 flex justify-center items-center">
                    <div className="grid grid-cols-1 gap-10 items-center">
                        <p className="2xl:text-4xl xl:text-3xl lg:text-2xl md:text-xl font-bold text-center">{data.name}</p>
                        {base64String ? (
                            <div className="flex justify-center">
                                 <img className="h-auto max-h-40 w-auto max-w-md" src={base64String} alt="Base64 Encoded" />
                            </div>
                        ) : null}
                    </div>
                </div>
                <div className="grid grid-cols-2 gap-10 mt-10">
                    <div>
                        <p className="text-xl font-bold mb-5">Snabb Fakta</p>
                        <Card className='grid grid-cols-1 gap-10 p-5  h-96 overflow-y-auto'>
                            {data.created && (
                                <div className="col-span-1">
                                    <p className="text-m font-bold">Skapades:</p>
                                    <p>{data.created}</p>
                                </div>
                            )}
                            {data.owner && (
                                <div className="col-span-1">
                                    <p className="text-m font-bold">Ägande:</p>
                                    <p>{data.owner}</p>
                                </div>
                            )}
                            {data.org && (
                                <div className="col-span-1">
                                    <p className="text-m font-bold">Organisations nummer:</p>
                                    <p>{data.org}</p>
                                </div>
                            )}
                            {data.web && (
                                <div className="flex items-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5 mr-2">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 0 0 8.716-6.747M12 21a9.004 9.004 0 0 1-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 0 1 7.843 4.582M12 3a8.997 8.997 0 0 0-7.843 4.582m15.686 0A11.953 11.953 0 0 1 12 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0 1 21 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0 1 12 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 0 1 3 12c0-1.605.42-3.113 1.157-4.418" />
                                    </svg>
                                    <Link className="text-xs" href={data.web} target="_blank">{data.web}</Link>
                                </div>
                            )}
                        </Card>
                    </div>
                    <div>
                        <p className="text-xl font-bold mb-5">Generell fakta</p>
                        <Card className='p-5 h-96 overflow-y-auto'>
                            <CardDescription>{data.info}</CardDescription>
                        </Card>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
}
