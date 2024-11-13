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
import { ReturnBookService } from "./ReturnBook.service";
import httpStatus from 'http-status';
const returnBooks = catchAsync((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { borrowId } = req.body;
    const result = yield ReturnBookService.returnBookDB(borrowId);
    sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: "Book returned successfully",
        data: ''
    });
}));
export const ReturnBookController = {
    returnBooks,
};
