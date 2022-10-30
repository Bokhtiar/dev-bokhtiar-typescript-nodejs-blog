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
exports.storeResource = exports.FindAll = void 0;
const models_1 = require("../models");
/**list of resource */
const FindAll = () => __awaiter(void 0, void 0, void 0, function* () {
    return models_1.Models.Notification.find();
});
exports.FindAll = FindAll;
/**resource of store */
const storeResource = (data) => __awaiter(void 0, void 0, void 0, function* () {
    const newNotification = new models_1.Models.Notification({
        message: data.message
    });
    return yield newNotification.save();
});
exports.storeResource = storeResource;
