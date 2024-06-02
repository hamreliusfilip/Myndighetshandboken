import React from "react";
import CompleteMenu from '../../../components/Main/completeMenu';
import Logo from '../../../components/Main/logo';
import Footer from '../../../components/Main/footer';
import Graph from "../../../components/Other/graph";

export default function Home() {

  return (
    <div>
      <Logo />
      <CompleteMenu /> 
      <Graph />
      <Footer />
    </div>
  );
}
