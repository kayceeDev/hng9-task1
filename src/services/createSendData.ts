import { Response } from "express";
import { UserDetails } from "../interfaces";

export const createSendData = <T>(
  data: UserDetails<T>,
  status: string,
  message: string,
  res: Response
) => {
  return res.status(200).json({...data?.data});
};
