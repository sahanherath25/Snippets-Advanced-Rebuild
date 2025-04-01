import prisma from "../../prisma";

export const connectDB=async ()=>{
    try {
        // TODO
        await prisma.$connect();
        console.log("Connected to MongoDB Database");

    }catch (e) {
        console.error("Failed to connect to MongoDB Database");
        throw new Error(e.message);
    }

}

