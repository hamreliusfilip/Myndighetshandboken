import mongoose from "mongoose";

export interface companies extends mongoose.Document {
  name: string;
  info: string;
  created: number;
  img: string;
  owner: string;
  web: string;
  org: string;
}

const companies = new mongoose.Schema<companies>({
  name: {
    type: String,
    required: [true, "Please provide the name of the Company"],
    maxlength: [60, "Name cannot be more than 60 characters"],
  },
  info: {
    type: String,
    required: [true, "Please provide info about the myndighet"],
  },
  created: {
    type: Number,
    maxlength: [40, "Species specified cannot be more than 40 characters"],
  },
  img: {
    type: String,
  },
  owner: {
    type: String,
  },
  web: {
    type: String,
  },
  org: {
    type: String,
    required: [true, "Please provide organisation number"],
  }
}, {
  collection: 'companies', 
  versionKey: false
});

export default mongoose.models.Company || mongoose.model<companies>("Company", companies);