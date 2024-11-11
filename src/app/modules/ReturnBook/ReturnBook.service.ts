import { PrismaClient } from "@prisma/client"


const prisma = new PrismaClient();
const returnBookDB = async(borrowId: string)=>{
   
    const findBorrowId = await prisma.borrowRecoard.findUniqueOrThrow({
        where:{
            borrowId:borrowId
        }
    })
    console.log(findBorrowId);
    if(!findBorrowId || findBorrowId.returnDate){
        throw new Error("Borrow record not found or already returned")
    }

    await prisma.borrowRecoard.update({
        where:{
            borrowId:borrowId
        },
        data:{
            returnDate: new Date()
        }
    })
    await  prisma.book.update({
        where:{
            bookId: findBorrowId.bookId
        },
        data:{
           availableCopies:{
            increment: 1
           }
        }
    })
    
   
}




export const ReturnBookService = {
    returnBookDB
}