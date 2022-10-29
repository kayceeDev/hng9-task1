const express = require("express");
import { NextFunction, Request, Response } from "express";
import expressAsyncHandler from "express-async-handler";

const router = express.Router();

router.use(
  "/",
  expressAsyncHandler(
    async (req: Request, res: Response, next: NextFunction) => {
      if (req.originalUrl === "/") {
        res
          .status(200)
          .json({
            message:
              "Welcome to HNG Task1 API!, go to the main page by adding /api/v1 to the url",
          });
        return;
      }
      res.status(200).json({
        message: `Can't find the ${req.method} method for ${req.originalUrl} on this server`,
      });
    }
  )
);

export default router;
