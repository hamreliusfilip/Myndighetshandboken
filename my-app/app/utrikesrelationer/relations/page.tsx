import React from "react";
import CompleteMenu from '../../../components/Main/completeMenu';
import Logo from '../../../components/Main/logo';
import Footer from '../../../components/Main/footer';
import Relations from '../../../components/Other/relationsAbroad';

export default function Page() {
  return (
    <div>
      <Logo />
      <CompleteMenu />
      <Relations />
      <Footer />
    </div>
  );
}