import { Schema, model, Document, Types } from "mongoose";

export interface IProduct extends Document {
  name: string;
  price: number;
  unit: string;
  description: string;
  images: object[];
  category: Types.ObjectId;
  manufacturer: string;
  colors: string[];
  featured: boolean;
  freeShipping: boolean;
  inventory: number;
  averageRating: number;
  numOfReviews: number;
  seller: Types.ObjectId;
}

const ProductSchema = new Schema<IProduct>(
  {
    name: {
      type: String,
      trim: true,
      required: [true, "Please provide product name"],
      maxlength: [100, "Name can not be more than 100 characters"],
    },
    price: {
      type: Number,
      required: [true, "Please provide product price"],
      default: 0,
    },
    unit: {
      type: String,
      default: "VND",
    },
    description: {
      type: String,
      required: [true, "Please provide product description"],
      maxlength: [1000, "Description can not be more than 1000 characters"],
    },
    images: {
      type: [
        {
          path: String,
          filename: String,
        },
      ],
      required: [true, "Please provide herd images"],
    },
    category: {
      type: Schema.Types.ObjectId,
      ref: "Category",
      require: true,
    },
    manufacturer: {
      type: String,
      required: [true, "Please provide manufacturer"],
    },
    colors: {
      type: [String],
    },
    featured: {
      type: Boolean,
      default: false,
    },
    freeShipping: {
      type: Boolean,
      default: false,
    },
    inventory: {
      type: Number,
      required: true,
      default: 15,
    },
    averageRating: {
      type: Number,
      default: 0,
    },
    numOfReviews: {
      type: Number,
      default: 0,
    },
    seller: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
  },
  { timestamps: true }
);

export default model<IProduct>("Product", ProductSchema);
