import { Router } from "express";
import type { IRouter } from "express";
import { uplaod } from "../config/multer.js";
import storageInstance from "../config/imagekit.js";
import { toFile } from "@imagekit/nodejs";
import File from "../models/file.model.js";

const fileRouter: IRouter = Router();

fileRouter.post("/upload", uplaod.single("image"), async (req, res) => {
  try {
    const file = req.file;
    if (!file) {
      return res.json({
        message: "no file provided",
      });
    }

    const response = await storageInstance.files.upload({
      file: await toFile(file.buffer, file.originalname),
      fileName: file.originalname,
      useUniqueFileName: true,
    });

    const saved = await File.create({
      url: response.url!,
      fileId: response.fileId!,
      name: response.name!,
      originalName: file.originalname,
      size: file.size,
      mimeType: file.mimetype,
    });

    return res.json({
      message: "file uploaded successfully",
      file: saved,
    });
  } catch (error) {
    console.log(error);
    return res.json({
      message: "Internal Server Error",
    });
  }
});

fileRouter.post("/upload-mul", uplaod.array("images", 10), async (req, res) => {
  try {
    const files = req.files;

    if (!files || !Array.isArray(files) || files.length === 0) {
      return res.json({
        message: "no files uploaded",
      });
    }

    const uploadPromise = files.map(async (file) =>
      storageInstance.files.upload({
        file: await toFile(file.buffer, file.originalname),
        fileName: file.originalname,
        useUniqueFileName: true,
      }),
    );

    const results = await Promise.allSettled(uploadPromise);

    const uploaded = results
      .filter((r) => r.status === "fulfilled")
      .map((r) => (r as PromiseFulfilledResult<any>).value)
      .map((r) => ({ url: r.url, fileId: r.fileId, name: r.name }));

    const failedCount = results.filter((r) => r.status === "rejected").length;

    const saved = await File.insertMany(
      uploaded.map((r, i) => ({
        url: r.url!,
        fileId: r.fileId!,
        name: r.name!,
        originalName: files[i]?.originalname,
        size: files[i]?.size,
        mimeType: files[i]?.mimetype,
      })),
    );

    return res.status(200).json({
      message: `${uploaded.length} file(s) uploaded${failedCount ? `, ${failedCount} failed` : ""}`,
      files: saved,
    });
  } catch (error) {
    console.log(error);

    return res.status(500).json({
      message: "Internal SErver Error",
    });
  }
});

export default fileRouter;
