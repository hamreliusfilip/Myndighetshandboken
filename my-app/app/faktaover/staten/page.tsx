import React from "react";
import CompleteMenu from '../../../components/Main/completeMenu';
import Logo from '../../../components/Main/logo';
import Footer from '../../../components/Main/footer';
import AboutState from '../../../components/Other/aboutState';

export default function Page() {
  return (
    <div>
      <Logo />
      <CompleteMenu />
      <AboutState />
      <Footer />
    </div>
  );
}
