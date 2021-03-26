import React from 'react';
import './Button.css';

const isOperador = val =>{
    return !isNaN(val) || val === "." || val === "=";
}
const Button = props => ( 
<div className={ `button-wrapper ${ isOperador(props.children) ? null : "operador" }`}
    >
    {props.children}
    </div>
);
export default Button;




