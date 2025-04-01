import React from 'react';
import {Box, List, ListItemButton, ListItemText} from "@mui/material";
import Link from "next/link";

function Articles({data}) {

    // console.log("DATA IS SAHAN ",data)
    if (!data) return null;

    return (
        <Box  sx={{color:"black"}} >
            <List component="nav" sx={{color:"black"}}>
                {data.map((item,index)=>{
                    return(
                        <Link href={`/snippets/${item.id}` } key={index}><h3 >{item.title}</h3></Link>

                    )
                })}
            </List>
        </Box>
    )
        ;
}

export default Articles;


