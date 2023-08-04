import React from "react";
import { useState } from 'react'

const Change = () => {
    const [isBlack, setState] = useState(false)

    const ChangeColour = () => {
        if (isBlack) {
            setState(false);
        }
        else {
            setState(true);
        }

    }
    return (

        <div style={{ backgroundColor: isBlack ? "black" : "green", color: "white" , height:"100vh"}}  >
            <button onClick={ChangeColour} style={{justifyContent:"centre"}}>color test</button>
      </div>

);  
};
export default Change;