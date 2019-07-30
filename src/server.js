import express from "express";
import cors from "cors";
import morgan from "morgan";
import { connect } from "./connect";
import userRouter from "./resources/user/user.route";

export const app = express();

app.disable("x-powered-by");

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan("dev"));

app.use("/api", userRouter);

export const start = async () => {
  try {
    await connect();
    app.listen(3000, () => {
      console.log(`server is on 3000`);
    });
  } catch (e) {
    console.log(e);
  }
};
