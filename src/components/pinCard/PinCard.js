import React from 'react'
import "./PinCard.css";

const PinCard = ({pin}) => {
    return (
        <div className="pincard__container">
            <img
                src={pin.source}
                alt="Pin"            
                className="pincard__image" 
            />
            <p className="pincard__title">{pin.title}</p>        
        </div>
    )
};

export default PinCard;