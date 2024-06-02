import { LoginLink } from "@kinde-oss/kinde-auth-nextjs/components";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { Button } from "@/components/ui/button"
import AdminMenu from "@/components/adminComponents/adminMenu";
import Logo from "@/components/Main/logo";

export default async function Protected() {
  const { isAuthenticated } = getKindeServerSession();

  return (await isAuthenticated()) ? (

    <div>
      <Logo />
      <AdminMenu />
      <div className="flex justify-center items-center mt-40">
        <p className="text-5xl font-bold text-center"> Välkommen till Adminsidan </p>
      </div>
      <div className="flex justify-center items-center mt-10">
      <p className="text-xl font-normal text-center"> Här kan du hantera myndigheter och statliga företag. <br></br> Välj i menyn ovan för att börja. </p>
      </div> 

    </div>
  ) : (
    <div className="flex flex-col items-center justify-center h-screen">
      <p className="ml-10 mb-5 mt-10 font-bold text-center"> Denna sida är skyddad. <br></br> Om du är du administratör kan du logga in. </p>
      <LoginLink>
        <Button variant="outline" className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white ml-5">
          Logga in
        </Button>
      </LoginLink>
    </div>
  );
}
