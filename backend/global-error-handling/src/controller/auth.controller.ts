import type { RequestHandler } from "express";
import asyncHandler from "../utils/asyncHandler.js";
import ApiResponse from "../utils/apiResponse.js";
import { registerService } from "../services/auth.service.js";

export const register: RequestHandler = asyncHandler(async (req, res) => {
  const { name, email, password } = req.body;

  const data = await registerService({ name, email, password });

  res.status(201).json(
    new ApiResponse("user created successfully", {
      data,
    }),
  );
});
