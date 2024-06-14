import React, { ReactNode, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Button } from "@/components/ui/button";
import Link from "next/link";

interface TextParallaxContentProps {
  imgUrl: string;
  subheading: string;
  heading: string;
  children: ReactNode;
}

export const TextParallaxContentExample: React.FC = () => {
  return (
    <div className="bg-white">
      <TextParallaxContent
        imgUrl="/Images/myndighet.png"
        // imgUrl="/Images/black.png"
        subheading="Sökmotor"
        heading="Myndigheter"
      >
        <Myndigheter />
      </TextParallaxContent>
      <TextParallaxContent
        imgUrl="/Images/company.png"
        subheading="Sökmotor"
        heading="Statliga företag"
      >
        <Statliga />
      </TextParallaxContent>
      <TextParallaxContent
        imgUrl="/Images/ambassad.png"
        subheading="Sökmotor"
        heading="Ambassader och generalkonsulat"
      >
        <Ambassader />
      </TextParallaxContent>
      <TextParallaxContent
        imgUrl="/Images/departement.png"
        subheading="Karta"
        heading="Departement"
      >
        <Departement />
      </TextParallaxContent>
    </div>
  );
};

const IMG_PADDING = 12;

const TextParallaxContent: React.FC<TextParallaxContentProps> = ({ imgUrl, subheading, heading, children }) => {
  return (
    <div
      style={{
        paddingLeft: IMG_PADDING,
        paddingRight: IMG_PADDING,
      }}
    >
      <div className="relative h-[150vh]">
        <StickyImage imgUrl={imgUrl} />
        <OverlayCopy heading={heading} subheading={subheading} />
      </div>
      {children}
    </div>
  );
};

interface StickyImageProps {
  imgUrl: string;
}

const StickyImage: React.FC<StickyImageProps> = ({ imgUrl }) => {
  const targetRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["end end", "end start"],
  });

  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.85]);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);

  return (
    <motion.div
      style={{
        backgroundImage: `url(${imgUrl})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: `calc(100vh - ${IMG_PADDING * 2}px)`,
        top: IMG_PADDING,
        scale,
      }}
      ref={targetRef}
      className="sticky z-0 overflow-hidden rounded-3xl"
    >
      <motion.div
        className="absolute inset-0 bg-neutral-950/70"
        style={{
          opacity,
        }}
      />
    </motion.div>
  );
};

interface OverlayCopyProps {
  subheading: string;
  heading: string;
}

const OverlayCopy: React.FC<OverlayCopyProps> = ({ subheading, heading }) => {
  const targetRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [250, -250]);
  const opacity = useTransform(scrollYProgress, [0.25, 0.5, 0.75], [0, 1, 0]);

  return (
    <motion.div
      style={{
        y,
        opacity,
      }}
      ref={targetRef}
      className="absolute left-0 top-0 flex h-screen w-full flex-col items-center justify-center text-white"
    >
      <p className="mb-2 text-center text-xl md:mb-4 md:text-3xl">
        {subheading}
      </p>
      <p className="text-center text-4xl font-bold md:text-7xl">{heading}</p>
    </motion.div>
  );
};

const Myndigheter: React.FC = () => (
  <div className="mx-auto grid max-w-5xl grid-cols-1 gap-8 px-4 pb-24 pt-12 md:grid-cols-12">
    <h2 className="col-span-1 text-3xl font-bold md:col-span-4">
      Avancerad och intuitiv sökmotor för sveriges alla myndigheter
    </h2>
    <div className="col-span-1 md:col-span-8">
      <p className="mb-4 text-xl text-neutral-600 md:text-2xl">
        Utforska de svenska myndigheterna som aldrig förr. En helt unik och ny databas med avancerade filter- och sökfunktioner.
      </p>
      <p className="mb-8 text-xl text-neutral-600 md:text-2xl">
        Bläddra bland 342 myndigheter med enkelhet.
      </p>
      <Link href="/myndighet">
        <Button className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white">
          Testa nu
        </Button>
      </Link>
    </div>
  </div> 
);

const Statliga: React.FC = () => (
  <div className="mx-auto grid max-w-5xl grid-cols-1 gap-8 px-4 pb-24 pt-12 md:grid-cols-12">
    <h2 className="col-span-1 text-3xl font-bold md:col-span-4">
      Sökmotor för statliga och delvis statliga företag
    </h2>
    <div className="col-span-1 md:col-span-8">
      <p className="mb-4 text-xl text-neutral-600 md:text-2xl">
        Hur bra koll har du på de statliga företagen? Utforska samtliga i våran sökmotor för företag.
      </p>
      <p className="mb-8 text-xl text-neutral-600 md:text-2xl">
        Egen databas, utan motstycke.
      </p>
      <Link href="/company">
        <Button className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white">
          Testa nu
        </Button>
      </Link>
    </div>
  </div>
);

const Ambassader: React.FC = () => (
  <div className="mx-auto grid max-w-5xl grid-cols-1 gap-8 px-4 pb-24 pt-12 md:grid-cols-12">
    <h2 className="col-span-1 text-3xl font-bold md:col-span-4">
      Sökmotor för utandsmyndigheter
    </h2>
    <div className="col-span-1 md:col-span-8">
      <p className="mb-4 text-xl text-neutral-600 md:text-2xl">
        Utforska och lär dig om vart Svergie har ambassader och generalkonsulat. Bläddra bland 100+ ambassader.
      </p>
      <p className="mb-8 text-xl text-neutral-600 md:text-2xl">
        En unik databas med allt du behöver veta.
      </p>
      <Link href="/abroadMyndighet">
        <Button className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white">
          Testa nu
        </Button>
      </Link>
    </div>
  </div>
);


const Departement: React.FC = () => (
  <div className="mx-auto grid max-w-5xl grid-cols-1 gap-8 px-4 pb-24 pt-12 md:grid-cols-12">
    <h2 className="col-span-1 text-3xl font-bold md:col-span-4">
      Intuitiv karta över departementen
    </h2>
    <div className="col-span-1 md:col-span-8">
      <p className="mb-4 text-xl text-neutral-600 md:text-2xl">
        Utforska ministrarna, partierna och myndigheterna som hör till varje departement.
      </p>
      <p className="mb-8 text-xl text-neutral-600 md:text-2xl">
        En interaktiv karta som ger dig all information du behöver.
      </p>
      <Link href="/departement">
        <Button className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white">
          Testa nu
        </Button>
      </Link>
    </div>
  </div>
);
