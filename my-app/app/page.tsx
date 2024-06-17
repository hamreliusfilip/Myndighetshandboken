'use client';

import React, { useEffect, useState } from "react";
import CompleteMenu from '../components/Main/completeMenu';
import Logo from '../components/Main/logo';
import Footer from '../components/Main/footer';
import LandingFiller2 from "@/components/LandingPage/landingFiller2";
import { TextParallaxContentExample } from "@/components/LandingPage/landingFiller3";
import LandingFiller4 from "@/components/LandingPage/landingFiller4";
import LandingFiller5 from "../components/LandingPage/landingFiller5";
import LandingFiller6 from "@/components/LandingPage/landingFiller6";
import LandingFiller7 from "@/components/LandingPage/landingFiller7";
import Info from "../components/LandingPage/infoText";
import Facts from "@/components/LandingPage/facts";
import MobileWarning from '@/components/mobileComponents/warningPrompt';
import MobileInfo from '@/components/mobileComponents/mobileFiller';
import LandingFiller22 from '@/components/mobileComponents/landingFiller22';
import LandingFiller33 from '@/components/mobileComponents/landingFiller33';
import LandingFiller44 from '@/components/mobileComponents/landingFiller44';
import AboutWeb from "@/components/LandingPage/aboutWeb";
import AboutMobile from "@/components/mobileComponents/aboutMobile";

export default function Home() {
  const [isMobile, setIsMobile] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const checkIfMobile = () => {
      const userAgent = navigator.userAgent;
      const isMobile = /Android|webOS|iPhone|iPod|BlackBerry|IEMobile|Opera Mini/i.test(userAgent);
      const isiPad = /iPad/i.test(userAgent);

      return isMobile && !isiPad;
    }
    setIsMobile(checkIfMobile());
    setLoading(false);
  }, []);

  if (loading) {
    return null; 
  }

  return (
    <div>
      <Logo />
      <CompleteMenu />
      {!isMobile && <Info />}
      {isMobile && <MobileInfo />}
      {isMobile && <div className="h-72" />}
      <TextParallaxContentExample />
      {!isMobile && <Facts />}
      {!isMobile && <LandingFiller6 />}
      {!isMobile && <LandingFiller5 />}
      {!isMobile && <LandingFiller4 />}
      {!isMobile && <LandingFiller2 />}
      {!isMobile && <AboutWeb />}
      {!isMobile && <LandingFiller7 />}
   
      {/* {isMobile && <MobileWarning />} */}
      {isMobile && <LandingFiller33 />}
      {isMobile && <LandingFiller22 />}
      {/* {isMobile && <LandingFiller44 />} */}
      {isMobile && <AboutMobile />}
      <Footer />
    </div>
  );
}
