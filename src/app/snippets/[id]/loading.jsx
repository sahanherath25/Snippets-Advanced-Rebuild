import React from 'react';
import {CircularProgress} from "@mui/material";

function LoadingPage() {
 return (
  <div className={"flex-grow-1 flex  justify-center items-center"}>
      <CircularProgress color="success" />
  </div>
 );}

export default LoadingPage;


