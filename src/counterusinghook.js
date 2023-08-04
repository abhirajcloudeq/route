import React from 'react'
import { useState } from 'react'
 function CounterHooks( )
 {
    const [count,setCount]
    = useState(0);
    function increment (){
        setCount(count+1)
    }
    function decrement ()
    {
        setCount(count-1)

    }
    return(
        <div>
            counterusinghook : {count}
            <button onClick={increment}>increment</button>
            <button onClick={decrement}>decrement</button>

        </div>
    )
 }
 export default CounterHooks