import { NextResponse } from 'next/server';
import dbConnect from "../../../lib/dbConnect";
import AMyndigheter from "../../../lib/models/Amyndighet";

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

        const Amyndighet = await AMyndigheter.find({}, projection);

      return NextResponse.json({ Amyndighet }, { status: 200 });

  } catch (error) {
      return NextResponse.json({ status: 500, message: 'Error finding Amyndigheter' });
  }
}

export async function POST(req: any) {
  try {

    const body = await req.json(); 
    await AMyndigheter.create(body);
    

    return NextResponse.json({ status: 200, message: 'AMyndighet created' });
    
  } catch (error) {
    return NextResponse.json({ status: 500, message: error });
  }
}
