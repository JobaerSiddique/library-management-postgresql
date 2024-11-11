import { PrismaClient } from "@prisma/client"


const prisma = new PrismaClient();
const createMemberDB = async(payload:any)=>{
   const result = await prisma.member.create({
    data: payload
   });
return result;
}

const getAllMembersDB = async()=>{
    const result = await prisma.member.findMany({});
    return result;
    
}

const getMemberByIdDB = async(id:string)=>{
    const result = await prisma.member.findUniqueOrThrow({
        where:{
            memberId:id
        }
    });
    return result;
}

const updateMemberDB = async(id:string, payload:any)=>{
    const result = await prisma.member.update({
        where:{
            memberId:id
        },
        data:payload
    });
    return result;
}


const deleteMemberDB = async(id:string)=>{
    const result = await prisma.member.delete({
        where:{
            memberId:id
        }
    })
    return result;
}
export const MemberService = {
    createMemberDB,
    getAllMembersDB,
    getMemberByIdDB,
    updateMemberDB,
    deleteMemberDB
}