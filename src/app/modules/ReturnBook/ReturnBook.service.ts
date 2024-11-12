import { PrismaClient } from "@prisma/client"
import { subDays, differenceInDays } from "date-fns";

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
    console.log(overBorrows
    );
}


export const ReturnBookService = {
    returnBookDB
}