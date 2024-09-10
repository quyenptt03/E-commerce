import { Schema, model } from "mongoose";
import uniqueValidator from "mongoose-unique-validator";

interface ICategory {
  title: string;
  slug: string;
}

const CategorySchema = new Schema<ICategory>(
  {
    title: {
      type: String,
      trim: true,
      required: [true, "Please provide category title"],
      maxLength: [100, "Title can not be more than 100 characters"],
    },
    slug: {
      type: String,
      unique: true,
      lowercase: true,
      autoIndex: false,
      index: true,
    },
  },
  { timestamps: true }
);

CategorySchema.plugin(uniqueValidator, {
  message: "Error, expected {PATH} to be unique.",
});

export default model<ICategory>("Category", CategorySchema);
