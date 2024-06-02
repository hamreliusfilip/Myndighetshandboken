import mongoose from "mongoose";

export interface Myndigheter extends mongoose.Document {
  name: string;
  relation: string;
  created : number;
  rule: string;
  info: string;
  logo_url: string;
  epost : string;
  org: string;
  tele : string;
  web : string;
}

const Myndigheter = new mongoose.Schema<Myndigheter>({
    name: {
      type: String,
      required: [true, "Please provide the name of the myndighet"],
      maxlength: [60, "Name cannot be more than 60 characters"],
    },
    relation: {
      type: String,
      required: [true, "Please provide the relation of the myndighet"],
      maxlength: [60, "Owner's Name cannot be more than 60 characters"],
    },
    created: {
      type: Number,
      maxlength: [40, "Species specified cannot be more than 40 characters"],
    },
    rule: {
      type: String,
      required: [true, "Please provide the rule of the myndighet"],
    },
    info: {
      type: String,
      required: [true, "Please provide info about the myndighet"],
    },
    logo_url: {
      type: String,
    },
    epost: {
      type: String,
    },
    org: {
      type: String,
      required: [true, "Please provide organisation number"],
    },
    tele: {
      type: String,
    },
    web: {
      type: String,
    }
  }, {
    collection: 'Myndigheter', 
    versionKey: false
  });

export default mongoose.models.Myndighet || mongoose.model<Myndigheter>("Myndighet", Myndigheter);