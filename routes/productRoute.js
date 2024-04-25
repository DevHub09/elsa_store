import express from "express";
import {
  createProductController,
  updateProductController,
} from "../controllers/productController.js";
const router = express.Router(); //router object

router.post("/create-product", createProductController);
router.post("/update-product/:id", updateProductController);
export default router;
