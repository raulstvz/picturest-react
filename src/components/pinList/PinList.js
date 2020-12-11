import { React, useState, useEffect } from "react";
import "./PinList.css";
import PinCard from "../pinCard/PinCard";
import PinForm from "../pinForm/PinForm";
import PlusIcon from "../../assets/plus.svg";

const PinList = ({ user, boards, pins }) => {

  const [boardPins, setBoardPins] = useState([]);

  useEffect(() => {
    pins.map((pin) => {
      fetch(`http://localhost:5000/api/pins/${pin.id}`)
        .then((response) => response.json())
        .then((json) => setBoardPins({ ...boardPins, json }))
    })
  }, [])

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
            alt="Plus icon"
            onClick={toggleVisible}
          />
        ) : (
            <img
              className="boardList__plusIcon"
              src={PlusIcon}
              alt="Plus icon"
              onClick={toggleVisible}
              style={{
                transform: "rotate(45deg)"
              }}
            />
          )}
      </div>
      <PinForm user={user} boards={boards} visible={visible} />
      <div className="pinList__container">
        {boardPins.map((pin) => (
          <PinCard pin={pin} />
        ))}
      </div>
    </div>
  );
};

export default PinList;
