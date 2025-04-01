import React from 'react';
import {Box, Typography} from "@mui/material";
import Link from "next/link";

function Footer() {
 return (
     <footer>
         <Box sx={{ backgroundColor: "#333", color: "white", padding: 3, textAlign: "center" }}>
             <Typography variant="body2">
                 &copy; {new Date().getFullYear()} Code Snippets. All Rights Reserved.
             </Typography>
             <Box sx={{ mt: 1 }}>
                 <Link href="/" style={{ color: "white", margin: "0 10px" }}>
                     About
                 </Link>
                 <Link href="/snippets" style={{ color: "white", margin: "0 10px" }}>
                     Contact
                 </Link>
             </Box>
         </Box>
     </footer>
 );
}

export default Footer;