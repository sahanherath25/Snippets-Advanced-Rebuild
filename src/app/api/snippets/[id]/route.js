import prisma    from "../../../../../prisma";
import {connectDB} from "@/lib/helpers";
import {NextResponse} from "next/server";

export const GET=async (req,{params})=>{

    const {id}=await  params
    // console.log("Params",data)
    try {
        await connectDB()
        const foundSnippet=await prisma.snippet.findFirst({where:{id}})

        return NextResponse.json({message:"Success",data:foundSnippet},{status:200})

    }catch (e) {
        return NextResponse.json({message:"error",error:e.message},{status:200})
    }finally {

        prisma.$disconnect();
    }


}

export const PUT=async (req,{params})=>{

    const {id}=await  params
    const {code}=await  req.json();

    try {
        await connectDB();
        const updatedData=await prisma.snippet.update({where:{id},data:{code:code}},)

        return NextResponse.json({message:"Success",data:updatedData},{status:201})

    }catch (e) {
        return NextResponse.json({message:"Success",data:code},{status:201})
    }finally {
        prisma.$disconnect();
    }

}

export const DELETE=async (req,{params})=>{

    const {id}=await  params

    console.log("Going to t delete",id)

    try {
        await connectDB();
        const deletedSnippet=await prisma.snippet.delete({where:{id}})

        return NextResponse.json({message:"Success",data:deletedSnippet},{status:204})

    }catch (e) {
        return NextResponse.json({message:"fail",error:e.message},{status:404})
    }finally {
        prisma.$disconnect();
    }

}

