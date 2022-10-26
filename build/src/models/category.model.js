"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Categories = void 0;
const mongoose_1 = require("mongoose");
const CategorySchema = new mongoose_1.Schema({
    category_name: {
        type: String,
        trim: true,
    }
}, {
    timestamps: true,
});
exports.Categories = (0, mongoose_1.model)("categories", CategorySchema);
