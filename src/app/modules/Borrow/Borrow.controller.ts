import { catchAsync } from "../../../shared/catchAsync";
import sendResponse from "../../../shared/sendResponse";
import { BorrowService } from "./Borrow.service";
import  httpStatus  from 'http-status';



const createBorrow = catchAsync(async(req,res)=>{
    const data= req.body;
    const result = await BorrowService.createBorrowDB(data);
    sendResponse(res,{
        statusCode:httpStatus.OK,
        success:true,
        message:"Book borrowed successfully",
        data:result
    })
})





export const BorrowController = {
    createBorrow
}