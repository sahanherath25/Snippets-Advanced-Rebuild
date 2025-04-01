"use client"
import React, {useState} from 'react';
import {Editor} from "@monaco-editor/react";
import {Box, Button, Input} from "@mui/material";
import * as actions from "@/app/actions/actions";


function SnippetEditForm({data}) {

    const [code, setCode] = useState(data.code)
    // Modify the server Action by bind this
     function handleEditorChange(value) {
        // TODO Get Current value
        setCode(value)
    }

    const handleFormSubmit= actions.editSnippetSubmit.bind(null,data.id,code)

    // TODO Client Component
    return (
        <Box component={"form"} action={handleFormSubmit}>
            <h2> THis is a Client Component rendered on Server</h2>
            
            <h3>{data.title}</h3>
            <Input name={"title"} value={data.title}  />
            <Editor
                height={"40vh"}
                theme={"vs-dark"}
                language={"javascript"}
                defaultValue={code}
                onChange={handleEditorChange}
            />
            <Button type={"submit"} >Save </Button>
        </Box>
    );
}

export default SnippetEditForm;




