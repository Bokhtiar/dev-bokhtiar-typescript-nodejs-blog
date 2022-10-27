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
exports.FindByIdDelete = exports.findOneByIdAndUpdate = exports.FindById = exports.storeResource = exports.FindallSubCategory = void 0;
const models_1 = require("../models");
/**find all resource */
const FindallSubCategory = () => __awaiter(void 0, void 0, void 0, function* () {
    return yield models_1.Models.SUbCategories.find().populate("category", "category_name");
});
exports.FindallSubCategory = FindallSubCategory;
/**store of resource */
const storeResource = (data) => __awaiter(void 0, void 0, void 0, function* () {
    const newSubCategory = new models_1.Models.SUbCategories({
        subCategory_name: data.subCategory_name,
        category: data.category,
    });
    return yield newSubCategory.save();
});
exports.storeResource = storeResource;
/**single resource show */
const FindById = (id) => __awaiter(void 0, void 0, void 0, function* () {
    return yield models_1.Models.SUbCategories.findById(id).populate("category", "category_name");
});
exports.FindById = FindById;
/* Find specific resource by id and update keys */
const findOneByIdAndUpdate = (id, data) => __awaiter(void 0, void 0, void 0, function* () {
    return yield models_1.Models.SUbCategories.findByIdAndUpdate(id, { $set: Object.assign({}, data) });
});
exports.findOneByIdAndUpdate = findOneByIdAndUpdate;
/**find by id destroy */
const FindByIdDelete = (id) => __awaiter(void 0, void 0, void 0, function* () {
    return yield models_1.Models.SUbCategories.findByIdAndDelete(id);
});
exports.FindByIdDelete = FindByIdDelete;
