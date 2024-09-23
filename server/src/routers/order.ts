import express from "express";
import {
  getAllCategories,
  createCategory,
  updateCategory,
  getCategory,
  deleteCategory,
} from "../controllers/category";
import {
  authenticateUser,
  authorizePermissions,
} from "../middlewares/authentication";

const router = express.Router();

const {
  getAllOrders,
  getSingleOrder,
  getCurrentUserOrders,
  createOrder,
  updateOrder,
} = require("../controllers/orderController");

router
  .route("/")
  .post(authenticateUser, createOrder)
  .get(authenticateUser, authorizePermissions("admin"), getAllOrders);

router.route("/showAllMyOrders").get(authenticateUser, getCurrentUserOrders);

router
  .route("/:id")
  .get(authenticateUser, getSingleOrder)
  .patch(authenticateUser, updateOrder);

module.exports = router;
