import React from "react";
import CompleteMenu from '../../../components/completeMenu';
import Logo from '../../../components/logo';
import Footer from '../../../components/footer';
import Graph from "../../../components/graph";

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
