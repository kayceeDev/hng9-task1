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


export enum OperationType {
    Addition = "ADDITION",
    Sub = "SUBTRACTION",
    Mul = "MULTIPLY",
    ADDITION = "ADDITION"
}

export interface OperationData  {
  slackUsername:string;
  result?:number;
  operation_type:keyof OperationType;
}


export interface UserOperation{
  operation_type: OperationType;
  x:number;
  y:number
}

// export interface IUserOperationRequest extends Request  {
//   userOperations:UserOperation
// }


