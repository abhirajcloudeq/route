import React from 'react';
// function Frops(props){

//     return(
//         <div>

//         <h1>{props.name}</h1>
//         <h2>{props.company}</h2>
//         </div>

//     )}
// export default Frops


class Frops2 extends React.Component {
    constructor(){
        super();
    }
    render(){
        return(
        <div>
            <h1>{this.props.name}</h1>
        </div>
        )
    }
}

export default Frops2