import {connectDB} from "@/lib/helpers";
import prisma from "../../../../prisma";
import {NextResponse} from "next/server";

export const GET= async ()=>{

    try {
        await connectDB()
        const snippets=await prisma.snippet.findMany({})

        if(snippets.length>0){
            return NextResponse.json({message:"success",data:snippets},{status:200});
        }else {
            return NextResponse.json({message:"success But No Records Found",data:null},{status:200});
        }

    }catch (e) {
        return NextResponse.json({message:"Error"},{status:404});
    }finally {

    }

}


export const POST= async ({req})=>{

    const data=await req;
    console.log("")

   try {
       await connectDB()

       // return
       // const updatedData=await prisma.snippet.update({where:{id},data{}})

       // return NextResponse.json({message:"success",data:snippets},{status:200});

   }catch (e) {

   }finally {
       prisma.$disconnect()
   }

}