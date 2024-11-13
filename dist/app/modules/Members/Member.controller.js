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
import { MemberService } from "./Member.service";
import httpStatus from 'http-status';
const createMember = catchAsync((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const data = req.body;
    const result = yield MemberService.createMemberDB(data);
    sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: "Member created successfully",
        data: result
    });
}));
const getAllMembers = catchAsync((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield MemberService.getAllMembersDB();
    sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: "All members fetched successfully",
        data: result
    });
}));
const getMemberById = catchAsync((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { memberId } = req.params;
    const result = yield MemberService.getMemberByIdDB(memberId);
    sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: "Member fetched successfully",
        data: result
    });
}));
const updateMember = catchAsync((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { memberId } = req.params;
    const data = req.body;
    const result = yield MemberService.updateMemberDB(memberId, data);
    sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: "Member updated successfully",
        data: result
    });
}));
const deleteMember = catchAsync((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { memberId } = req.params;
    yield MemberService.deleteMemberDB(memberId);
    sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: "Member deleted successfully",
        data: ''
    });
}));
export const MemberController = {
    createMember,
    getAllMembers,
    getMemberById,
    updateMember,
    deleteMember
};
