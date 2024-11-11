import { PrismaClient } from "@prisma/client";






const prisma = new PrismaClient()

const createBookDB = async(payload:any)=>{
    const result = await prisma.book.create({
        data:payload
    })
    return result;
}


const getAllBookDB = async()=>{
    const result = await prisma.book.findMany({});
    return result;
}

const getBookIDDB = async(id:string)=>{
    const result = await prisma.book.findUniqueOrThrow({
       where:{
        bookId:id
       }
    })
    return result;
}

const updateBookDB = async(id:string,payload:any)=>{
    const result = await prisma.book.update({
        where:{
            bookId:id
        },
        data:payload
    })
    return result;
}

const deleteBookDB = async(id:string)=>{
    const result = await prisma.book.delete({
        where:{
            bookId:id
        }
    })
    return result;
}


export const BookService={
    createBookDB,
    getAllBookDB,
    getBookIDDB,
    updateBookDB,
    deleteBookDB
}