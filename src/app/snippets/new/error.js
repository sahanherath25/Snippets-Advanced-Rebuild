"use client"

import React from 'react';

function ErrorPage({error}) {

 return (
  <div>
      <h2>Error Page Appear{error.message}</h2>
  </div>
 );}

export default ErrorPage;


