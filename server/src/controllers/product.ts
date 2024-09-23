import { Request, Response } from "express";
import { StatusCodes } from "http-status-codes";
import { Product, User } from "../models";
import CustomError from "../errors";
import { remove, upload } from "./cloudinary";

const createProduct = async (req: Request, res: Response) => {
  //@ts-ignore
  req.body.seller = req.user.userId;
  const product = await Product.create(req.body);

  res.status(StatusCodes.CREATED).json({ product });
};

const getAllProducts = async (req: Request, res: Response) => {
  const products = await Product.find({});

  res.status(StatusCodes.OK).json({ products, count: products.length });
};

const getProductsByShop = async (req: Request, res: Response) => {
  const { id: shopId } = req.params;
  const shop = await User.find({ id: shopId });
  if (!shop) {
    throw new CustomError.BadRequestError("Can't find the shop");
  }

  const products = await Product.find({ seller: shopId });

  res.status(StatusCodes.OK).json({ products, count: products.length });
};

const getProduct = async (req: Request, res: Response) => {
  const { id: productId } = req.params;

  const product = await Product.findOne({ _id: productId });

  if (!product) {
    throw new CustomError.NotFoundError(`No product with id : ${productId}`);
  }

  res.status(StatusCodes.OK).json({ product });
};

const updateProduct = async (req: Request, res: Response) => {
  const { id: productId } = req.params;

  const product = await Product.findOneAndUpdate({ _id: productId }, req.body, {
    new: true,
    runValidators: true,
  });

  if (!product) {
    throw new CustomError.NotFoundError(`No product with id : ${productId}`);
  }

  res.status(StatusCodes.OK).json({ product });
};

const deleteProduct = async (req: Request, res: Response) => {
  const { id: productId } = req.params;

  const product = await Product.findOne({ _id: productId });

  if (!product) {
    throw new CustomError.NotFoundError(`No product with id : ${productId}`);
  }

  await product.deleteOne();
  if (product.images.length !== 0) {
    remove(product.images);
  }

  res.status(StatusCodes.OK).json({ msg: "Success! Product removed." });
};

const uploadImages = async (req: Request, res: Response) => {
  if (!req.files) {
    throw new CustomError.BadRequestError("No files uploaded");
  }
  const { id: productId } = req.params;
  const images = req.files as Express.Multer.File[];
  const imageUrls = upload(images);

  const product = await Product.findOne({ _id: productId });
  if (!product) {
    remove(product.images);
    throw new CustomError.NotFoundError(`No product with id ${productId}`);
  }
  if (product.images.length !== 0) {
    remove(product.images);
  }

  product.images = imageUrls;
  product.save();

  res.status(StatusCodes.CREATED).json({ images: product.images });
};

export {
  createProduct,
  getAllProducts,
  getProductsByShop,
  getProduct,
  updateProduct,
  deleteProduct,
  uploadImages,
};
