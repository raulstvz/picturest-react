import React from 'react';
import './Button.css';

const Button = ({name, onClick}) => {
    return(
        <div className="custom_button" onClick={onClick}>
            <p>{name}</p>
        </div>
    )
};

export default Button