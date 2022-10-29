"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Routers = void 0;
const home_1 = __importDefault(require("./home"));
const base_1 = __importDefault(require("./base"));
exports.Routers = {
    homeRouter: home_1.default,
    baseRouter: base_1.default
};
