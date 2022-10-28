import express, { Request, Response } from "express";
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

const port = 3000;

app.get("/", (req: Request, res: Response) => {
  res.send("Hello World!");
});

app.listen(port, () => {
  return console.log(`Express is listening at http://localhost:${port}`);
});
