"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppRouter = void 0;
const express_1 = require("express");
const category_route_1 = require("./category.route");
const subCategory_route_1 = require("./subCategory.route");
exports.AppRouter = (0, express_1.Router)();
exports.AppRouter.use('/category', category_route_1.categoryRoute);
exports.AppRouter.use('/sub-category', subCategory_route_1.SubCategoryRouter);
