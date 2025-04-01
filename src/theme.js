"use client"
import {createTheme} from "@mui/material/styles";

 const theme = createTheme({
    palette: {
        primary: {
            main: '#1976d2',
        },
        secondary: {
            main: '#9c27b0',
        },
        text:{
        //  TODO    For text
            primary:"#9c27b0",
            secondary:"#9c27b0",
        },
        background:{
            default: "#f5f5f5", // Background color of app
            paper: "#ffffff", // Color of paper elements (cards, dialogs)
        },
        typography: {
            fontFamily: "'Roboto', sans-serif",
            h1: {
                fontSize: "2.5rem",
                fontWeight: 700,
            },
            h2: {
                fontSize: "2rem",
                fontWeight: 600,
            },
            body1: {
                fontSize: "1rem",
            },
            button: {
                textTransform: "none", // Prevents uppercase buttons
            },
        },
        cssVariables: true,
        breakpoints: {
            values: {
                xs: 0, // Extra small screens
                sm: 600, // Small screens
                md: 960, // Medium screens
                lg: 1280, // Large screens
                xl: 1920, // Extra large screens
            },
        },
    },
});

 export default theme;

