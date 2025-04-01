import React from 'react';
import Articles from "@/components/Articles";
import * as actions  from "@/app/actions/actions"

export const dynamic="force-dynamic"

async function SnippetPage() {

    const data= await actions.getAllSnippets();

    console.log("DATA I RECEIVED ",data)

    if(!data)return null;

    return (
        <div className={"Snippet Page"}>
            <Articles data={data}/>
        </div>
    );
}

export default SnippetPage;






