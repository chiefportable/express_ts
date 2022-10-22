import express, {Express, Response, Request, ErrorRequestHandler, NextFunction } from "express";
import HttpExceptionHandler from "./HttpExceptionHandler";
import { engine } from "express-handlebars";
import path from "path";
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


const fortunes: string[] = [
    "Conquer your fears or they will conquer you",
    "Rivers and sprins",
    "Don't fear what you do no know",
    "You will have a pleasant surprise",
    "Whenever possible, keep it super simple"
];


app.get("/",(req: Request, res: Response)=>{
    res.render("home");
});

app.get("/about",(req: Request,res: Response)=>{
    const randomFortune = fortunes[ Math.floor(Math.random()* fortunes.length)];
    res.render("about", {fortune: randomFortune});
});

//creating custom 404 page
app.use((req: Request, res: Response)=>{
    res.status(404);
    res.render("404");
})

//custom 500 page
app.use((err: HttpExceptionHandler,req: Request, res: Response,next: NextFunction)=>{
    console.error(err.message);
    res.status(500);
    res.render("500");
})

app.listen(PORT,()=>{
    console.log(`Express started on http://localhost:${PORT} \n`+
    `press Ctrl + C to terminate`);
})
