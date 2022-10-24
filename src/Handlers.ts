import { Request, Response, NextFunction } from "express";
import getFortune from "./Fortunes";
import { StatusCodes } from "http-status-codes";
import HttpExceptionHandler from "./HttpExceptionHandler";

const home = (req: Request, res: Response) =>{
    return res.render("home");
}

const about = (req: Request, res: Response)=>{
    return res.render("about", {
        fortune: getFortune
    });
}

const notFound = (req: Request, res: Response)=>{
    res.status(StatusCodes.NOT_FOUND);
 return res.render("404");
}

const internalError = (err: HttpExceptionHandler,req: Request, res: Response, next: NextFunction)=>{
    console.log(err.message);
    res.status(StatusCodes.INTERNAL_SERVER_ERROR);
    return res.render("500");
}

export {home, about, notFound, internalError};