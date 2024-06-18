import CompleteMenu from "@/components/Main/completeMenu";
import Logo from "@/components/Main/logo";
import { Button } from "@/components/ui/button";
import { Card, CardDescription } from "@/components/ui/card";
import Link from "next/link";
import Footer from "@/components/Main/footer";

export default async function Page({ params }: any) {

  const fetchMyndigheter = async () => {

    try {
      const res = await fetch(`https://myndighetshandboken.se/api/myndigheter/${params.id}`, {
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

  return (
    <>
      <div>
        <Logo />
        <CompleteMenu />
      </div>
      <Link href="/myndighet">
        <Button variant="outline" className='mt-8 ml-5 mb-10 bg-gradient-to-r from-cyan-500 to-blue-500 text-white'>Tillbaka</Button>
      </Link>
      <div className="mx-auto w-full md:w-4/5">
        <div className="mx-auto w-4/5 flex justify-center items-center">
          <div className="grid grid-cols-1 gap-10 items-center">
            <p className="text-2xl 2xl:text-4xl xl:text-3xl font-bold text-center">{data.name}</p>
            {data.name ? (
              <div className="flex justify-center">
                <img className="h-auto max-h-40 max-w-96 lg:w-auto max-w-md" src={data.logo_url} alt="" />
              </div>
            ) : null}
          </div>
        </div>

        <div className="grid lg:grid-cols-1 xl:grid-cols-2 gap-5 mt-10">
          <div>
            <Card className="h-96 m-2">
              <div className='grid md:grid-cols-2 grid-cols-1 gap-4 p-5 overflow-y-auto'>
                {data.relation && (
                  <div className="col-span-1">
                    <p className="text-m font-bold">Departement:</p>
                    <p>{data.relation}</p>
                  </div>
                )}

                {data.created && (
                  <div className="col-span-1">
                    <p className="text-m font-bold">Grundat:</p>
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
                    <p className="text-m font-bold">Org nr:</p>
                    <p>{data.org}</p>
                  </div>
                )}
              </div>

              <div className="grid grid-cols-1 gap-2 pl-5">
                {data.web && (
                  <Link className="text-xs" href={`https://${data.web}`} target="_blank">
                    <div className="flex items-center">

                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6 mr-2">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 0 0 3 8.25v10.5A2.25 2.25 0 0 0 5.25 21h10.5A2.25 2.25 0 0 0 18 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
                      </svg>
                      Hemsida
                    </div>
                  </Link>
                )}
                {data.epost && (
                  <div className="flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="black" className="size-6 mr-2">
                      <path d="M1.5 8.67v8.58a3 3 0 0 0 3 3h15a3 3 0 0 0 3-3V8.67l-8.928 5.493a3 3 0 0 1-3.144 0L1.5 8.67Z" />
                      <path d="M22.5 6.908V6.75a3 3 0 0 0-3-3h-15a3 3 0 0 0-3 3v.158l9.714 5.978a1.5 1.5 0 0 0 1.572 0L22.5 6.908Z" />
                    </svg>
                    <Link className="text-xs" href={`mailto:${data.epost}`}>{data.epost}</Link>
                  </div>
                )}
                {data.tele && (
                  <div className="flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6 mr-2">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
                    </svg>
                    <Link className="text-xs" href={`tel:${data.tele}`}>{data.tele}</Link>
                  </div>
                )}
              </div>
            </Card>
          </div>
          <div>
            <Card className='h-96 m-2 p-5 overflow-y-auto'>
              <CardDescription>{data.info}</CardDescription>
            </Card>
          </div>
        </div >
      </div >
      <Footer />
    </>
  );
}

// ---