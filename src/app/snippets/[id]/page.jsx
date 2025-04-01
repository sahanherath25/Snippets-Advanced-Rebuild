import React from 'react';
import {getAllSnippets, getSingleSnippet} from "@/app/actions/actions";

import {notFound} from "next/navigation";
import Link from "next/link";
import {Box, Button, Card, CardActions, CardContent, CardMedia, Typography} from "@mui/material";
import * as actions  from "@/app/actions/actions"
import prisma    from "../../../../prisma";

export const dynamic = "force-dynamic";

export async function ViewSnippetPage({params, searchParams}) {

    const {id} = await params
    // const search=await searchParams

    console.log("Params ", id)
    const data = await getSingleSnippet(id)

    const handleDeleteSubmission=actions.deleteSnippet.bind(null,id)

    // console.log("TEST DATA ",data)

    if (!data) return notFound()

    return (
        <div className={"flex-grow-1 mt-6"}>
            <Card sx={{ maxWidth: 345 }}>
                <CardMedia
                    sx={{ height: 140 }}
                    image="https://images.unsplash.com/photo-1461749280684-dccba630e2f6?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    title="green iguana"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        {<h2>{data?.title}</h2>}
                    </Typography>
                    <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                        Lizards are a widespread group of squamate reptiles, with over 6,000
                        species, ranging across all continents except Antarctica
                    </Typography>
                </CardContent>
                <CardActions>
                    <Button sx={{backgroundColor: "#210F37", color: "#fff"}}>
                        <Link href={`/snippets/${id}/edit`}>Edit</Link>
                    </Button>
                    <form action={handleDeleteSubmission}>
                        <Button type={"submit"} sx={{backgroundColor: "#210F37", color: "#fff"}}> Delete
                            Snippet</Button>
                    </form>
                </CardActions>
            </Card>

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




