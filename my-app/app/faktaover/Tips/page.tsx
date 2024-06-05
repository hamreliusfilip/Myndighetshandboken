import React from "react";
import CompleteMenu from '@/components/Main/completeMenu';
import Logo from '@/components/Main/logo';
import Footer from '@/components/Main/footer';
import TipsCom from '@/components/Other/tipsCom';

export default function Page() {
  return (
    <div>
      <Logo />
      <CompleteMenu />
      <TipsCom />
      <Footer />
    </div>
  );
}