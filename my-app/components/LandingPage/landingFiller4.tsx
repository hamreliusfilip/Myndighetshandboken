import { motion, useTransform, useScroll } from "framer-motion";
import { useRef } from "react";
import { Card } from "@/components/ui/card";
import Link from "next/link";
import { Button } from "@/components/ui/button";


interface CardProps {
    cardDA: any;
}


const landingFiller4 = () => {
    return (
        <div className=" mb-80">
            <HorizontalScrollCarousel />
        </div>
    );
};

const HorizontalScrollCarousel = () => {
    const targetRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: targetRef,
    });

    const x = useTransform(scrollYProgress, [0, 1], ["1%", "-95%"]);

    return (
        <section ref={targetRef} className="relative h-[300vh] bg-white">
            <div className="sticky top-0 flex h-screen items-center overflow-hidden">
                <motion.div style={{ x }} className="flex gap-4">
                    {cards.map((cardDA) => {
                        return <Cardcomp cardDA={cardDA} key={cardDA.id} />;
                    })}
                </motion.div>
            </div>
        </section>
    );
};

const Cardcomp: React.FC<CardProps> = ({ cardDA }) => {
    return (
        <div
            key={cardDA.id}>
            <Card className="bg-gradient-to-r from-cyan-500 to-blue-500 w-120 h-120 flex justify-center items-center text-center">
                <div className='flex flex-col justify-center items-center'>


                    <p className="text-5xl font-bold text-white">{cardDA.title}</p>


                    <p className='text-slate-200 font-base text-xl mt-10 w-2/3 mx-auto'>{cardDA.description}</p>

                    <div className="mt-10">
                        <Link href={cardDA.link}>
                            <Button variant="outline" className='bg-white text-black'>Läs mer</Button>
                        </Link>
                    </div>
                </div>

            </Card>
        </div >
    );
};

export default landingFiller4;

const cards = [
    {
        id: 1,
        title: "Statens bolagsportfölj",
        description: "Utforska statens bolagsportfölj och dess olika företag. Vilka bolag är statligt ägda och hur mycket omsätter dem?",
        link: "/faktaover/statistikForetag",
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-10">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m-3-2.818.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
            </svg>

        ),
    },
    {
        id: 2,
        title: "Trovärdiga källor & Tips",
        description: "Våra tips på trovärdiga källor och hemsidor - allt från nyheter till väder - för att du ska kunna känna dig trygg med informationen du tar del av.",
        link: "/faktaover/Tips",
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-10 ml-3">
                <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.438 60.438 0 0 0-.491 6.347A48.62 48.62 0 0 1 12 20.904a48.62 48.62 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a50.636 50.636 0 0 0-2.658-.813A59.906 59.906 0 0 1 12 3.493a59.903 59.903 0 0 1 10.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0 1 12 13.489a50.702 50.702 0 0 1 7.74-3.342M6.75 15a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm0 0v-3.675A55.378 55.378 0 0 1 12 8.443m-7.007 11.55A5.981 5.981 0 0 0 6.75 15.75v-1.5" />
            </svg>

        ),
    },
    {
        id: 3,
        title: "Riksdagen & Votering",
        description: "Utforska tidigare riksdagsval och annan statistik. Frächa upp dina kunskaper om riksdagen och regeringen.",
        link: "/faktaover/riksdagen",
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-10">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5m-9-6h.008v.008H12v-.008ZM12 15h.008v.008H12V15Zm0 2.25h.008v.008H12v-.008ZM9.75 15h.008v.008H9.75V15Zm0 2.25h.008v.008H9.75v-.008ZM7.5 15h.008v.008H7.5V15Zm0 2.25h.008v.008H7.5v-.008Zm6.75-4.5h.008v.008h-.008v-.008Zm0 2.25h.008v.008h-.008V15Zm0 2.25h.008v.008h-.008v-.008Zm2.25-4.5h.008v.008H16.5v-.008Zm0 2.25h.008v.008H16.5V15Z" />
            </svg>

        ),
    },
    {
        id: 4,
        title: "Myndigheter vs Statliga företag",
        description: "Vad är skillnaden mellan en myndighet och ett statligt företag? Lär dig mer om de olika typerna av statliga organisationer.",
        link: "/faktaover/foretagMyndigheter",
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-10">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 5.25h.008v.008H12v-.008Z" />
            </svg>

        ),
    }
];