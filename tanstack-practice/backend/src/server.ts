import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import postModel from "./postModel.js";
import cors from "cors";

dotenv.config();

const app = express();

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI!);
    console.log("Conntect to MongoDB");
  } catch (error) {
    console.log("Error connecting to MongoDB", error);
  }
};

connectDB();

app.use(express.json());

app.use(cors());

app.get("/", (_, res) => {
  res.send("Server is running");
});

app.get("/posts", async (req, res) => {
  const allPosts = await postModel.find();

  return res.json(allPosts);
});

app.get("/paginated-posts", async (req, res) => {
  const page = parseInt(req.query.page as string) || 1;
  const limit = parseInt(req.query.limit as string);

  const skip = (page - 1) * limit;

  const allPosts = await postModel.find().skip(skip).limit(limit);

  const total = await postModel.countDocuments();

  return res.json({
    data: allPosts,
    currentPage: page,
    totalPages: Math.ceil(total / limit),
    totalPosts: total,
  });
});

app.post("/posts", async (req, res) => {
  const { title, description } = req.body;

  const createdPost = await postModel.create({ title, description });
  return res.json(createdPost);
});

app.patch("/posts/:id", async (req, res) => {
  const { id } = req.params;
  const { description } = req.body;

  const updatedPost = await postModel.findByIdAndUpdate(id, description);

  return res.json(updatedPost);
});

app.listen(process.env.PORT, () => {
  console.log(`server is listening on PORt: ${process.env.PORT}`);
});
