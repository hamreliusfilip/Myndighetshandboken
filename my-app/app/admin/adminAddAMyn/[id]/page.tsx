import Logo from "@/components/Main/logo";
import AdminMenu from "@/components/adminComponents/adminMenu";
import FormVariant from '@/components/adminComponents/FormVariant'

const getTicketById = async (id: string) => {

    try {
        const res = await fetch(`https://myndighetshandboken.se/api/Amyndigheter/${id}`, {
            cache: "no-cache"
        });
        const data = await res.json();
        return data;
    } catch (error) {
        return error;
    }
}
let updateData = {};

const AdminAMyndighet = async ({ params }: any) => {
    const EDITMODE = params.id === "new" ? false : true;

    if (EDITMODE) { 
        const decodedId = decodeURIComponent(params.id);
        updateData = await getTicketById(decodedId);
    } else {
        updateData = {
            Amyndighet: {
                _id: "new",
            }
        };
    }
    
    return (
        <div>
            <Logo />
            <AdminMenu />
            <div className="mb-40 mt-20">
                <FormVariant data={updateData} type="Amyndighet"/>
            </div>
        </div>
    );
}

export default AdminAMyndighet;