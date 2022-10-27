"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SUbCategories = void 0;
const mongoose_1 = require("mongoose");
const subCategorySchema = new mongoose_1.Schema({
    subCategory_name: {
        type: String,
        trim: true,
        required: true,
    },
    category: {
        type: mongoose_1.Schema.Types.ObjectId,
        ref: "categories",
        required: true,
    }
}, {
    timestamps: true
});
exports.SUbCategories = (0, mongoose_1.model)('SubCategory', subCategorySchema);
