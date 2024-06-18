import { NextResponse } from 'next/server';
import dbConnect from '@/lib/dbConnect';
import AMyndighet from "@/lib/models/Amyndighet";

export async function GET(req: any, { params }: any) {
    
    try {
        await dbConnect();
        const Amyndighet = await AMyndighet.findById(params.id);
        return NextResponse.json({ Amyndighet }, { status: 200 });
    } catch (error) {
        return NextResponse.json({ status: 500, message: "problem finding data" });
    }

}

export async function PUT(req: any, { params }: any) {

    try {

        const body = await req.json();
        const upatedData = body.formData;
        const updateTicketData = await AMyndighet.findByIdAndUpdate(upatedData._id, {
            ...upatedData,
        });

        return NextResponse.json({ message: "Data updated" }, { status: 200 });
    
    } catch (error) {
        console.log(error);
        return NextResponse.json({ message: "Error", error }, { status: 500 });
    }
}

export async function DELETE(req: any, { params }: any) {
    try {
        const Amyndighet = await AMyndighet.findByIdAndDelete(params.id);
        
        if (!Amyndighet) {
            return NextResponse.json({ message: "AMyndighet not found" }, { status: 404 });
        }
        return NextResponse.json({ message: "AMyndighet deleted successfully", Amyndighet }, { status: 200 });
    } catch (error) {
        console.log(error);
        return NextResponse.json({ message: "Problem deleting data", error: error }, { status: 500 });
    }
}
