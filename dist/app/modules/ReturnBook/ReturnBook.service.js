var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();
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
export const ReturnBookService = {
    returnBookDB
};
