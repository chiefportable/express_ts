/**
 * Author: Kwame Ato
 * Date: 24th October, 2022
 */

import express, { Express, Request, response, Response} from "express";
import { engine, create } from "express-handlebars";
import path from "path";
import { home, about, notFound, internalError } from "./Handlers.js";

const PORT = process.env.PORT || 8000;

const app: Express = express();

const hbs = create({
    defaultLayout: "main",
    extname: ".hbs"
})

/**
 * configure handlebars view engine
 * *********************************
 */

app.engine("handlebars", hbs.engine);

app.set("view engine", "handlebars");
app.set("views", path.join(__dirname, "../views"));

/**
 * end of engine configuration
 */


/**
 * Adding static files to
 */
app.use(express.static(path.join(__dirname, "../public/")));


/**
 * http route
 */
app.get("/", home);

app.get("/about",about);


/**
 * 
 * creating custome errror
 * pages for our application
 * 
 * */

app.use(notFound);
app.use(internalError);

app.listen(PORT, ()=>{
    console.log(`server is running on http://localhost:${PORT}\npress Ctrl + C to terminate server`);
})
