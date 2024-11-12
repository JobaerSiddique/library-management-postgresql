import { PrismaClient } from "@prisma/client"
import { subDays, differenceInDays } from "date-fns";


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

const overdueBorrowsDB = async()=>{
    const overDays = subDays(new Date(),14)


    const overBorrows = await prisma.borrowRecoard.findMany({
        where:{
            returnDate:null,
            borrowDate:{
                lt:overDays
            }
        },
        include:{
            book:{select:{title:true}},
            member:{select:{name:true}}
        }
    })
    const result = overBorrows.map((borrow) => ({
        borrowId: borrow.borrowId,
        bookTitle: borrow.book.title,
        borrowerName: borrow.member.name,
        overdueDays: differenceInDays(new Date(), borrow.borrowDate) - 14,
      }));
      return result;
    
}



export const BorrowService = {
    createBorrowDB,
    overdueBorrowsDB
}