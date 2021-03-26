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

  }
render(){
return (
<div className="App">
<div className= "calculadora"> 
<Input Input={this.state.input}></Input>
<div className="row">
<Button>7</Button>
<Button>8</Button>
<Button>9</Button>
<Button>/</Button>
</div>
<div className="row">
<Button>4</Button>
<Button>5</Button>
<Button>6</Button>
<Button>x</Button>
</div>
<div className="row">
<Button>1</Button>
<Button>2</Button>
<Button>3</Button>
<Button>+</Button>
</div>
<div className="row">
<Button>.</Button>
<Button>0</Button>
<Button>=</Button>
<Button>-</Button>
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