import { NextResponse } from 'next/server';
import dbConnect from "../../../lib/dbConnect";
import companies from "../../../lib/models/company";

export async function GET(req: any) {
  try {
    await dbConnect();

    const { searchParams } = new URL(req.url);
    const fields = searchParams.get('fields');

    let projection: { [key: string]: number } = {};

    if (fields) {
      fields.split(',').forEach(field => {
        projection[field.trim()] = 1;
      });
    }

    const company = await companies.find({}, projection);

    return NextResponse.json({ company }, { status: 200 });
    
  } catch (error) {
    return NextResponse.json({ status: 500, message: 'Error finding companies' });
  }
}

export async function POST(req: any) {
  try {

    const body = await req.json();
    await companies.create(body);

    return NextResponse.json({ status: 200, message: 'Company created' });

  } catch (error) {
    return NextResponse.json({ status: 500, message: error });
  }
}