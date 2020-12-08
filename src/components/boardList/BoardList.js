import { React, useState, useEffect } from "react";
import "./BoardList.css";
import BoardCard from "../boardCard/BoardCard";
import BoardForm from "../boardForm/BoardForm";
import PlusIcon from "../../assets/plus.svg";

const BoardList = ({user, boards}) => {

  const [visible, setVisible] = useState(false);

  const toggleVisible = () => {
    setVisible(!visible);
  };

  return (
    <div>
      <div className="boardList__header">
        <h2 className="boardList__title">Boards</h2>
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
            transform:"rotate(45deg)"
          }}
        />
        )}        
      </div>
      <BoardForm visible={visible} user={user}/>
      <div className="boardList__container">
        {boards.map((board) => (
          <BoardCard board={board} />
        ))}
      </div>
    </div>
  );
};

export default BoardList;
