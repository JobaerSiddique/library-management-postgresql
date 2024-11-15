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
exports.BorrowService = void 0;
const client_1 = require("@prisma/client");
const date_fns_1 = require("date-fns");
const prisma = new client_1.PrismaClient();
const createBorrowDB = (payload) => __awaiter(void 0, void 0, void 0, function* () {
    const { bookId, memberId } = payload;
    const findBook = yield prisma.book.findUniqueOrThrow({
        where: {
            bookId: bookId
        }
    });
    if (!findBook || findBook.availableCopies <= 0) {
        throw new Error("Book is not available for borrowing");
    }
    const result = yield prisma.borrowRecoard.create({
        data: payload
    });
    yield prisma.book.update({
        where: {
            bookId: bookId
        },
        data: {
            availableCopies: findBook.availableCopies - 1
        }
    });
    return result;
});
const overdueBorrowsDB = () => __awaiter(void 0, void 0, void 0, function* () {
    const overDays = (0, date_fns_1.subDays)(new Date(), 14);
    const overBorrows = yield prisma.borrowRecoard.findMany({
        where: {
            returnDate: null,
            borrowDate: {
                lt: overDays
            }
        },
        include: {
            book: { select: { title: true } },
            member: { select: { name: true } }
        }
    });
    const result = overBorrows.map((borrow) => ({
        borrowId: borrow.borrowId,
        bookTitle: borrow.book.title,
        borrowerName: borrow.member.name,
        overdueDays: (0, date_fns_1.differenceInDays)(new Date(), borrow.borrowDate) - 14,
    }));
    return result;
});
exports.BorrowService = {
    createBorrowDB,
    overdueBorrowsDB
};
