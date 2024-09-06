import { config } from "dotenv";
import express from "express";

// others packages
import cors from "cors";
import morgan from "morgan";
import bodyParser from "body-parser";
import cookieParser from "cookie-parser";

//database
import connectDB from "./db/connect";

// routes
import { userRouter } from "./routers";

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

app.get("/", (req, res) => {
  res.send("Hello, TypeScript + Node.js + Express!");
});

app.use("/api/v1/users", userRouter);

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
