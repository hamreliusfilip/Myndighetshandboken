import React from "react";
import CompleteMenu from '../../../components/Main/completeMenu';
import Logo from '../../../components/Main/logo';
import Footer from '../../../components/Main/footer';
import AboutRiks from '../../../components/Other/aboutRiks';

export default function Page() {
  return (
    <div>
      <Logo />
      <CompleteMenu />
      <AboutRiks />
      <Footer />
    </div>
  );
}
