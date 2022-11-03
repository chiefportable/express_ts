"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.internalError = exports.notFound = exports.about = exports.home = void 0;
const Fortunes_js_1 = __importDefault(require("./Fortunes.js"));
const myobject = {
    currency: {
        name: "United State Dollars",
        abbrev: "USD",
    },
    tours: [
        { name: "Hood River", price: '$99.95' },
        { name: "Oregon Coast", price: "$159.95" }
    ],
    specialsUrl: "/january-spacials",
    currencies: ["USD", "GBP", "BTC"],
};
// const myobject = {
//     message: "Welcome to my homepage"
// }
const home = (req, res) => {
    res.render("home", myobject);
};
exports.home = home;
const about = (req, res) => {
    res.render("about", {
        fortune: (0, Fortunes_js_1.default)(),
    });
};
exports.about = about;
const notFound = (req, res) => {
    res.status(404);
    res.render("404");
};
exports.notFound = notFound;
const internalError = (err, req, res, next) => {
    res.status(500);
    res.render("500");
};
exports.internalError = internalError;
