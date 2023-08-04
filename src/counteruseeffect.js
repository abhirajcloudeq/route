import React from 'react'
import { useState,useEffect } from 'react'
 function CounterHooks( )
 {
    const [count,setCount]
    = useState(0);
    useEffect(()=>{
           console.log (count);
    },[count]);
    function increment (){
        setCount(count+1);
    }
    function decrement ()
    {
        setCount(count-1);

    }
    return(
        <div>
            counterusing effect : {count}
            <button onClick={increment}>increment</button>
            <button onClick={decrement}>decrement</button>

        </div>
    )
 }
 export default CounterHooks