import React from "react";
import { Link } from "react-router-dom";
import Footer from "./Footer";
import SinInicio from "./SinInicio";
import ConInicio from "./ConInicio";

function Home() {
  
  return (
    <>
     {localStorage.getItem('showHome') === 'true' ? <ConInicio/> : <SinInicio/>}
    </>
  );
}

export default Home;
