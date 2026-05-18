import jwt from "jsonwebtoken";
import config from "../config/config.js";
import type { HydratedDocument } from "mongoose";
import type { IUser } from "../model/user.model.js";

export const generateToken = (user: HydratedDocument<IUser>): string => {
  return jwt.sign({ id: user._id }, config.JWT_SECRET, { expiresIn: "2h" });
};
