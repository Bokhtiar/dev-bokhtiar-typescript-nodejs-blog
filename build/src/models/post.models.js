"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Posts = void 0;
const mongoose_1 = require("mongoose");
const postSchema = new mongoose_1.Schema({
    title: {
        type: String,
        required: true,
        trim: true,
        unique: true,
    },
    category: {
        type: String,
        required: true,
        ref: "categories",
        trim: true,
    },
    subCategory: {
        type: String,
        required: true,
        ref: "SubCategory",
        trim: true,
    },
    description: {
        type: String,
        trim: true,
        required: true,
    },
}, {
    timestamps: true,
});
exports.Posts = (0, mongoose_1.model)("Posts", postSchema);
