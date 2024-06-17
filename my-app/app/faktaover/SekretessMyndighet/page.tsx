import React from "react";
import CompleteMenu from '@/components/Main/completeMenu';
import Logo from '@/components/Main/logo';
import Footer from '@/components/Main/footer';
import SecComp from '@/components/Other/secret';

export default function Page() {
  return (
    <div>
      <Logo />
      <CompleteMenu />
      <SecComp />
      <Footer />
    </div>
  );
}
