"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Notification = void 0;
const mongoose_1 = require("mongoose");
const newSchema = new mongoose_1.Schema({
    message: {
        type: String,
        required: true,
    },
}, {
    timestamps: true,
});
exports.Notification = (0, mongoose_1.model)("Notification", newSchema);
