
import mongoose, { Schema, type Model } from "mongoose";

export interface ILead {
  name: string;
  email: string;
  brand?: string;
  service: string;
  createdAt?: Date;
  updatedAt?: Date;
}

const LeadSchema = new Schema<ILead>(
  {
    name: {
      type: String,
      required: true,
      trim: true,
      maxlength: 100,
    },
    email: {
      type: String,
      required: true,
      trim: true,
      lowercase: true,
      maxlength: 254,
    },
    brand: {
      type: String,
      trim: true,
      maxlength: 120,
      default: "",
    },
    service: {
      type: String,
      required: true,
      enum: [
        "Website Development & Revamp",
        "Performance Marketing",
        "Email & WhatsApp Marketing",
        "SEO & Social Media",
        "AI & Technology",
        "Not sure yet",
      ],
    },
  },
  { timestamps: true }
);

const Lead: Model<ILead> =
  (mongoose.models.Lead as Model<ILead>) ||
  mongoose.model<ILead>("Lead", LeadSchema);

export default Lead;
