import { NextResponse } from 'next/server';
import dbConnect from '@/lib/dbConnect';
import Company from "@/lib/models/company";

export async function GET(req: any, { params }: any) {
    
    try {
        await dbConnect();
    
        const company = await Company.findById(params.id);
        return NextResponse.json({ company }, { status: 200 });
    } catch (error) {
        return NextResponse.json({ status: 500, message: "problem finding data" });
    }

}

export async function PUT(req: any, { params }: any) {

    try {
        const body = await req.json();

        const upatedData = body.formData;

        const updateTicketData = await Company.findByIdAndUpdate(upatedData._id, {
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
        const company = await Company.findByIdAndDelete(params.id);
        
        if (!company) {
            return NextResponse.json({ message: "company not found" }, { status: 404 });
        }
        return NextResponse.json({ message: "company deleted successfully", company }, { status: 200 });
    } catch (error) {
        console.log(error);
        return NextResponse.json({ message: "Problem deleting data", error: error }, { status: 500 });
    }
}
