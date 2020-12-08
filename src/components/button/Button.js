import React from 'react';
import './Button.css';

const Button = ({name}) => {
    return(
        <div className="custom_button">
            <p>{name}</p>
        </div>
    )
};

export default Button