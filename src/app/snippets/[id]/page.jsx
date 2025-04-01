import React from 'react';
import {getAllSnippets, getSingleSnippet} from "@/app/actions/actions";

import {notFound} from "next/navigation";
import Link from "next/link";
import {Button} from "@mui/material";
import * as actions  from "@/app/actions/actions"
import prisma    from "../../../../prisma";

export const dynamic = "force-dynamic";

export async function ViewSnippetPage({params, searchParams}) {

    const {id} = await params
    // const search=await searchParams

    console.log("Params ", id)
    const data = await getSingleSnippet(id)

    const handleDeleteSubmission=actions.deleteSnippet.bind(null,id)

    console.log("TEST DATA ",data)

    if (!data) return notFound()

    return (
        <div>
            <h1>Hellow You are viewing</h1>
            {<h2>{data?.title}</h2>}
            <Link href={`/snippets/${id}/edit`}>Edit</Link>

            <form action={handleDeleteSubmission}>
                <Button type={"submit"} > Delete Snippet</Button>
            </form>

        </div>
    );
}


export async function generateStaticParams(){

// TODO    Need to return an Object with id
//     Fetch all different snippets fro mDB and  return object
    const snippets=await prisma.snippet.findMany({})
    // console.log("Fetched snippets:", snippets);
    return snippets.map((snippet)=>{
        return {id:snippet.id}
    })
}

export default ViewSnippetPage




