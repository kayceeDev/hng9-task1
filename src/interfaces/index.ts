import { Request } from "express";

export interface UserDetails<T> {
  data : T
}

export type UserType = {
  slackUsername: string;
  backend: boolean;
  age: number;
  bio: string;
}

export enum OperationType  {
  Add = "ADDITION",
  Sub = "SUBTRACTION",
  Mul = "MULTIPLY"
}

export interface UserOperation{
  operation_type:OperationType;
  x:number;
  y:number
}

// export interface IUserOperationRequest extends Request  {
//   userOperations:UserOperation
// }


