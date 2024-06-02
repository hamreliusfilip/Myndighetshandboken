import CompleteMenu from "@/components/Main/completeMenu";
import Logo from "@/components/Main/logo";
import { Button } from "@/components/ui/button";
import { Card,CardDescription } from "@/components/ui/card";
import Link from "next/link";
import Footer from "@/components/Main/footer";

export default async function Page({ params }: any) {

  const fetchMyndigheter = async () => {

    try {
      const res = await fetch(`http://localhost:3000/api/myndigheter/${params.id}`, {
        method: "GET",
        cache: "no-cache",
        headers: {
          "Cache-Control": "max-age=3600"
        }
      });
      const data = await res.json();

      return data.myndighet;
    } catch (error) {
      console.error("Error fetching myndigheter:", error);
      return [];
    }
  }

  const data = await fetchMyndigheter();
  const base64String = data.logo_url;

  return (
    <>
      <div>
        <Logo />
        <CompleteMenu />
      </div>
      <Link href="/myndighet">
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
            <Card className='grid grid-cols-2 gap-10 p-5  h-96 overflow-y-auto'>
              {data.relation && (
                <div className="col-span-1">
                  <p className="text-m font-bold">Tillhörande departement:</p>
                  <p>{data.relation}</p>
                </div>
              )}

              {data.created && (
                <div className="col-span-1">
                  <p className="text-m font-bold">Skapades:</p>
                  <p>{data.created}</p>
                </div>
              )}

              {data.rule && (
                <div className="col-span-1">
                  <p className="text-m font-bold">Ledning:</p>
                  <p>{data.rule}</p>
                </div>
              )}

              {data.org && (
                <div className="col-span-1">
                  <p className="text-m font-bold">Organisations nummer:</p>
                  <p>{data.org}</p>
                </div>
              )}

              <div className="col-span-2 grid grid-cols-[auto,auto,auto] gap-2">
                {data.web && (
                  <div className="flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5 mr-2">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 0 0 8.716-6.747M12 21a9.004 9.004 0 0 1-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 0 1 7.843 4.582M12 3a8.997 8.997 0 0 0-7.843 4.582m15.686 0A11.953 11.953 0 0 1 12 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0 1 21 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0 1 12 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 0 1 3 12c0-1.605.42-3.113 1.157-4.418" />
                    </svg>
                    <Link className="text-xs" href={`https://${data.web}`} target="_blank">{data.web}</Link>
                  </div>
                )}

                {data.epost && (
                  <div className="flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 mr-2">
                      <path d="M1.5 8.67v8.58a3 3 0 0 0 3 3h15a3 3 0 0 0 3-3V8.67l-8.928 5.493a3 3 0 0 1-3.144 0L1.5 8.67Z" />
                      <path d="M22.5 6.908V6.75a3 3 0 0 0-3-3h-15a3 3 0 0 0-3 3v.158l9.714 5.978a1.5 1.5 0 0 0 1.572 0L22.5 6.908Z" />
                    </svg>
                    <Link className="text-xs" href={`mailto:${data.epost}`}>{data.epost}</Link>
                  </div>
                )}

                {data.tele && (
                  <div className="flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5 mr-2">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
                    </svg>
                    <Link className="text-xs" href={`tel:${data.tele}`}>{data.tele}</Link>
                  </div>
                )}

              </div>
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
