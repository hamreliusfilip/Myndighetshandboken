import React from "react";
import CompleteMenu from '../../../components/Main/completeMenu';
import Logo from '../../../components/Main/logo';
import Footer from '../../../components/Main/footer';
import PolCom from '../../../components/Other/politics';

export default function Page() {
  return (
    <div>
      <Logo />
      <CompleteMenu />
      <PolCom />
      <Footer />
    </div>
  );
}
