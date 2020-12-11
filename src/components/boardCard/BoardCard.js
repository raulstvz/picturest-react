import { React, useState, useEffect } from "react";
import "./BoardCard.css";

import Edit from "../../assets/edit.svg";

const BoardCard = ({ board }) => {
  const [randomImageOne, setRandomImageOne] = useState([]);

  let randomNumberOne = Math.floor(Math.random() * 12 + 1);

  useEffect(() => {
    fetch(`http://localhost:5000/api/pins/${randomNumberOne}`)
      .then((response) => response.json())
      .then((json) => setRandomImageOne(json));
  }, []);

  const [randomImageTwo, setRandomImageTwo] = useState([]);

  let randomNumberTwo = Math.floor(Math.random() * 12 + 1);

  useEffect(() => {
    fetch(`http://localhost:5000/api/pins/${randomNumberTwo}`)
      .then((response) => response.json())
      .then((json) => setRandomImageTwo(json));
  }, []);

  const [randomImageThree, setRandomImageThree] = useState([]);

  let randomNumberThree = Math.floor(Math.random() * 12 + 1);

  useEffect(() => {
    fetch(`http://localhost:5000/api/pins/${randomNumberThree}`)
      .then((response) => response.json())
      .then((json) => setRandomImageThree(json));
  }, []);

  const [active, setActive] = useState(false);

  const toggleActive = () => {
    setActive(!active);
  };

  return (
    <div
      className="boardCard__container"
      onMouseOver={toggleActive}
      onMouseOut={toggleActive}
    >
      <img
        src={randomImageOne.source}
        alt="preview"
        style={{
          position: "relative",
          marginTop: "-10px",
          marginBottom: "12px",
          height: "140px",
          width: "100px",
          objectFit: "cover",
          borderRadius: "10px",
        }}
      />
      <img
        src={randomImageTwo.source}
        alt="preview"
        style={{
          position: "absolute",
          marginLeft: "60px",
          marginBottom: "43px",
          height: "140px",
          width: "100px",
          objectFit: "cover",
          borderRadius: "10px",
        }}
      />
      <img
        src={randomImageThree.source}
        alt="preview"
        style={{
          position: "absolute",
          marginLeft: "120px",
          marginBottom: "43px",
          height: "140px",
          width: "100px",
          objectFit: "cover",
          borderRadius: "10px",
        }}
      />
      <span className="boardCard__title">{board.title}</span>
      <span
        className="boardCard__pins"
        style={{
          fontSize: "11px",
          fontWeight: "400",
          color: "#464646",
        }}
      >{/* {`${board.pins.length} Pins`} */} 3 pins</span>
      {active === true ? (
        <>
          <div
            style={{
              height: "30px",
              width: "30px",
              background: "#fafafa",
              borderRadius: "50%",
              zIndex: 99,
              marginLeft: "70px",
              display: "flex",
              alignItems: "center",
            }}
          >
            <img
              src={Edit}
              alt="edit pin"
              style={{
                height: "50%",
                width: "100%",
              }}
            />
          </div>
        </>
      ) : (
        <></>
      )}
    </div>
  );
};

export default BoardCard;
