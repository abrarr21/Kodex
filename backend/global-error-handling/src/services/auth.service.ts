import userModel from "../model/user.model.js";
import ApiError from "../utils/apiError.js";
import { generateToken } from "../utils/generateToken.js";

type RegisterPayload = {
  name: string;
  email: string;
  password: string;
};

export const registerService = async ({
  name,
  email,
  password,
}: RegisterPayload) => {
  if (!name || !email || !password) {
    throw new ApiError(400, "All fields are required");
  }

  const existUser = await userModel.findOne({ email });
  if (existUser) {
    throw new ApiError(400, "Email already exists");
  }

  const newUser = await userModel.create({
    name,
    email,
    password,
  });
  const accessToken = generateToken(newUser);

  return {
    user: {
      _id: newUser._id,
      name: newUser.name,
      email: newUser.email,
    },
    accessToken,
  };
};
