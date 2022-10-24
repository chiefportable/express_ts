"use strict";
/**
 * Author: Kwame Ato
 * Date: 24th October, 2022
 */
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const express_handlebars_1 = require("express-handlebars");
const path_1 = __importDefault(require("path"));
const Handlers_1 = require("./Handlers");
const PORT = process.env.PORT || 8000;
const app = (0, express_1.default)();
/**
 * configure handlebars view engine
 * *********************************
 */
app.engine("handlebars", (0, express_handlebars_1.engine)({
    defaultLayout: "main",
}));
app.set("view engine", "handlebars");
app.set("views", path_1.default.join(__dirname, "../views"));
/**
 * end of engine configuration
 */
/**
 * Adding static files to
 */
app.use(express_1.default.static(path_1.default.join(__dirname, "../public/")));
//End of adding static files
app.get("/", Handlers_1.home);
app.get("/about", Handlers_1.about);
/**
 *
 * creating custome errror
 * pages for our application
 *
 * */
app.use(Handlers_1.notFound);
app.use(Handlers_1.internalError);
app.listen(PORT, () => {
    console.log(`server is running on http://localhost:${PORT}\npress Ctrl + C to stop server`);
});
