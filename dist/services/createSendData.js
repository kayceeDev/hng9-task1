"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createSendData = void 0;
const createSendData = (data, status, message, res) => {
    return res.json({
        status,
        message,
        data,
    });
};
exports.createSendData = createSendData;
