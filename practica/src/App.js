import React, {Component} from 'react';
import './App.css';
import Button from './Components/Button';
import {Input} from './Components/Input';
import {ClearButton} from './Components/ClearButton';

class App extends Component{
  constructor(props){
    super(props);
    this.state={
      input: " "
    };
    
  }
  addToInput = val => {
    this.setState({input:this.state.input+val});

  }
render(){
return (
<div className="App">
<div className= "calculadora"> 
<Input Input={this.state.input}></Input>
<div className="row">
<Button handleClik={this.addToInput}>7</Button>
<Button  handleClik={this.addToInput}>8</Button>
<Button handleClik={this.addToInput}>9</Button>
<Button  handleClik={this.addToInput}>/</Button>
</div>
<div className="row">
<Button  handleClik={this.addToInput}>4</Button>
<Button  handleClik={this.addToInput}>5</Button>
<Button handleClik={this.addToInput}>6</Button>
<Button handleClik={this.addToInput}>x</Button>
</div>
<div className="row">
<Button handleClik={this.addToInput}>1</Button>
<Button handleClik={this.addToInput}>2</Button>
<Button handleClik={this.addToInput}>3</Button>
<Button handleClik={this.addToInput}>+</Button>
</div>
<div className="row">
<Button handleClik={this.addToInput}>.</Button>
<Button handleClik={this.addToInput}>0</Button>
<Button handleClik={this.addToInput}>=</Button>
<Button  handleClik={this.addToInput}
>-</Button>
</div>
<div className="row">
  <ClearButton handleClear={() => this.setState({input: " "})}>Borrar</ClearButton>
</div>
</div>  
  </div>
);
}
}
export default App;