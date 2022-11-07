"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.headers = exports.internalError = exports.notFound = exports.about = exports.home = void 0;
const Fortunes_js_1 = __importDefault(require("./Fortunes.js"));
const home = (req, res) => {
    res.render("home", {
        message: "Hello Esteem programmer",
        age: 16
    });
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
const headers = (req, res) => {
    res.type("text/plain");
    const headers = Object.entries(req.headers);
    headers.map(([key, value]) => {
        return `${key}: ${value}`;
    });
    res.send(headers.join('\n'));
};
exports.headers = headers;
