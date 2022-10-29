import { Request } from "express";

export interface UserDetails {
  slackUsername: string;
  backend: boolean;
  age: number;
  bio: string;
}

export interface IUserRequest extends Request{
  userDetails:UserDetails
}


