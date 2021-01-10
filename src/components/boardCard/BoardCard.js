import { React, useState, useEffect } from "react";
import { useHistory } from "react-router";
import "./BoardCard.css";

import Edit from "../../assets/edit.svg";

const BoardCard = ({ board }) => {

  const history = useHistory();
  const [pinsOfBoard, setPinsOfBoard] = useState()
  const boardId = board._id

  useEffect(() => {
    fetch('http://localhost:5000/api/boards/' + boardId + '/pins')
      .then((response) => response.json())
      .then((json) => setPinsOfBoard(json));
    //debugger
  }, [boardId]);

  //Activate
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
      {pinsOfBoard &&
        <>
          {pinsOfBoard[0] &&
            <img
              src={pinsOfBoard[0].source}
              alt="preview"
              className="boardcard__firstPin"
            />
          }
          {pinsOfBoard[1] &&
            <img
              src={pinsOfBoard[1].source}
              alt="preview"
              className="boardcard__secondPin"
            />
          }
          {pinsOfBoard[2] &&
            <img
              src={pinsOfBoard[2].source}
              alt="preview"
              className="boardcard__thirdPin"
            />
          }
        </>
      }
      <span className="boardCard__title">
        {board.title}</span>
      {pinsOfBoard &&
        <span
          className="boardCard__pins">{pinsOfBoard.length} pins
        </span>
      }
      {active === true ? (
        <>
          <div
            onClick={() => history.push(`/boards/${board._id}`)}
            className="boardcard__edit_location">
            <img className="boardcard__edit_icon"
              src={Edit}
              alt="edit board" />
          </div>
        </>
      ) : (
          <></>
        )}
    </div>
  );
};

export default BoardCard;
