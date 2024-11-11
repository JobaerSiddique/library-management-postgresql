import { PrismaClient } from "@prisma/client"



const prisma = new PrismaClient()
const createBorrowDB= async(payload:any)=>{
    const {bookId,memberId} = payload

    const findBook = await prisma.book.findUniqueOrThrow({
        where:{
            bookId:bookId
        }
    })

    if(!findBook || findBook.availableCopies<=0){
        throw new Error("Book is not available for borrowing");
    }
    const result = await prisma.borrowRecoard.create({
        data:payload
    })

    await prisma.book.update({
        where:{
            bookId:bookId
        },
        data:{
            availableCopies: findBook.availableCopies-1
        }
    })
    return result;
}





export const BorrowService = {
    createBorrowDB
}