import React from 'react';
import {
    Box,
    Button,
    Card,
    CardContent,
    CardMedia,
    Grid,
    List,
    ListItemButton,
    ListItemText,
    Typography
} from "@mui/material";
import Link from "next/link";

function Articles({data}) {

    // console.log("DATA IS SAHAN ",data)
    if (!data) return null;

    return (

        <Box  sx={{ padding: 4 }}>
            <Typography variant="h4" gutterBottom>
                All Code Snippets
            </Typography>
            <Grid container spacing={4}>
                {data.map((item,index)=>{
                    return(
                        <Grid item key={item.id} xs={12} sm={6} md={4}>
                            <Card sx={{ maxWidth: 345 ,minWidth:400}}>
                                {/*<CardMedia*/}
                                {/*    component="img"*/}
                                {/*    height="140"*/}
                                {/*    image={snippet.thumbnail || "/default-thumbnail.jpg"} // Replace with snippet thumbnail URL*/}
                                {/*    alt="Snippet Thumbnail"*/}
                                {/*/>*/}

                                <CardContent>
                                    <Typography variant="h6">{item.title}</Typography>
                                    <Typography variant="body2" color="text.secondary" noWrap>
                                        {item.code || "No description available"} {/* Display description */}
                                    </Typography>
                                </CardContent>

                                <Button
                                    size="small"
                                    component="a"
                                    href={`/snippets/${item.id}`} // Link to the detailed view page of the snippet
                                    sx={{ margin: 1 }}
                                >
                                    View Snippet
                                </Button>

                            </Card>
                        </Grid>
                    )
                })}
            </Grid>
        </Box>


    )
        ;
}

export default Articles;


