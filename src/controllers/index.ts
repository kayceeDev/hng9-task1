import { NextFunction, Request, Response } from "express";
import expressAsyncHandler from "express-async-handler";
import { services } from "../services";
import { OperationData, UserDetails, UserType } from "../interfaces";

const home = expressAsyncHandler(
  async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    const userDetails: UserDetails<UserType> = {
      data: {
        slackUsername: "Ekene Nwobodo",
        backend: true,
        age: 28,
        bio: "I am a passionate individual who is driven to create solutions for end users using Web and Machine learning technologies",
      },
    };

    services.createSendData(userDetails, "success", "Unauthenticated", res);
    return;
  }
);

const userOperation = expressAsyncHandler(
  async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    const { operation_type, x, y } = req.body;
    if (typeof x !== "number" || typeof y !== "number") {
      res.status(400).json({ error: "Invalid Numbers" });
      return;
    }
    if (!Number.isInteger(x) || !Number.isInteger(y)) {
      {
        res.status(400).json({ error: "Invalid : Must be an Integer" });
        return;
      }
    }
    let result;
    switch (operation_type) {
      case operation_type.toUpperCase() === "ADDITION":
        result = x + y;
        break;
      case operation_type.toUpperCase() === "SUBTRACTION":
        result = x - y;
      case operation_type.toUpperCase() === "MULTIPLICATION":
        result = x * y;
      default:
        res.status(500).json({ error: "Invalid Operation Type" });
        break;
    }

    const operationData: UserDetails<OperationData> = {
      data: { slackUsername: "Ekene Nwobodo", result: result, operation_type },
    };

    services.createSendData(operationData, "success", "Unauthenticated", res);
    return;
  }
);

export const controllers = {
  home,
  userOperation
};
