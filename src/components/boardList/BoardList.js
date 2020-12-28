import { React, useState, useEffect } from "react";
import "./BoardList.css";
import BoardCard from "../boardCard/BoardCard";


const BoardList = ({ user }) => {

  const userId = user._id
  //console.log(user._id)

  const [userBoards, setUserBoards] = useState([]);


  useEffect(() => {
    fetch('http://localhost:5000/api/users/' + userId + '/boards')
      .then((response) => response.json())
      .then((json) => setUserBoards(json));
  }, [userId]);

  console.log(userBoards)

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
