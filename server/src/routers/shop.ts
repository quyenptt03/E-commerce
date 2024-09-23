import express from "express";
import {
  createShop,
  deleteShop,
  getAllShops,
  getShop,
  updateShop,
} from "../controllers/shop";
import {
  authenticateUser,
  authorizePermissions,
} from "../middlewares/authentication";

const router = express.Router();

router
  .route("/")
  .post(authenticateUser, authorizePermissions("seller"), createShop)
  .get(getAllShops);

router.route("/:id").get(getShop).patch(updateShop).delete(deleteShop);

export default router;
