"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
require("dotenv/config");
const cors_1 = __importDefault(require("cors"));
const helmet_1 = __importDefault(require("helmet"));
const xss_clean_1 = __importDefault(require("xss-clean"));
const morgan_1 = __importDefault(require("morgan"));
const app = (0, express_1.default)();
// middlewares
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: true }));
app.use((0, cors_1.default)());
app.use((0, helmet_1.default)());
app.use((0, xss_clean_1.default)());
app.use((0, morgan_1.default)("dev"));
const routes_1 = require("./routes");
const port = process.env.PORT || 3000;
app.use("/api/v1", routes_1.Routers.homeRouter);
app.use('/', routes_1.Routers.baseRouter);
app.listen(port, () => {
    return console.log(`Express is listening at port ${port}`);
});
