import React from 'react';
import {AppBar, Button, Toolbar, Typography} from "@mui/material";
import Link from "next/link";
import {IoAdd} from "react-icons/io5";
import {FaCode} from "react-icons/fa";
import {ImHome} from "react-icons/im";

function Header() {


    return (
        <header>
            <AppBar position="sticky" sx={{backgroundColor: "#210F37"}}>
                <Toolbar>
                    <Link href={"/"} className={"flex-grow-1"}>
                       <ImHome size={25} >Code Snippets</ImHome >
                    </Link>

                    <Button color="inherit" component={Link} href="/snippets">
                     <FaCode size={25} />View Snippets
                    </Button>
                    <Button color="inherit" component={Link} href="/snippets/new">
                                <IoAdd size={25}/>Add New Snippet
                    </Button>
                </Toolbar>
            </AppBar>

        </header>
    );
}

export default Header;