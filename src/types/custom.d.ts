import { UserOperation } from "../interfaces";

declare global{
    namespace Express {
    export interface Request {
       result:number
    }
 }
}