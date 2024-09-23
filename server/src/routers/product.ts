import express from "express";
import {
  getAllProducts,
  createProduct,
  getProduct,
  updateProduct,
  deleteProduct,
  uploadImages,
  getProductsByShop,
} from "../controllers/product";
import uploadCloud from "../middlewares/upload-cloud";
import {
  authenticateUser,
  authorizePermissions,
} from "../middlewares/authentication";

const router = express.Router();

router
  .route("/")
  .post(
    authenticateUser,
    authorizePermissions("admin", "seller"),
    createProduct
  )
  .get(getAllProducts);

router
  .route("/upload/:id")
  .post(
    authenticateUser,
    authorizePermissions("admin", "seller"),
    uploadCloud.array("images", 10),
    uploadImages
  );

router.route("/shop/:id").get(getProductsByShop);

router.route("/:id").get(getProduct).patch(updateProduct).delete(deleteProduct);

export default router;
