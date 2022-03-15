"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var index_1 = __importDefault(require("./Api/Images/index"));
var Api_1 = __importDefault(require("./Api"));
var app = (0, express_1.default)();
var port = 8080;
app.listen(port, function () {
    console.log("server started at localhost:".concat(port));
});
app.use('/api/images', index_1.default);
app.use('/api', Api_1.default);
exports.default = app;
