import { Request, Response, NextFunction } from "express";
import getFortune from "./Fortunes.js";
import HttpExceptionHandler from "./HttpExceptionHandler.js";

const home = (req: Request, res: Response) =>{
    res.render("home",{
        message: "Hello Esteem programmer"
    });
}

const about = (req: Request, res: Response)=>{
    res.render("about", {
        fortune: getFortune(),
    });
}

const notFound = (req: Request, res: Response)=>{
    res.status(404);
    res.render("404");
}

const internalError = (err: HttpExceptionHandler,req: Request, res: Response, next: NextFunction)=>{
    res.status(500);
    res.render("500");
}

const headers = (req: Request, res: Response)=>{
    
    res.type("text/plain");
    const headers = Object.entries(req.headers);
    headers.map(([key, value])=>{
        return `${key}: ${value}`
    })

    res.send(headers.join('\n'))
}



export {home, about, notFound, internalError, headers};