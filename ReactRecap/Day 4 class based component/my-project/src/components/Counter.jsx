import React, {Component} from "react";

class Counter extends Component {
    constructor(props){
        super(props);
        this.state={
            count:0,
        };
    }
    handleCountDecrement =()=>{
        this.setState((prevState)=>({
            count:prevState.count-1,
        }));
    };
    handleCountIncrement=()=>{
        this.setState((prevState)=>({
            count:prevState.count+1,
        }));        
    };
    handleReset=()=>{
        this.setState(()=>({
            count:0,
        }));
    };

    componentDidMount() {
        console.log('Component mounted!');
      }
    
      
    
      componentWillUnmount() {
        console.log('Component will unmount!');
      }
    

    render(){
        return (
            <>
                <button onClick={this.handleCountIncrement}>+</button>
                <div>{this.state.count}</div>
                <button onClick={this.handleCountDecrement}>-</button>
                <button onClick={this.handleReset}>reset</button>
            </>
        )
    }
}

export default Counter;

