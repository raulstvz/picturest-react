import { React, useState, useEffect } from "react";
import "./BoardList.css";
import BoardCard from "../boardCard/BoardCard";


const BoardList = ({ user }) => {

  const [userBoards, setUserBoards] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5000/api/users/' + user.id + '/boards')
      .then((response) => response.json())
      .then((json) => setUserBoards(json));
  }, [user.id]);

  return (
    <div>
      <div className="boardList__container">
        {userBoards.map((userBoard) => (
            <BoardCard board={userBoard} />
        ))}
      </div>
    </div>
  );
};

export default BoardList;
