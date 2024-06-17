import mongoose from "mongoose";

export interface AMyndigheter extends mongoose.Document {
  Country: string;
  City: string;
  Phone: string;
  Email: string;
  Web: string;
  Type: string;
}

const AMyndigheter = new mongoose.Schema<AMyndigheter>({
    Country: {
      type: String,
      required: [true, "Please provide the country of the myndighet"],
      maxlength: [60, "Name cannot be more than 60 characters"],
    },
    City: {
      type: String,
      required: [true, "Please provide the city of the myndighet"],
      maxlength: [60, "Owner's Name cannot be more than 60 characters"],
    },
    Phone: {
      type: String,
      maxlength: [40, "Species specified cannot be more than 40 characters"],
    },
    Email: {
      type: String,
      required: [true, "Please provide the email of the myndighet"],
    },
    Web: {
      type: String,
      required: [true, "Please provide webadress about the myndighet"],
    },
    Type: {
      type: String,
      required: [true, "Please provide the type of the myndighet"],
    }
  }, {
    collection: 'AMyndigheter', 
    versionKey: false
  });

export default mongoose.models.AMyndighet || mongoose.model<AMyndigheter>("AMyndighet", AMyndigheter);