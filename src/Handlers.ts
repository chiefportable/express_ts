import { Request, Response, NextFunction } from "express";
import getFortune from "./Fortunes";
import HttpExceptionHandler from "./HttpExceptionHandler";

const home = (req: Request, res: Response) =>{
    return res.render("home");
}

const about = (req: Request, res: Response)=>{
    return res.render("about", {
        fortune: getFortune()
    });
}

const notFound = (req: Request, res: Response)=>{
    return res.render("404");
}

const internalError = (err: HttpExceptionHandler,req: Request, res: Response, next: NextFunction)=>{
    return res.render("500");
}


export {home, about, notFound, internalError};