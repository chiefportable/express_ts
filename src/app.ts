import express, {Express, Response, Request, ErrorRequestHandler, NextFunction } from "express";
import HttpExceptionHandler from "./HttpExceptionHandler";
import { engine } from "express-handlebars";
import path from "path";
import { StatusCodes } from "http-status-codes";
import { getFortune } from "./Fortunes";


const PORT = process.env.PORT || 8000;

const app: Express = express();

/**
 * configure handlebars view engine
 * *********************************
 */

app.engine("handlebars",engine({
    defaultLayout: "main",
}))

app.set("view engine","handlebars");
app.set("views", path.join(__dirname,"../views"));

/**
 * end of engine configuration
 */


/**
 * Adding static files to 
 */
app.use(express.static(path.join(__dirname,"../public/")))

//End of adding static files


app.get("/",(req: Request, res: Response)=>{
    res.render("home");
});

app.get("/about",(req: Request,res: Response)=>{
    res.render("about", {fortune: getFortune});
});

//creating custom 404 page
app.use((req: Request, res: Response)=>{
    res.status(StatusCodes.NOT_FOUND);
    res.render("404");
})

//custom 500 page
app.use((err: HttpExceptionHandler,req: Request, res: Response,next: NextFunction)=>{
    console.error(err.message);
    res.status(StatusCodes.INTERNAL_SERVER_ERROR);
    res.render("500");
})

app.listen(PORT,()=>{
    console.log(`Express started on http://localhost:${PORT} \n`+
    `press Ctrl + C to terminate`);
})
