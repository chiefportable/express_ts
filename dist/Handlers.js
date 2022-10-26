"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.internalError = exports.notFound = exports.about = exports.home = void 0;
const Fortunes_1 = __importDefault(require("./Fortunes"));
const home = (req, res) => {
    return res.render("home");
};
exports.home = home;
const about = (req, res) => {
    return res.render("about", {
        fortune: (0, Fortunes_1.default)()
    });
};
exports.about = about;
const notFound = (req, res) => {
    return res.render("404");
};
exports.notFound = notFound;
const internalError = (err, req, res, next) => {
    return res.render("500");
};
exports.internalError = internalError;
