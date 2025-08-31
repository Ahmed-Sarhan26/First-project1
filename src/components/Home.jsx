import React, {useState} from "react";
export default function Home(){
 let [count,setcount]=useState(0);
    return(
     <>
     <h1> Welcome To Home Page</h1>
     <button onClick={()=>setcount(count++)}>+</button>
    <button onClick={()=>setcount(count--)}>-</button>
    <p>
        counter:{count}
    </p>
    </>
    );
}