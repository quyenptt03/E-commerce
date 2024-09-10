import express from "express";
import {
  getAllCategories,
  createCategory,
  updateCategory,
  getCategory,
  deleteCategory,
} from "../controllers/category";

const router = express.Router();

router.route("/").get(getAllCategories).post(createCategory);

router
  .route("/:id")
  .get(getCategory)
  .patch(updateCategory)
  .delete(deleteCategory);

export default router;
