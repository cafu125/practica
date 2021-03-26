import React from 'react';
import './ClearButton.css';
export const ClearButton = (props) =>(
    <div className="borrar" onClick={props.handleClear}>{props.children}</div>
)