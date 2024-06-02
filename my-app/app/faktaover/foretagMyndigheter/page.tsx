import React from "react";
import CompleteMenu from '../../../components/Main/completeMenu';
import Logo from '../../../components/Main/logo';
import Footer from '../../../components/Main/footer';

import AboutMynVsCom from '@/components/Other/aboutMynVsCom';

export default function Page() {
  return (
    <div>
      <Logo />
      <CompleteMenu />
      <AboutMynVsCom />
      <Footer />
    </div>
  );
}
