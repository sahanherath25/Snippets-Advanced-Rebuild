import React from 'react';
import {Box, Button, Typography} from "@mui/material";

function Hero(props) {
 return (
     <Box
         sx={{
             display: 'flex',
             flexDirection: 'column',
             alignItems: 'center',
             justifyContent: 'center',
             height: '100%',
             textAlign: 'center',
             background: 'linear-gradient(135deg, #6a11cb 0%, #2575fc 100%)',
             color: 'white',
             p: 4,
         }}
     >
         <Typography variant="h2" sx={{ fontWeight: 'bold', mb: 2 }}>
             Welcome to Snippet Hub
         </Typography>
         <Typography variant="h5" sx={{ mb: 3 }}>
             Save, organize, and share your code snippets effortlessly.
         </Typography>
         <Button
             variant="contained"
             color="secondary"
             size="large"
             href="/snippets"
         >
             Browse Snippets
         </Button>
     </Box>
 );}

export default Hero;