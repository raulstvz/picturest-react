import { React, useState, useEffect } from "react";
import "./PinList.css";
import PinCard from "../pinCard/PinCard";
import PinForm from "../pinForm/PinForm";
import PlusIcon from "../../assets/plus.svg";

const PinList = () => {
  const [pins, setPins] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/api/pins")
      .then((response) => response.json())
      .then((json) => setPins(json));
  }, []);

  const [visible, setVisible] = useState(false);

  const toggleVisible = () => {
    setVisible(!visible);
  };

  return (
    <div>
      <div className="boardList__header">
        <h2 className="pinList__title">Pins</h2>
        {visible === false ? (
        <img
          className="boardList__plusIcon"
          src={PlusIcon}
          onClick={toggleVisible}
        />
        ) : (
          <img
          className="boardList__plusIcon"
          src={PlusIcon}
          onClick={toggleVisible}
          style={{
            transform:"rotate(45deg)"
          }}
        />
        )}
      </div>
      <PinForm visible={visible} />
      <div className="pinList__container">
        {pins.map((pin) => (
          <PinCard pin={pin} />
        ))}
      </div>
    </div>
  );
};

export default PinList;
