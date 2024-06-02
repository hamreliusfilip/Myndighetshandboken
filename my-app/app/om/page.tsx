import React from "react";
import CompleteMenu from '../../components/Main/completeMenu';
import Logo from '../../components/Main/logo';
import Footer from '../../components/Main/footer';
import AboutSite from "../../components/Other/aboutSite";

export default function Page() {
  return (
    <div>
      <Logo />
      <CompleteMenu />
      <AboutSite />
      <Footer />
    </div>
  );
}