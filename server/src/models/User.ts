import { Schema, model, Document, Types } from "mongoose";
import validator from "validator";
import { genSalt, hash, compare } from "bcrypt";
import uniqueValidator from "mongoose-unique-validator";

export interface IUser extends Document {
  id: string;
  first_name?: string;
  last_name?: string;
  email: string;
  password: string;
  address?: string;
  phone?: string;
  avatar: object;
  role: string;
  shop: Types.ObjectId;
  comparePassword(candidatePassword: string): Promise<boolean>;
}

const UserSchema = new Schema<IUser>(
  {
    first_name: {
      type: String,
      trim: true,
      maxLength: [100, "Firstname can not be more than 100 characters"],
    },
    last_name: {
      type: String,
      trim: true,
      maxLength: [100, "Lastname can not be more than 100 characters"],
    },
    email: {
      type: String,
      lowercase: true,
      unique: true,
      required: [true, "Please provide email"],
      validate: [validator.isEmail, "Please provide a valid email address"],
    },
    password: {
      type: String,
      required: [true, "Please provide password"],
      minLength: [6, "Password can not be less than 6 characters"],
    },
    address: {
      type: String,
    },
    phone: {
      type: String,
      trim: true,
      minLength: [10, "Phone must be 10 numbers"],
      maxLength: [10, "Phone must be 10 numbers"],
    },
    avatar: {
      type: {
        path: String,
        filename: String,
      },
      default: {
        path: "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png",
        filename: "avatar",
      },
    },
    role: {
      type: String,
      enum: ["admin", "seller", "user"],
      default: "user",
    },
    shop: {
      type: Schema.Types.ObjectId,
      ref: "Shop",
    },
  },
  { timestamps: true }
);

UserSchema.pre("save", async function () {
  if (!this.isModified("password")) return;
  const salt = await genSalt(10);
  this.password = await hash(this.password, salt);
});

UserSchema.methods.comparePassword = async function (
  candidatePassword: string
) {
  const isMatch = await compare(candidatePassword, this.password);
  return isMatch;
};

UserSchema.plugin(uniqueValidator, {
  message: "Error, expected {PATH} to be unique.",
});

export default model<IUser>("User", UserSchema);
