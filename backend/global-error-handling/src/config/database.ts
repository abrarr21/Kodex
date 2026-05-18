import mongoose from "mongoose";
import config from "./config.js";

const connectDB = async () => {
  try {
    await mongoose.connect(config.MONGODB_URI);
    console.log("connected to MongoDB");
  } catch (error) {
    console.log("Error in mongodb conenction", error);
  }
};

export default connectDB;
