"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Comment = void 0;
const mongoose_1 = require("mongoose");
const CommentSchema = new mongoose_1.Schema({
    post: {
        type: String,
        required: true,
        ref: "categories",
        trim: true,
    },
    comment: {
        type: String,
        required: true
    }
}, {
    timestamps: true
});
exports.Comment = (0, mongoose_1.model)('Comment', CommentSchema);
