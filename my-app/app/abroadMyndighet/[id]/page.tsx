import CompleteMenu from "@/components/Main/completeMenu";
import Logo from "@/components/Main/logo";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Link from "next/link";
import Footer from "@/components/Main/footer";

export default async function Page({ params }: any) {

  const fetchAMyndigheter = async () => {
    try {
      const res = await fetch(`https://myndighetshandboken.se/api/Amyndigheter/${params.id}`, {
        method: "GET",
        cache: "no-cache",
        headers: {
          "Cache-Control": "max-age=3600"
        }
      });

      if (!res.ok) {
        const errorText = await res.text();
        console.error("Error response:", errorText);
        throw new Error(`Error fetching myndigheter: ${res.status}`);
      }

      const data = await res.json();

      return data.Amyndighet;
    } catch (error) {
      console.error("Error fetching myndigheter:", error);
      return [];
    }
  };

  const data = await fetchAMyndigheter();

  return (
    <div>
      <div>
        <Logo />
        <CompleteMenu />
      </div>
      <Link href="/abroadMyndighet">
        <Button variant="outline" className='mt-8 ml-8 bg-gradient-to-r from-cyan-500 to-blue-500 text-white'>Tillbaka</Button>
      </Link>
      <div className="mx-auto w-4/5 ">
        <div className="mx-auto w-4/5 flex justify-center items-center mt-10">
          <div className="grid grid-cols-1 gap-10 items-center">
            <p className="2xl:text-4xl xl:text-3xl lg:text-2xl md:text-xl font-bold text-center">{data.Country} - {data.City}</p>
            <p className="mt-3 text-lg font-base text-center">{data.Type}</p>
          </div>
        </div>
        <div className="flex justify-center items-center">
          <Card className='grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 mt-10 mb-96 p-5'>
            <div className="m-3">
              {data.Email && (
                <div className="flex justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6 mr-2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
                  </svg>
                  <p className="text-base">{data.Email}</p>
                </div>
              )}
            </div>
            <div className="m-3">
              {data.Phone && (
                <div className="flex justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6 mr-2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
                  </svg>
                  <p className="text-base">{data.Phone}</p>
                </div>
              )}
            </div>
            <div className="m-3">
              {data.Web && (
                <Link className="text-base" href={data.Web} target="_blank">
                  <div className="flex justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6 mr-2">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 0 0 3 8.25v10.5A2.25 2.25 0 0 0 5.25 21h10.5A2.25 2.25 0 0 0 18 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
                    </svg>
                    <p className="">Läs mer på Swedenabroad.se</p>
                  </div>
                </Link>
              )}
            </div>
          </Card>
        </div>
      </div>
      <Footer />
    </div>
  );
}
