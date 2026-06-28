import { faker } from "@faker-js/faker";
import mongoose from "mongoose";
import postModel from "./postModel.js";
import dotenv from "dotenv";

dotenv.config();

const seed = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI!);
    console.log("Connected to MongoDB");

    const posts = Array.from({ length: 100 }, () => ({
      title: faker.book.title(),
      description: faker.lorem.paragraph(),
    }));

    await postModel.insertMany(posts);

    console.log("✅ Successfully inserted 100 posts!");

    await mongoose.disconnect();
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
};

seed();
