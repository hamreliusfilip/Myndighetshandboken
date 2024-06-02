import CompleteMenu from '../../components/Main/completeMenu';
import Logo from '../../components/Main/logo';
import Footer from '../../components/Main/footer';
import Flow from '../../components/Other/FlowCo';

import {
  Card,
} from "@/components/ui/card"

export default function Page() {
  return (
    <div>
      <Logo />
      <CompleteMenu />
      <Flow />
      <Footer />
    </div>
  );
}


