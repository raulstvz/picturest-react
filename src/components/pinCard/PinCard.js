import React from 'react'
import "./PinCard.css";

const PinCard = ({pin}) => {
    return (
        <div>
            <img
                src={pin.source}
                alt="Pin"            
                className="pinCard__image" 
            />
            <p className="pinCard__title" style={{
                position:"relative",
                bottom:"20px",
                left:"30px",
            }}>{pin.title}</p>        
        </div>
    )
};

export default PinCard;