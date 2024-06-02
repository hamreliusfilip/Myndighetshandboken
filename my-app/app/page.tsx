'use client';

import React, { useEffect, useState } from "react";
import CompleteMenu from '../components/Main/completeMenu';
import Logo from '../components/Main/logo';
import NavCardsHoms from '../components/LandingPage/navCardsHoms';
import Footer from '../components/Main/footer';
import LandingFiller from '../components/LandingPage/landingFiller';
import LandingFiller2 from "@/components/LandingPage/landingFiller2";
import Info from "../components/LandingPage/infoText";
import Facts from "@/components/LandingPage/facts";

import MobileLogo from '@/components/mobileComponents/mobileLogo';
import MobileWarning from '@/components/mobileComponents/warningPrompt';
import MobileFooter from '@/components/mobileComponents/mobileFooter';
import MobileInfo from '@/components/mobileComponents/mobileFiller';

export default function Home() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkIfMobile = () => {
      const userAgent = navigator.userAgent;
      const isMobile = /Android|webOS|iPhone|iPod|BlackBerry|IEMobile|Opera Mini/i.test(userAgent);
      const isiPad = /iPad/i.test(userAgent);

      return isMobile && !isiPad;
    }
    setIsMobile(checkIfMobile());
  }, []);

  return (

    <div>

      {!isMobile && <Logo />}
      {!isMobile && <CompleteMenu />}
      {!isMobile && <Info />}
      {!isMobile && <NavCardsHoms />}
      {!isMobile && <Facts />}
      {!isMobile && <LandingFiller />}
      {!isMobile && <LandingFiller2 />}
      {!isMobile && <Footer />}

      {isMobile && <MobileLogo />}
      {isMobile && <MobileInfo />}
      {isMobile && <MobileWarning />}
      {isMobile && <MobileFooter />}

    </div>

  );
}
