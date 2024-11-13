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
const createMemberDB = (payload) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield prisma.member.create({
        data: payload
    });
    return result;
});
const getAllMembersDB = () => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield prisma.member.findMany({});
    return result;
});
const getMemberByIdDB = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield prisma.member.findUniqueOrThrow({
        where: {
            memberId: id
        }
    });
    return result;
});
const updateMemberDB = (id, payload) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield prisma.member.update({
        where: {
            memberId: id
        },
        data: payload
    });
    return result;
});
const deleteMemberDB = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield prisma.member.delete({
        where: {
            memberId: id
        }
    });
    return result;
});
export const MemberService = {
    createMemberDB,
    getAllMembersDB,
    getMemberByIdDB,
    updateMemberDB,
    deleteMemberDB
};
