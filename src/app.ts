import express from "express";
import "dotenv/config";
import cors from "cors";
import helmet from "helmet";
import xss from "xss-clean";
import morgan from "morgan";

const app = express();

// middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use(helmet());
app.use(xss());
app.use(morgan("dev"));
import {Routers} from "./routes"

const port: string | number = process.env.PORT || 3000;

app.use("/api/v1", Routers.homeRouter);
app.use('/', Routers.baseRouter);
app.use("/api/v1/operation", Routers.operation)

app.listen(port, () => {
  return console.log(`Express is listening at port ${port}`);
});
