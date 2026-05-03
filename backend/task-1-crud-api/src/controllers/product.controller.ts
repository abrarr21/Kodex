import type { Request, Response } from "express";
import productModel from "../models/product.model.js";

export const addProduct = async (req: Request, res: Response) => {
  const { name, price, description, category, stock } = req.body;

  const errors: string[] = [];

  if (typeof name !== "string" || name.trim().length === 0) {
    errors.push("Name is required and must be a non-empty string");
  }

  if (price === undefined || typeof price !== "number" || isNaN(price)) {
    errors.push("Price must be a valid Number");
  } else if (price < 0) {
    errors.push("Price cannot be negative");
  }

  if (typeof category !== "string" || category.trim().length === 0) {
    errors.push("category is required and must be a non-empty string");
  }

  if (stock === undefined || typeof stock !== "number" || isNaN(stock)) {
    errors.push("Stock must be a valid number");
  } else if (stock < 0) {
    errors.push("Stock cannot be negative");
  }

  if (description !== undefined && typeof description !== "string") {
    errors.push("Description must be a string");
  }

  if (errors.length > 0) {
    return res.status(400).json({ errors });
  }

  try {
    const product = await productModel.create({
      name: name.trim(),
      price,
      description,
      category: category.trim(),
      stock,
    });

    return res.status(201).json({
      message: "Product Created Successfully",
      product,
    });
  } catch (error: any) {
    if (error.name === "ValidationError") {
      const messages = Object.values(error.errors).map(
        (err: any) => err.message,
      );
      return res.status(500).json({ errors: messages });
    }

    res.status(500).json({ message: "Server errors" });
  }
};

export const getAllProducts = async (req: Request, res: Response) => {
  const allProducts = await productModel.find();

  return res.status(200).json(allProducts);
};

export const getById = async (req: Request, res: Response) => {
  const { id } = req.params;

  const prod = await productModel.findById({ _id: id });
  if (!prod) {
    return res.status(404).json({
      message: "No product found",
    });
  }

  res.status(200).json({
    message: "Product Found",
    prod,
  });
};

export const updateProduct = async (req: Request, res: Response) => {
  const { id } = req.params;
  const updates = req.body;

  if (!updates || Object.keys(updates).length === 0) {
    return res.status(400).json({
      message: "No data provided for the updates",
    });
  }

  try {
    const prod = await productModel.findByIdAndUpdate(id, updates, {
      new: true,
      runValidators: true,
    });

    if (!prod) {
      return res.status(400).json({
        message: "Product not found",
      });
    }

    res.status(200).json({
      message: "Updated Successfully",
      prod,
    });
  } catch (error: any) {
    if (error.name === "CastError") {
      return res.status(400).json({
        message: "Invalid product Id",
      });
    }

    if (error.name === "ValidationError") {
      const messages = Object.values(error.errors).map(
        (err: any) => err.messages,
      );

      return res.status(400).json({ errors: messages });
    }

    res.status(500).json({ message: "Internal Server Error" });
  }
};

export const deleteProduct = async (req: Request, res: Response) => {
  const { id } = req.params;

  try {
    const product = await productModel.findByIdAndDelete(id);

    if (!product) {
      return res.status(404).json({
        message: "Product not found",
      });
    }

    return res.status(200).json({
      message: "Product deleted successfully",
    });
  } catch (error: any) {
    if (error.name === "CastError") {
      return res.status(400).json({ message: "Invalid product ID" });
    }

    return res.status(500).json({
      message: "Server error",
    });
  }
};
