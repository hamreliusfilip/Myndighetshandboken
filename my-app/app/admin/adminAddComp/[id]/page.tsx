import Form from '@/components/adminComponents/Form'
import Logo from "@/components/Main/logo";
import AdminMenu from "@/components/adminComponents/adminMenu";

const getTicketById = async (id: string) => {

    try {
        const res = await fetch(`http://localhost:3000/api/companies/${id}`, {
            cache: "no-cache"
        });
        const data = await res.json();
        return data;
    } catch (error) {
        return error;
    }
}
let updateData = {};

const AdminCompany = async ({ params }: any) => {
    const EDITMODE = params.id === "new" ? false : true;

    if (EDITMODE) { 
        const decodedId = decodeURIComponent(params.id);
        updateData = await getTicketById(decodedId);
    } else {
        updateData = {
            company: {
                _id: "new",
            }
        };
    }
    
    return (
        <div>
            <Logo />
            <AdminMenu />
            <div className="mb-40 mt-20">
                <Form data={updateData} type="company" />
            </div>
        </div>
    );
}

export default AdminCompany;