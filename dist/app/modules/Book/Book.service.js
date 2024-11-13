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
const createBookDB = (payload) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield prisma.book.create({
        data: payload
    });
    return result;
});
const getAllBookDB = () => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield prisma.book.findMany({});
    return result;
});
const getBookIDDB = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield prisma.book.findUniqueOrThrow({
        where: {
            bookId: id
        }
    });
    return result;
});
const updateBookDB = (id, payload) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield prisma.book.update({
        where: {
            bookId: id
        },
        data: payload
    });
    return result;
});
const deleteBookDB = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield prisma.book.delete({
        where: {
            bookId: id
        }
    });
    return result;
});
export const BookService = {
    createBookDB,
    getAllBookDB,
    getBookIDDB,
    updateBookDB,
    deleteBookDB
};
