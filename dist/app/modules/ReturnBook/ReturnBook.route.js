"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReturnBookRoutes = void 0;
const express_1 = __importDefault(require("express"));
const ReturnBook_controller_1 = require("./ReturnBook.controller");
const router = express_1.default.Router();
router.post('/', ReturnBook_controller_1.ReturnBookController.returnBooks);
router.get('/overdue', ReturnBook_controller_1.ReturnBookController.overdueBorrows);
exports.ReturnBookRoutes = router;
