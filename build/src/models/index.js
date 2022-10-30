"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Models = void 0;
const category_model_1 = require("./category.model");
const comment_model_1 = require("./comment.model");
const subCategory_model_1 = require("./subCategory.model");
const post_models_1 = require("./post.models");
exports.Models = {
    Categories: category_model_1.Categories,
    Comment: comment_model_1.Comment,
    SUbCategories: subCategory_model_1.SUbCategories,
    Posts: post_models_1.Posts
};
