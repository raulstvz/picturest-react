import "./PinSelected.css"
import Button from "../button/Button";
import { useHistory } from "react-router";

const PinSelected = ({ pin }) => {

    const history = useHistory();

    return (
        <div>
            <div className="selectedpin__container">
                <div className="selectedpin__image__container">
                    <a href={pin.source}>
                        <img className="selectedpin__image"
                            src={pin.source}
                            alt="Here was a Pin" />
                    </a>
                </div>
                <div className="selectedpin__details__container">
                    <p className="selectedpin__title">{pin.title}</p>
                    <p className="selectedpin__description">{pin.description}</p>
                    <h4><u>Comments</u></h4>
                    <div>
                        <div className="selectedpin__comment">
                            <p>{pin.comments}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="backbutton__container">
                    <Button name="Back" onClick={() => history.goBack()}/>
            </div>
        </div>
    )
}

export default PinSelected