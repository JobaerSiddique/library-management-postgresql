"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BookRoutes = void 0;
const express_1 = __importDefault(require("express"));
const Book_controller_1 = require("./Book.controller");
const router = express_1.default.Router();
router.post('/', Book_controller_1.BookController.createBook);
router.get('/', Book_controller_1.BookController.getAllBook);
router.get('/:bookId', Book_controller_1.BookController.getBookByID);
router.put('/:bookId', Book_controller_1.BookController.updateBook);
router.delete('/:bookId', Book_controller_1.BookController.deleteBook);
exports.BookRoutes = router;
