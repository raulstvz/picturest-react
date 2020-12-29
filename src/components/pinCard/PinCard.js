import React from 'react'
import { Link } from 'react-router-dom';
import "./PinCard.css";

const PinCard = ({ pin }) => {
    return (
        <div className="pincard__container">
            <Link to={'pins/' + pin._id}>
                <img
                    src={pin.source}
                    alt="Pin"
                    className="pincard__image"
                />
            </Link>
            <p className="pincard__title">{pin.title}</p>
        </div >

    )
};

export default PinCard;