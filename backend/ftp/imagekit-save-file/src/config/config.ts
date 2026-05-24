import dotenv from "dotenv";

dotenv.config();

if (!process.env.IMAGEKIT_PRIVATE_KEY) {
  throw new Error("IMAGEKIT_PRIVATE_KEY is not provided in the .env file");
}

if (!process.env.MONGODB_URI) {
  throw new Error("MONGODB_URI is not provided in the .env file");
}

const config = {
  IMAGEKIT_PRIVATE_KEY: process.env.IMAGEKIT_PRIVATE_KEY,
  MONGODB_URI: process.env.MONGODB_URI,
};

export default config;
