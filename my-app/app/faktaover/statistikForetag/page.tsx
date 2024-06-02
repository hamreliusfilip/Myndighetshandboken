import React from "react";
import CompleteMenu from '../../../components/Main/completeMenu';
import Logo from '../../../components/Main/logo';
import Footer from '../../../components/Main/footer';
import GraphForetag from '../../../components/Other/graphForetag';

export default function Home() {

  return (
    <div>
      <Logo />
      <CompleteMenu /> 
      <GraphForetag />
      <Footer />
    </div>
  );
}
