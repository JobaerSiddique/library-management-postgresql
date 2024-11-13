import { catchAsync } from "../../../shared/catchAsync";
import sendResponse from "../../../shared/sendResponse";
import { MemberService } from "./Member.service";
import  httpStatus  from 'http-status';



const createMember = catchAsync(async(req,res)=>{
    const data = req.body;
    const result = await MemberService.createMemberDB(data);
    sendResponse(res,{
        statusCode: httpStatus.CREATED,
        success: true,
        message: "Member created successfully",
        data: result
    })
})

const getAllMembers = catchAsync(async(req,res)=>{
    const result = await MemberService.getAllMembersDB();
    sendResponse(res,{
        statusCode: httpStatus.OK,
        success: true,
        message: "All members fetched successfully",
        data: result
    });
})

const getMemberById = catchAsync(async(req,res)=>{
    const {memberId}= req.params;
    const result = await MemberService.getMemberByIdDB(memberId);
    sendResponse(res,{
        statusCode: httpStatus.OK,
        success: true,
        message: "Member fetched successfully",
        data: result
    })
});


const updateMember = catchAsync(async(req,res)=>{
    const {memberId}= req.params;
    const data = req.body;
    const result = await MemberService.updateMemberDB(memberId,data);
    sendResponse(res,{
        statusCode: httpStatus.OK,
        success: true,
        message: "Member updated successfully",
        data: result
    })
})

const deleteMember = catchAsync(async(req,res)=>{
    const {memberId}= req.params;
    await MemberService.deleteMemberDB(memberId);
    sendResponse(res,{
        statusCode: httpStatus.OK,
        success: true,
        message: "Member deleted successfully",
        data:''
    })
});

export const MemberController = {
    createMember,
    getAllMembers,
    getMemberById,
    updateMember,
    deleteMember
}