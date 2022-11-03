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
exports.FindByDelete = exports.findByUpdate = exports.FindOneId = exports.store = exports.FindAll = void 0;
const models_1 = require("../models");
/**list of resource */
const FindAll = () => __awaiter(void 0, void 0, void 0, function* () {
    return yield models_1.Models.Todo.find();
});
exports.FindAll = FindAll;
/**store of resource */
const store = (data) => __awaiter(void 0, void 0, void 0, function* () {
    const storeResource = new models_1.Models.Todo({
        title: data.title,
        description: data.description,
    });
    return yield storeResource.save();
});
exports.store = store;
/**single reosurce */
const FindOneId = (id) => __awaiter(void 0, void 0, void 0, function* () {
    return yield models_1.Models.Todo.findById(id);
});
exports.FindOneId = FindOneId;
/**update resource */
const findByUpdate = (id, data) => __awaiter(void 0, void 0, void 0, function* () {
    return yield models_1.Models.Todo.findByIdAndUpdate(id, { $set: Object.assign({}, data) });
});
exports.findByUpdate = findByUpdate;
/**destory resource*/
const FindByDelete = (id) => __awaiter(void 0, void 0, void 0, function* () {
    return yield models_1.Models.Todo.findByIdAndRemove(id);
});
exports.FindByDelete = FindByDelete;
