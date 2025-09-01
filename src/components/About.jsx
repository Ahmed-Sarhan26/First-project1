import React, {useState} from "react";
export default function About(){
 let [random,setrandom]=useState(0);
    return(
     <>
     <h1> Random value </h1>
     <button onClick={()=>setrandom(Math.round(Math.random()*100))}>Random Value</button>
     <p> Random Value:{random}</p>

     
    </>
    );
}