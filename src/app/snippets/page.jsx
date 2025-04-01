import React from 'react';
import Articles from "@/components/Articles";
import * as actions  from "@/app/actions/actions"
import {Box} from "@mui/material";

export const dynamic="force-dynamic"

async function SnippetPage() {

    const data= await actions.getAllSnippets();
    // console.log("DATA I RECEIVED ",data)

    if(!data)return null;

    return (
        <Box className={"Snippet Page"} sx={{flexGrow: 1}}>
            <Articles data={data}/>
        </Box>
    );
}

export default SnippetPage;






