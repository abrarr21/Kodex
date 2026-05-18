import mongoose from "mongoose";
import bcrypt from "bcrypt";

export interface IUser {
  name: string;
  email: string;
  password: string;
}

const userSchema = new mongoose.Schema<IUser>(
  {
    name: {
      type: String,
      required: [true, "name is required"],
    },
    email: {
      type: String,
      required: [true, "email is required"],
      unique: [true, "email must be unique"],
      trim: true,
    },
    password: {
      type: String,
      trim: true,
      required: [true, "password is required"],
    },
  },
  {
    timestamps: true,
  },
);

userSchema.pre("save", function () {
  this.password = bcrypt.hashSync(this.password, 10);
});

const userModel = mongoose.model<IUser>("users", userSchema);

export default userModel;
