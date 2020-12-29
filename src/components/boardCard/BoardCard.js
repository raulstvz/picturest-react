import { React, useState, useEffect } from "react";
import { useHistory } from "react-router";
import "./BoardCard.css";

import Edit from "../../assets/edit.svg";

const BoardCard = ({ board }) => {

  const history = useHistory();

  const [tempSource, setTempSource] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5000/api/pins/5fde4d8eb78d631df7bdfc57')
      .then((response) => response.json())
      .then((json) => setTempSource(json.source));
  }, []);

  
  const [active, setActive] = useState(false);

  const toggleActive = () => {
    setActive(!active);
  };

  return (
    <div
      className="boardcard__container"
      onMouseOver={toggleActive}
      onMouseOut={toggleActive}
    >
      <img
        src={tempSource}
        alt="preview"
        style={{
          position: "relative",
          marginTop: "-10px",
          marginBottom: "12px",
          height: "150px",
          width: "100px",
          objectFit: "cover",
          borderRadius: "10px",
        }}
      />
      <img
        src={tempSource}
        alt="preview"
        style={{
          position: "absolute",
          marginLeft: "60px",
          marginBottom: "50px",
          height: "150px",
          width: "100px",
          objectFit: "cover",
          borderRadius: "10px",
        }}
      />
      <img
        src={tempSource}
        alt="preview"
        style={{
          position: "absolute",
          marginLeft: "120px",
          marginBottom: "50px",
          height: "150px",
          width: "100px",
          objectFit: "cover",
          borderRadius: "10px",
        }}
      />
      <span className="boardCard__title">
        {board.title}</span>
      <span
        className="boardCard__pins">{board.pins.length} pins</span>
      {active === true ? (
        <>
          <div
            onClick={() => history.push(`/boards/${board._id}`)}
            className="boardcard__edit_location">
            <img className="boardcard__edit_icon"
              src={Edit}
              alt="edit board"/>
          </div>
        </>
      ) : (
          <></>
        )}
    </div>
  );
};

export default BoardCard;
