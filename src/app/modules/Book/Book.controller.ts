
import { catchAsync } from "../../../shared/catchAsync";
import sendResponse from "../../../shared/sendResponse";
import { BookService } from "./Book.service";
import  httpStatus  from 'http-status';


const createBook = catchAsync(async(req,res)=>{
    const data = req.body;
    const result = await BookService.createBookDB(data);
    sendResponse(res,{
        statusCode: httpStatus.CREATED,
        success: true,
        message: "Book created successfully",
        data: result
    });
})


const getAllBook = catchAsync(async(req,res)=>{
    const result = await BookService.getAllBookDB();
    sendResponse(res,{
        statusCode:httpStatus.OK,
        success: true,
        message: "Books retrieved successfully",
        data: result
    })
})

const getBookByID = catchAsync(async(req,res)=>{
    const {bookId} = req.params
    const result = await BookService.getBookIDDB(bookId);
    sendResponse(res,{
        statusCode:httpStatus.OK,
        success: true,
        message: "Book retrieved successfully",
        data: result
    })
})


const updateBook = catchAsync(async(req,res)=>{
    const {bookId} = req.params
    const data = req.body;
    const result = await BookService.updateBookDB(bookId,data);
    sendResponse(res,{
        statusCode:httpStatus.OK,
        success: true,
        message: "Book updated successfully",
        data: result
    })
})

const deleteBook = catchAsync(async(req,res)=>{
    const {bookId} = req.params;
    const result = await BookService.deleteBookDB(bookId);
    sendResponse(res,{
        statusCode:httpStatus.OK,
        success: true,
        message: "Book successfully deleted",
        data: ''
    })
})


export const BookController = {
    createBook,
    getAllBook,
    getBookByID,
    updateBook,
    deleteBook,
    
}