"use client"
import React from 'react';
import {Button, useTheme} from "@mui/material";

function CustomButton() {

 const theme = useTheme();

 return (
      <Button sx={{backgroundColor: theme.palette.text.secondary}}>
          Click Here
      </Button>
 );}

export default CustomButton;

















