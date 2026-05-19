import { Router } from "express";
import type { IRouter } from "express";
import { uplaod } from "../config/multer.js";

const fileRouter: IRouter = Router();

fileRouter.post("/upload", uplaod.single("image"), (req, res) => {
  const file = req.file;

  res.json({
    message: "file uploaded",
    file,
  });
});

fileRouter.post("/upload-mul", uplaod.array("images", 10), (req, res) => {
  const files = req.files;

  res.json({
    message: "file(s) uploaded",
    files,
  });
});

export default fileRouter;
