"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const fortunes = [
    "Conquer your fears or they will conquer you",
    "Rivers and sprins",
    "Don't fear what you do no know",
    "You will have a pleasant surprise",
    "Whenever possible, keep it super simple"
];
function getFortune() {
    const idx = Math.floor(Math.random() * fortunes.length);
    return fortunes[idx];
}
exports.default = getFortune;
