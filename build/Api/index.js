"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var apiroute = express_1.default.Router();
apiroute.get('/', function (req, res) {
    res.send("to access the api data you need enter images");
});
exports.default = apiroute;
