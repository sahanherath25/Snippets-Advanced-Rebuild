"use client"

import * as actions from "@/app/actions/actions"
import {Box, Button, TextField} from "@mui/material";

import React, {useActionState} from "react";
// import  {useFormState} from "react-dom";

function AddNewSnippetPage() {

    const [formState, action] = useActionState(actions.handleSubmit, {message: "",title:"",code:""})
    console.log("FORM STATE MESSAGE ",formState)

    return (
        <div className={"Snippet Page"}>
            <Box
                action={action}
                component="form"
            >
                <Box className="">
                    <TextField
                        id="title"
                        label="Title"
                        defaultValue={formState.title||""}
                        name={"title"}
                        variant="outlined"
                        sx={{
                            marginY: 2,
                            "& .MuiOutlinedInput-root": {
                                "&:hover fieldset": {
                                    borderColor: "green", // Change border color on hover
                                },
                                "&.Mui-focused fieldset": {
                                    borderColor: "red", // Change border color on focus
                                },
                            },
                            "& .MuiInputLabel-root": {
                                color: "blue", // Change the label text color
                                "&.Mui-focused": {
                                    color: "purple", // Change the label color when focused
                                },
                            },
                        }}
                    />
                </Box>
                <Box className="">
                    <TextField
                        id="code"
                        label="Code"
                        name={"code"}
                        defaultValue={formState.code||""}
                        variant="outlined"
                        sx={{
                            marginY: 2,
                            "& .MuiOutlinedInput-root": {
                                "&:hover fieldset": {
                                    borderColor: "green", // Change border color on hover
                                },
                                "&.Mui-focused fieldset": {
                                    borderColor: "red", // Change border color on focus
                                },
                            },
                            "& .MuiInputLabel-root": {
                                color: "blue", // Change the label text color
                                "&.Mui-focused": {
                                    color: "purple", // Change the label color when focused
                                },
                            },
                        }}
                    />
                </Box>
                <Button type={"submit"} variant="outlined">Submit</Button>
            </Box>

            {formState.message ? (<div className={"bg-red-600"}>{formState.message}</div>) : null}
        </div>
    );
}

export default AddNewSnippetPage;






