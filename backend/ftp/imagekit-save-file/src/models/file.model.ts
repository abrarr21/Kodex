import mongoose, { Document } from "mongoose";

export interface IFile extends Document {
  url: string;
  fileId: string;
  name: string;
  originalName: string;
  size: number;
  mimeType: string;
  folder?: string;
}

const fileSchema = new mongoose.Schema<IFile>(
  {
    url: { type: String, required: true },
    fileId: { type: String, required: true, unique: true },
    name: { type: String, required: true },
    originalName: { type: String, required: true },
    size: { type: Number, required: true },
    mimeType: { type: String, required: true },
    folder: { type: String, default: "/uploads" },
  },
  { timestamps: true },
);

const File = mongoose.model<IFile>("File", fileSchema);
export default File;
