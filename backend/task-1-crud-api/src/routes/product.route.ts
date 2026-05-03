import express from "express";
import type { IRouter } from "express";
import * as productController from "../controllers/product.controller.js";

const productRouter: IRouter = express();

productRouter.post("/create", productController.addProduct);
productRouter.get("/get-all", productController.getAllProducts);
productRouter.get("/:id", productController.getById);
productRouter.patch("/:id", productController.updateProduct);
productRouter.delete("/:id", productController.deleteProduct);

export default productRouter;
