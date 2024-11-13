var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { catchAsync } from "../../../shared/catchAsync";
import sendResponse from "../../../shared/sendResponse";
import { BookService } from "./Book.service";
import httpStatus from 'http-status';
const createBook = catchAsync((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const data = req.body;
    const result = yield BookService.createBookDB(data);
    sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: "Book created successfully",
        data: result
    });
}));
const getAllBook = catchAsync((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield BookService.getAllBookDB();
    sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: "Books retrieved successfully",
        data: result
    });
}));
const getBookByID = catchAsync((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { bookId } = req.params;
    const result = yield BookService.getBookIDDB(bookId);
    sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: "Book retrieved successfully",
        data: result
    });
}));
const updateBook = catchAsync((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { bookId } = req.params;
    const data = req.body;
    const result = yield BookService.updateBookDB(bookId, data);
    sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: "Book updated successfully",
        data: result
    });
}));
const deleteBook = catchAsync((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { bookId } = req.params;
    const result = yield BookService.deleteBookDB(bookId);
    sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: "Book successfully deleted",
        data: ''
    });
}));
export const BookController = {
    createBook,
    getAllBook,
    getBookByID,
    updateBook,
    deleteBook,
};
