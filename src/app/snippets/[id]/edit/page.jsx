import React from 'react';
import {Box, Input} from "@mui/material";

import {getSingleSnippet} from "@/app/actions/actions";
import {notFound} from "next/navigation";
import SnippetEditForm from "@/components/SnipperEditForm";

async function SnippetEditPage({params}) {
    const {id} = await params
    const snippet = await getSingleSnippet(id)
    console.log("DATA I RECEIVED ", snippet)

    // if(!snippet) return notFound()
    // TODO Load Data in Server Component
    return (
        <div className={"flex-grow-1"}>
            <h2>You are now on Edit Page</h2>
            {/*TODO Client Component*/}
            <SnippetEditForm data={snippet}/>

        </div>
    );
}

export default SnippetEditPage;







