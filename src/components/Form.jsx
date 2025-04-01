import React from 'react';
import {Box, Button, TextField} from "@mui/material";
import * as actions from "@/app/actions/actions";

 function Form({action}) {

    return (
        <Box
            action={action}
            component="form"
        >
            <Box className="">

                <TextField
                    id="outlined-basic"
                    label="Title"
                    name={"title"}
                    variant="outlined"
                    sx={{
                        marginY:2,
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
                    id="outlined-basic"
                    label="Code"
                    name={"code"}
                    variant="outlined"
                    sx={{
                        marginY:2,
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
    );
}

export default Form;

