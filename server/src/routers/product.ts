import express from "express";
import {
  getAllProducts,
  createProduct,
  getProduct,
  updateProduct,
  deleteProduct,
  uploadImages,
} from "../controllers/product";
import uploadCloud from "../middlewares/upload-cloud";

const router = express.Router();

router.route("/").post(createProduct).get(getAllProducts);

router.route("/upload/:id").post(uploadCloud.array("images", 10), uploadImages);

router.route("/:id").get(getProduct).patch(updateProduct).delete(deleteProduct);

export default router;
