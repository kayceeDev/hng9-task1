import { Response } from "express";
import { UserDetails } from "../interfaces";

export const createSendData = (
  data: UserDetails,
  status: string,
  message: string,
  res: Response
) => {
  return res.status(200).json(data);
};
