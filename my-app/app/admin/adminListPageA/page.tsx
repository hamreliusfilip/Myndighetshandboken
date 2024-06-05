import { LoginLink } from "@kinde-oss/kinde-auth-nextjs/components";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { Button } from "@/components/ui/button"
import Logo from '@/components/Main/logo';
import AdminMenu from "@/components/adminComponents/adminMenu";
import AdminListVariant from "@/components/adminComponents/adminListVariant";

export default async function Protected() {
    const { isAuthenticated } = getKindeServerSession();

    return (await isAuthenticated()) ? (
        <div className="mb-40">
            <Logo />
            <AdminMenu />
            <AdminListVariant prop="Amyndigheter"/>
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
