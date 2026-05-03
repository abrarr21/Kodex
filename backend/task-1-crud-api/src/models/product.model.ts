import mongoose from "mongoose";

const productSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "name is required"],
      trim: true,
    },
    price: {
      type: Number,
      required: [true, "price is required"],
    },
    description: {
      type: String,
      default: "",
    },
    category: {
      type: String,
      enum: ["electronics", "food", "clothing"],
      required: true,
    },
    stock: {
      type: Number,
      required: [true, "stock is required"],
      min: 0,
    },
  },
  { timestamps: true },
);

const productModel = mongoose.model("products", productSchema);

export default productModel;
