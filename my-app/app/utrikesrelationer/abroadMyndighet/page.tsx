import React from "react";
import CompleteMenu from '../../../components/Main/completeMenu';
import Logo from '../../../components/Main/logo';
import Footer from '../../../components/Main/footer';
import Umyn from '@/components/Other/Utlanska_Myndigheter'; 

export default function Page() {
  return (
    <div>
      <Logo />
      <CompleteMenu />
      <Umyn />
      <Footer />
    </div>
  );
}