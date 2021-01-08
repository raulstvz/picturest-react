import { React } from "react";
import "./PinList.css";
import PinCard from "../pinCard/PinCard";

const PinList = ({ pins, showAll }) => {

  return (
    <div>
        <div className="pinList__container">
        {pins.map((pin) => (
          <PinCard pin={pin} showAll={showAll}/>
        ))}
      </div>
    </div>
  );
};

export default PinList;
