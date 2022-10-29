"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const express_async_handler_1 = __importDefault(require("express-async-handler"));
const router = express.Router();
router.use("/", (0, express_async_handler_1.default)(async (req, res, next) => {
    if (req.originalUrl === "/") {
        res
            .status(200)
            .json({
            message: "Welcome to HNG Task1 API!, go to the main pae by adding /api/v1 to the url",
        });
        return;
    }
    res.status(200).json({
        message: `Can't find the ${req.method} method for ${req.originalUrl} on this server`,
    });
}));
exports.default = router;
