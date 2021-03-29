import React from 'react';
import './ClearButton.css';

export const ClearButton = (props) =>
    <div className="borrar-btn" onClick={props.handleClear}>{props.children}</div>;
