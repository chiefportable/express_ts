import { Request, Response, NextFunction } from "express";
import getFortune from "./Fortunes.js";
import HttpExceptionHandler from "./HttpExceptionHandler.js";

interface ObjectInterface{
    currency:{
        name: string;
        abbrev: string;
    },
    tours: [
        {name: string, price: string},
        {name: string, price: string}
    ],
    specialsUrl: string,
    currencies: string[]
}

const myobject: ObjectInterface = {
    currency: {
        name: "United State Dollars",
        abbrev: "USD",
    },

    tours: [
        {name: "Hood River", price: '$99.95'},
        {name: "Oregon Coast", price: "$159.95"}
    ],

    specialsUrl: "/january-spacials",
    currencies: ["USD","GBP","BTC"],
}

// const myobject = {
//     message: "Welcome to my homepage"
// }

const home = (req: Request, res: Response) =>{
    res.render("home",myobject);
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



export {home, about, notFound, internalError};