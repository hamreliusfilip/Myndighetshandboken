import React from "react";
import CompleteMenu from '../../../components/Main/completeMenu';
import Logo from '../../../components/Main/logo';
import Footer from '../../../components/Main/footer';
import GenericText from '@/components/Other/genricTextCom';

export default function Page() {
  return (
    <div>
      <Logo />
      <CompleteMenu />
      <div className="text-center">
        <h1 className="font-bold text-4xl mt-20 bg-gradient-to-r from-cyan-500 to-blue-500 inline-block text-transparent bg-clip-text px-1 pb-1"> Internationella Relationer </h1>
        <p className='text-center font-normal text-l mt-5'> Grundläggande information om <br></br> Sveriges största internationella samarbeten.</p>
        <hr className="w-96 h-1 mx-auto my-4 bg-gradient-to-r from-cyan-500 to-blue-500 border-0 rounded md:my-10 dark:bg-gray-700" />
      </div>
      <GenericText type={"Inter"} />
      <Footer />
    </div>
  );
}