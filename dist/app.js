"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const express_handlebars_1 = require("express-handlebars");
const path_1 = __importDefault(require("path"));
const http_status_codes_1 = require("http-status-codes");
const Fortunes_1 = __importDefault(require("./Fortunes"));
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
app.get("/", (req, res) => {
    res.render("home");
});
app.get("/about", (req, res) => {
    res.render("about", { fortune: Fortunes_1.default });
});
//creating custom 404 page
app.use((req, res) => {
    res.status(http_status_codes_1.StatusCodes.NOT_FOUND);
    res.render("404");
});
//custom 500 page
app.use((err, req, res, next) => {
    console.error(err.message);
    res.status(http_status_codes_1.StatusCodes.INTERNAL_SERVER_ERROR);
    res.render("500");
});
app.listen(PORT, () => {
    console.log(`Express started on http://localhost:${PORT} \n` +
        `press Ctrl + C to terminate`);
});
