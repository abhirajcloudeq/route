import React from "react";
import { useState,useEffect } from "react";
 const Comp = () => {
    const [count,setCount] = useState(0);

    const increment = () => {
        setCount(count+1);  
    }   
     const decrement = () => {
        setCount(count-1);
     }
     useEffect(() =>{
        console.log(count);
     });
     return(
        <div>
            <h1>useeffcet</h1>
        <p>count : {count}</p>
        <button onClick={increment}>increment</button>
        <button onClick={decrement}>decrement</button>
        </div>
     );
 };
 export default Comp