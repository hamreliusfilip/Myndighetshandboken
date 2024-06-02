import { NextResponse } from 'next/server';
import dbConnect from "../../../lib/dbConnect";
import Myndigheter from "../../../lib/models/myndighet";
import { revalidatePath, revalidateTag } from 'next/cache';

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

        const myndighet = await Myndigheter.find({}, projection);

      return NextResponse.json({ myndighet }, { status: 200 });

  } catch (error) {
      return NextResponse.json({ status: 500, message: 'Error finding myndigheter' });
  }
}

export async function POST(req: any) {
  try {

    const body = await req.json(); 
    await Myndigheter.create(body);
    

    return NextResponse.json({ status: 200, message: 'Myndighet created' });
    
  } catch (error) {
    return NextResponse.json({ status: 500, message: error });
  }
}
