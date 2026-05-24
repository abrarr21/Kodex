import mongoose from "mongoose";
import config from "./config.js";

const connectDB = async () => {
  try {
    await mongoose.connect(config.MONGODB_URI);
    console.log("Connected to Mongodb");
  } catch (error) {
    console.log("error connecting mongodb", error);
  }
};

export default connectDB;
