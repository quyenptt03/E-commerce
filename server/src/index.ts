import { config } from "dotenv";
import "express-async-errors";

//express
import express from "express";

// others packages
import cors from "cors";
import morgan from "morgan";
import bodyParser from "body-parser";
import cookieParser from "cookie-parser";

//database
import connectDB from "./db/connect";

// routes
import {
  userRouter,
  productRouter,
  categoryRouter,
  authRouter,
  shopRouter,
} from "./routers";

//middlewares
import errorHandlerMiddleware from "./middlewares/error-handler";

// config env
config();

const app = express();

const port = 5000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(morgan("tiny"));
app.use(cookieParser(process.env.JWT_SECRET));
app.use(cors());

app.get("/api", (req, res) => {
  res.send("Hello World!");
});

app.use("/api/v1/auth", authRouter);
app.use("/api/v1/users", userRouter);
app.use("/api/v1/shops", shopRouter);
app.use("/api/v1/categories", categoryRouter);
app.use("/api/v1/products", productRouter);

app.use(errorHandlerMiddleware);

const start = async () => {
  try {
    await connectDB(process.env.DB_URI);
    app.listen(port, () => {
      console.log(`Server is listening at port ${port}`);
    });
  } catch (error) {
    console.log(error);
  }
};

start();

export default app;
