import { config } from "dotenv";
import express from "express";
import connectDB from "../db/connect";
import { Category } from "../models";

import jsonCategory from "../data/category.json";
import slugify from "slugify";

config();

const populateCategories = async () => {
  let categoryList = [];
  await Category.deleteMany();
  for (let i = 0; i < jsonCategory.length; i++) {
    categoryList.push({
      title: jsonCategory[i].title,
      slug: slugify(jsonCategory[i].title),
    });
  }
  await Category.create(categoryList);
};

const start = async () => {
  try {
    await connectDB(process.env.DB_URI);
    await populateCategories();
    console.log("Success");
    process.exit(0);
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

start();
