"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.controllers = void 0;
const express_async_handler_1 = __importDefault(require("express-async-handler"));
const services_1 = require("../services");
const home = (0, express_async_handler_1.default)(async (req, res, next) => {
    const userDetails = {
        slackUsername: "Ekene Nwobodo",
        backend: true,
        age: 28,
        bio: "I am a passionate individual who is driven to create solutions for end users using Web and Machine learning technologies"
    };
    services_1.services.createSendData(userDetails, "success", "Unauthenticated", res);
    return;
});
exports.controllers = {
    home
};
