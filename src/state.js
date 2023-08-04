import React from 'react';


class Counter extends React.Component {
    constructor(){
        super();
        this.state= {
            count:1
        }
        
    }
   increment = () => {
    this.setState((prevState) => ({
        count: prevState.count + 1,
      }));
    };
    decrement = () => {
        this.setState((prevState) => ({
            count: prevState.count - 1,
          }));
        };
      
  
   
    render(){
        return(
            <div>
              <div className='text'>{this.state.count}</div>
              <button onClick={this.increment}  className='button'>+</button>
              <button onClick={this.decrement} className='button'>-</button>
            </div>
        )
    }
}
export default Counter 