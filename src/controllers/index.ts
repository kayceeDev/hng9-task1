import { NextFunction, Request, Response } from "express";
import expressAsyncHandler from "express-async-handler";
import { services } from "../services";
import { UserDetails } from "../interfaces";

const home = expressAsyncHandler(async (req:Request, res:Response, next:NextFunction) :Promise<void>=> {
    const userDetails:UserDetails = {
        slackUsername:"Ekene Nwobodo",
        backend:true,
        age:28,
        bio:"I am a passionate individual who is driven to create solutions for end users using Web and Machine learning technologies"
    }

    services.createSendData(userDetails,"success","Unauthenticated",res)
    return;
})

export const controllers = {
    home
}