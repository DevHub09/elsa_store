import express from "express";

import {
  createCategoryController,
  updateCategoryController,
} from "../controllers/categoryController.js";

const router = express.Router(); //router object

router.post("/create-category", createCategoryController);
router.put("/update-category/:id", updateCategoryController);
export default router;
