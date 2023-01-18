import React from "react";
import NavBar from "./Components/Navbar";
import Cs_details from "./Components/Cs_details";
import Ad from "./Components/Ad";
import Benefits from "./Components/Benefits";

import Topics from "./Components/Topics";
import Trusted from "./Components/Trusted";


export default function App(){
  return (
    <div className="page">
     
        <NavBar /> 
        <Ad />
        <Cs_details />
        <Benefits />
        {/* <Skill /> */}
        {/* <Earn /> */}
        
       
        <Trusted />
        <Topics />
        {/* <Steps /> */}
        
        {/* <Example />  */}
        {/* <InfoFooter /> */}
        {/* <Footer /> */}
        {/* <Fixed_ele /> */}
    </div>
    
  )
}