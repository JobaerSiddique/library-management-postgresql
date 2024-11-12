import { catchAsync } from "../../../shared/catchAsync";
import sendResponse from "../../../shared/sendResponse";
import { ReturnBookService } from "./ReturnBook.service";
import  httpStatus  from 'http-status';

const returnBooks = catchAsync(async(req,res)=>{
    const{borrowId} = req.body;
    const result = await ReturnBookService.returnBookDB(borrowId)
    sendResponse(res,{
        statusCode:httpStatus.OK,
        success:true,
        message:"Book returned successfully",
        data:''
    })
})

const overdueBorrows = catchAsync(async(req,res)=>{

})


export const ReturnBookController= {
    returnBooks,
    overdueBorrows
}