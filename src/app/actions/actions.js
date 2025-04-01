"use server"

import axios from "axios";
import {redirect} from "next/navigation";
import {connectDB} from "@/lib/helpers";
import prisma from "../../../prisma";
import {revalidatePath} from "next/cache";
import {fetch} from "next/dist/compiled/@edge-runtime/primitives";

export const getAllSnippets = async ()=>{

    try {
        // const response= await axios.get("http://localhost:3000/api/snippets")
        const response= await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/snippets`)

        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const data = await response.json();
        console.log("Fetched Snippets:", data);
        return data.data;

        // console.log("RESPONSE ",response.data)
        // return  response.data.data
    }catch (error) {
        console.error("Error fetching snippets: ", error);

    }

}

export const getSingleSnippet = async (id)=>{

    // const response= await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/api/snippets/${id}`)

    console.log("Fetching from API:", `${process.env.NEXT_PUBLIC_API_URL}/api/snippets/${id}`);

    // console.log("RESPONSE ",response.data)
    // return  response.data.data
    const response= await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/snippets/${id}`)

    if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data = await response.json();
    console.log("Fetched Snippets:", data);
    return data.data;

}

export const editSnippetSubmit=async (id,code)=>{

    try {
        const response= await axios.put(`${process.env.NEXT_PUBLIC_API_URL}/api/snippets/${id}`,{
            code:code,
        })
        // console.log("RESPONSE ",response.data)
    }catch (e) {
        console.log("Error Occured",e.message)
    }
    revalidatePath(`/snippets/${id}`)
    redirect(`/snippets/${id}`)
}


export const deleteSnippet=async (id)=>{

    const snippetId=id;
    try {
        const response= await axios.delete(`${process.env.NEXT_PUBLIC_API_URL}/api/snippets/${snippetId}`)
        // console.log("RESPONSE ",response.data)
    }catch (e) {

        console.log("Error Occured",e.message)
    }
    revalidatePath(`/snippets`)
    redirect(`/snippets`)

}

export  const handleSubmit=async(formState,formData)=>{
    // //     TODO Get Form data
    const title = formData.get("title");
    const code = formData.get("code");
    const currentState={title:title,code:code};
    try {

        //TODO Validating Fields
        if(!title){
            return {...currentState,message:"Please enter title"};
        }

        if(title.length <3){
            return {...currentState,message:"Title must required more than 5 Characters"};
        }

        if(!code){
            return {...currentState,message:"Please enter code"};
        }

        if(code.length <3){
            return {...currentState,message:"Code must required more than 5 Characters"};
        }

        await connectDB()
        //     TODO Save in DB
        const snippet = await prisma.snippet.create({
            data: {
                title,
                code
            }
        })

    }catch (e) {

        if(e instanceof Error){
            return {
                message:e.message
            }
        }else {
            return {
                message:"Something Wend Wrong"
            }
        }
    }
    revalidatePath("/snippets")

    // TODO Redirect back to Snippets page
    redirect(("/snippets"))

}




