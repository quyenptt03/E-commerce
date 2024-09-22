import { Schema, model, Document, Types } from "mongoose";
import { User } from ".";

export interface IShop extends Document {
  name: string;
  description: string;
  profilePhoto: object;
  headerBanner: object;
  reviewRate: number;
  numOfReviews: number;
  purchasesNumber: number;
  seller: Types.ObjectId;
  address: string;
}

const ShopSchema = new Schema<IShop>(
  {
    name: {
      type: String,
      trim: true,
      required: [true, "Please provide product name"],
      maxlength: [100, "Name can not be more than 100 characters"],
    },
    description: {
      type: String,
      maxlength: [1000, "Description can not be more than 1000 characters"],
    },
    profilePhoto: {
      type: {
        path: String,
        filename: String,
      },
      default: {
        path: "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png",
        filename: "avatar",
      },
    },
    headerBanner: {
      type: {
        path: String,
        filename: String,
      },
      default: {
        path: "https://cdn.vectorstock.com/i/500p/09/80/online-shopping-banner-vector-17230980.jpg",
        filename: "avatar",
      },
    },
    reviewRate: {
      type: Number,
      default: 0,
    },
    numOfReviews: {
      type: Number,
      default: 0,
    },
    purchasesNumber: {
      type: Number,
      default: 0,
    },
    seller: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    address: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

//@ts-ignore
ShopSchema.pre("deleteOne", { document: true }, async function () {
  try {
    await User.updateOne({ _id: this.seller }, { $unset: { shop: "" } });
  } catch (err) {
    console.error("Error removing shop reference from user:", err);
  }
});

export default model<IShop>("Shop", ShopSchema);
