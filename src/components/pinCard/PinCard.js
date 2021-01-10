import { React, useState, useEffect } from 'react'
import { Link } from 'react-router-dom';
import "./PinCard.css";

const PinCard = ({ pin, showAll }) => {

    const [author, setAuthor] = useState({})
    const [active, setActive] = useState(false)

    useEffect(() => {
        setAuthor(pin.author)
    }, [pin])

    const toggleActive = () => {
        setActive(!active)
    };

    return (
        <div
            className="pincard__container"
            onMouseOver={toggleActive}
            onMouseLeave={toggleActive}>
            <Link to={'../pins/' + pin._id}>
                <img
                    src={pin.source}
                    alt="Pin"
                    className="pincard__image"
                />
            </Link>
            {author &&
                <div>
                    {active &&
                        <div className="pincard__author__details">
                            {showAll === true &&
                                <>
                                    <img src={author.avatar} alt="UserMenu Avatar" className="usermenu_avatar" />
                                    <div className="pincard__author__details__text">
                                        <p className="pincard__details__username">{author.username}</p>
                                        <p className="pincard__details__title">{pin.title}</p>
                                    </div>
                                </>
                            }
                            {showAll === false &&
                                <>
                                    <div className="pincard__author__details__text">
                                        {pin.title &&
                                            <p className="pincard__details__title">{pin.title}</p>
                                        }
                                        <p className="pincard__details__comments">{pin.comments.length} Comments  </p>
                                    </div>
                                </>
                            }
                        </div>
                    }
                </div>
            }
        </div >

    )
};

export default PinCard;