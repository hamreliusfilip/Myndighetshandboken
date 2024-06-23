import CompleteMenu from '../../components/Main/completeMenu';
import Logo from '../../components/Main/logo';
import Footer from '../../components/Main/footer';
import Flow from '../../components/Other/FlowCo';
import Head from 'next/head'

export default function Page() {
  return (
    <div>
      <Head>
        <title>Departement - Myndighetshandboken</title>
      </Head>
      <Logo />
      <CompleteMenu />
      <Flow />
      <Footer />
    </div>
  );
}


