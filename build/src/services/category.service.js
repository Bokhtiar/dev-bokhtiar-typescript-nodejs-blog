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
exports.createCategory = exports.findById = exports.findAll = void 0;
const models_1 = require("../models");
/* find resources by paginate */
const findAll = () => __awaiter(void 0, void 0, void 0, function* () {
    return yield models_1.Models.Categories.find();
});
exports.findAll = findAll;
// /* Find specific resource by _id */
const findById = (id) => __awaiter(void 0, void 0, void 0, function* () {
    return yield models_1.Models.Categories.findById(id);
});
exports.findById = findById;
// /* Find specific resource by key */
// export const findOneByKey = async (params: any): Promise<IDivision | null> => {
//   return await Models.Division.findOne({ ...params });
// };
/* Create new resource */
const createCategory = (data) => __awaiter(void 0, void 0, void 0, function* () {
    const newCategory = new models_1.Models.Categories({
        category_name: data.category_name
    });
    return yield newCategory.save();
});
exports.createCategory = createCategory;
// /* Find specific resource by id and update keys */
// export const findOneByIdAndUpdate = async (
//   id: string,
//   data: IDivisionCreateUpdate
// ): Promise<IDivision | null> => {
//   return await Models.Division.findByIdAndUpdate(id, { $set: { ...data } });
// };
// /* Find specific resource by id and destroy */
// export const findOneByIdAndDestroy = async (
//   id: string
// ): Promise<IDivision | null> => {
//   return await Models.Division.findByIdAndDelete(id);
// };
// /**public service for devision */
// export const findAllDivisionByKey = async (): Promise<IDivision[] | []> => {
//   return await Models.Division.find(
//     {},
//     { created_by: 0, createdAt: 0, updatedAt: 0 }
//   );
// };
