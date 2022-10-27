"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.store = exports.index = void 0;
const services_1 = require("../services");
/**list of resource */
const index = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const results = yield services_1.service.SubCategory.FindallSubCategory();
        res.status(200).json({
            status: true,
            data: results,
        });
    }
    catch (error) {
        if (error) {
            next(error);
        }
    }
});
exports.index = index;
/**resource store */
const store = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { subCategory_name, category } = req.body;
        const documents = {
            category,
            subCategory_name,
        };
        yield services_1.service.SubCategory.storeResource(documents);
        res.status(201).json({
            status: true,
            message: "Sub category successfully created"
        });
    }
    catch (error) {
        if (error) {
            console.log(error);
            next(error);
        }
    }
});
exports.store = store;
