import React, { useState, useEffect } from "react";
import SplashNav from "./splashnav";
import {SplashHeader} from "../SplashHeader/splashheader";

export default function SplashPage({ isLoaded }) {
  
  return (
    
    <div className="mainscreen">
      <style>
        @import url('https://fonts.googleapis.com/css2?family=Catamaran:wght@100&family=Gothic+A1:wght@600&family=Libre+Franklin:wght@700&family=Nanum+Gothic&family=Open+Sans:wght@300&family=Roboto:wght@300&family=Silkscreen&display=swap');
      </style>
      <SplashNav isLoaded={isLoaded} />
      <SplashHeader/>
    </div>
  );
}
