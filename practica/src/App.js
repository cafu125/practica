import React, {Component} from 'react';
import './App.css';
import Button from './Components/Button';
import {Input} from './Components/Input';
import {ClearButton} from './Components/ClearButton';
import * as math from 'mathjs';

class App extends Component{
  constructor(props){
    super(props);
    this.state={
      Input: " "
    };
    
  }
  addToInput = val => {
    this.setState({Input:this.state.Input + val});

  };

  handleEqual = () => {
    this.setState({Input: math.evaluate(this.state.Input)})

  };

render(){
return (
<div className="App">
<div className= "calculadora"> 
<Input Input={this.state.Input}></Input>
<div className="row">
<Button handleClick={this.addToInput}>7</Button>
<Button handleClick={this.addToInput}>8</Button>
<Button handleClick={this.addToInput}>9</Button>
<Button handleClick={this.addToInput}>/</Button>
</div>
<div className="row">
<Button handleClick={this.addToInput}>4</Button>
<Button handleClick={this.addToInput}>5</Button>
<Button handleClick={this.addToInput}>6</Button>
<Button handleClick={this.addToInput}>*</Button>
</div>
<div className="row">
<Button handleClick={this.addToInput}>1</Button>
<Button handleClick={this.addToInput}>2</Button>
<Button handleClick={this.addToInput}>3</Button>
<Button handleClick={this.addToInput}>+</Button>
</div>
<div className="row">
<Button handleClick={this.addToInput}>.</Button>
<Button handleClick={this.addToInput}>0</Button>
<Button handleClick={() => this.handleEqual()}>=</Button>
<Button handleClick={this.addToInput}>-</Button>
</div>
<div className="row">
  <ClearButton handleClear={() => this.setState({Input: " "})}>Borrar</ClearButton>
</div>
</div>  
  </div>
);
}
}
export default App;