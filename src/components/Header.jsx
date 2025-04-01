import React from 'react';
import {AppBar, Button, Toolbar, Typography} from "@mui/material";
import Link from "next/link";

function Header() {


    return (
        <header>
            <AppBar position="sticky" color="secondary">
                <Toolbar>
                    <Typography variant="h6" sx={{flexGrow: 1}}>
                        Code Snippets
                    </Typography>
                    <Button color="inherit" component={Link} href="/snippets">
                        View Snippets
                    </Button>
                </Toolbar>
            </AppBar>

        </header>
    );
}

export default Header;