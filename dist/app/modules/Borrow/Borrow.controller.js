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
import { BorrowService } from "./Borrow.service";
import httpStatus from 'http-status';
const createBorrow = catchAsync((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const data = req.body;
    const result = yield BorrowService.createBorrowDB(data);
    sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: "Book borrowed successfully",
        data: result
    });
}));
const overdueBorrows = catchAsync((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield BorrowService.overdueBorrowsDB();
    sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: "Overdue borrows fetched successfully",
        data: result
    });
}));
export const BorrowController = {
    createBorrow,
    overdueBorrows
};
