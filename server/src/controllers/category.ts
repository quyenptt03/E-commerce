import { Request, Response } from "express";
import { Category } from "../models";
import { StatusCodes } from "http-status-codes";
import slugify from "slugify";
import CustomError from "../errors";
import { remove, upload } from "./cloudinary";

const getAllCategories = async (req: Request, res: Response) => {
  const { searchQuery, sort } = req.query;
  const queryObject: any = {};
  let sortList;

  if (sort) {
    sortList = (sort as string).split(",").join(" ");
  }

  if (searchQuery) {
    queryObject.name = { $regex: searchQuery, $options: "i" };
  }

  const page: number = Math.abs(Number(req.query.page)) || 1;
  const limit: number = Math.abs(Number(req.query.limit)) || 10;
  const skip: number = (page - 1) * limit;

  const categories = await Category.find(queryObject)
    .skip(skip)
    .limit(limit)
    .sort(sortList);

  const totalCount: number = await Category.countDocuments(queryObject);
  const totalPages: number = Math.ceil(totalCount / limit);

  res
    .status(StatusCodes.OK)
    .send({ categories, count: categories.length, page, totalPages });
};

const createCategory = async (req: Request, res: Response) => {
  const { title } = req.body;

  if (!title) {
    throw new CustomError.BadRequestError("Please provide title of category");
  }

  const category = await Category.create({
    title,
    slug: slugify(title),
  });

  res.status(StatusCodes.CREATED).json({ category });
};

const getCategory = async (req: Request, res: Response) => {
  const { id: categoryId } = req.params;
  const category = await Category.findOne({ _id: categoryId });
  if (!category) {
    throw new CustomError.NotFoundError(`No category with id ${categoryId}`);
  }
  res.status(StatusCodes.OK).json({ category });
};

const updateCategory = async (req: Request, res: Response) => {
  const { id: categoryId } = req.params;
  const { title } = req.body;

  const category = await Category.findById(categoryId);
  if (!category) {
    throw new CustomError.NotFoundError(`No category with id ${categoryId}`);
  }

  if (title) {
    category.title = title;
    category.slug = slugify(title);
  }

  await category.save();

  res.status(StatusCodes.OK).json({ category });
};

const deleteCategory = async (req: Request, res: Response) => {
  const { id: categoryId } = req.params;

  const category = await Category.findOne({ _id: categoryId });

  if (!category) {
    throw new CustomError.NotFoundError(`No category with id ${categoryId}`);
  }

  await category.deleteOne();
  res.status(StatusCodes.OK).json({ msg: "Success! Category removed." });
};

export {
  getAllCategories,
  createCategory,
  getCategory,
  updateCategory,
  deleteCategory,
};
