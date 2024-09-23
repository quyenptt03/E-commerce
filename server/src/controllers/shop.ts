import { Request, Response } from "express";
import { StatusCodes } from "http-status-codes";
import CustomError from "../errors";
import Shop from "../models/Shop";
import { User } from "../models";
import { ObjectId } from "mongodb";

const getAllShops = async (req: Request, res: Response) => {
  const shops = await Shop.find({});

  res.status(StatusCodes.OK).json({ shops, count: shops.length });
};

const createShop = async (req: Request, res: Response) => {
  //@ts-ignore
  req.body.seller = req.user.userId;

  const seller = await User.findOne({ _id: req.body.seller });
  if (seller.shop) {
    throw new CustomError.BadRequestError("Your shop already created");
  }

  const shop = await Shop.create(req.body);

  seller.shop = new ObjectId(shop._id.toString());

  await seller.save();

  res.status(StatusCodes.CREATED).json({ shop });
};

const getShop = async (req: Request, res: Response) => {
  const { id: shopId } = req.params;

  const shop = await Shop.findOne({ _id: shopId });

  if (!shop) {
    throw new CustomError.NotFoundError(`No shop with id : ${shopId}`);
  }

  res.status(StatusCodes.OK).json({ shop });
};

const updateShop = async (req: Request, res: Response) => {
  const { id: shopId } = req.params;

  const shop = await Shop.findOneAndUpdate({ _id: shopId }, req.body, {
    new: true,
    runValidators: true,
  });

  if (!shop) {
    throw new CustomError.NotFoundError(`No shop with id : ${shopId}`);
  }

  res.status(StatusCodes.OK).json({ shop });
};

const deleteShop = async (req: Request, res: Response) => {
  const { id: shopId } = req.params;

  const shop = await Shop.findOne({ _id: shopId });

  if (!shop) {
    throw new CustomError.NotFoundError(`No shop with id : ${shopId}`);
  }

  await shop.deleteOne();

  res.status(StatusCodes.OK).json({ msg: "Success! Product removed." });
};

export { getAllShops, createShop, deleteShop, getShop, updateShop };
