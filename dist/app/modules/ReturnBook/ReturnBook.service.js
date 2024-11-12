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
exports.ReturnBookService = void 0;
const client_1 = require("@prisma/client");
const date_fns_1 = require("date-fns");
const prisma = new client_1.PrismaClient();
const returnBookDB = (borrowId) => __awaiter(void 0, void 0, void 0, function* () {
    const findBorrowId = yield prisma.borrowRecoard.findUniqueOrThrow({
        where: {
            borrowId: borrowId
        }
    });
    console.log(findBorrowId);
    if (!findBorrowId || findBorrowId.returnDate) {
        throw new Error("Borrow record not found or already returned");
    }
    yield prisma.borrowRecoard.update({
        where: {
            borrowId: borrowId
        },
        data: {
            returnDate: new Date()
        }
    });
    yield prisma.book.update({
        where: {
            bookId: findBorrowId.bookId
        },
        data: {
            availableCopies: {
                increment: 1
            }
        }
    });
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
    console.log(overBorrows);
});
exports.ReturnBookService = {
    returnBookDB
};
