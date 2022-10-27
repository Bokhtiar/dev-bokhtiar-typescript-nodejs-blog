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
exports.findByIdAndDelete = exports.findByIdAndUpdate = exports.FindById = exports.StoreResource = exports.FindAll = void 0;
const models_1 = require("../models");
/**list of resource */
const FindAll = () => __awaiter(void 0, void 0, void 0, function* () {
    return yield models_1.Models.Posts.find().populate('category', "category_name").populate('subCategory', "subCategory_name");
});
exports.FindAll = FindAll;
/**store of resource */
const StoreResource = (data) => __awaiter(void 0, void 0, void 0, function* () {
    const newPost = new models_1.Models.Posts({
        category: data.category,
        subCategory: data.subCategory,
        image: data.image,
        title: data.title,
        description: data.description,
    });
    return newPost.save();
});
exports.StoreResource = StoreResource;
/**single resource */
const FindById = (id) => __awaiter(void 0, void 0, void 0, function* () {
    return yield models_1.Models.Posts.findById(id).populate("category", "category_name").populate("subCategory", "subCategory_name");
});
exports.FindById = FindById;
/**update resource */
const findByIdAndUpdate = (id, data) => __awaiter(void 0, void 0, void 0, function* () {
    return yield models_1.Models.Posts.findByIdAndUpdate(id, { $set: Object.assign({}, data) });
});
exports.findByIdAndUpdate = findByIdAndUpdate;
/**destroy resource */
const findByIdAndDelete = (id) => __awaiter(void 0, void 0, void 0, function* () {
    return yield models_1.Models.Posts.findByIdAndDelete(id);
});
exports.findByIdAndDelete = findByIdAndDelete;
