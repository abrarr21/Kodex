import mongoose from "mongoose";
import config from "./config.js";

const connectDB = async () => {
  try {
    await mongoose.connect(config.MONGODB_URI);
    console.log("Connected to MongoDB");
  } catch (error) {
    console.log("Error while connecting to MongoDB");
  }
};

export default connectDB;
