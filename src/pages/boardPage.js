import { React, useState, useEffect } from "react";
import { useParams } from 'react-router';
import PinForm from "../components/pinForm/PinForm";
import PinList from "../components/pinList/PinList";

const BoardPage = ({ user }) => {
  const params = useParams();
  const boardId = params.id
  //console.log(params)

  const [board, setBoard] = useState({});
  const [pinsOfBoard, setPinsOfBoard] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5000/api/boards/' + boardId)
      .then((response) => response.json())
      .then((json) => setBoard(json))
  }, [boardId])

  useEffect(() => {
    fetch('http://localhost:5000/api/boards/' + boardId + '/pins')
      .then((response) => response.json())
      .then((json) => setPinsOfBoard(json))
  }, [boardId, pinsOfBoard])

  //console.log(pinsOfBoard)

  return (
    <div>
      <h3
        style={{
          textAlign: "center"
        }}>
        {board.title}
      </h3>
      <PinForm user={user} board={board} />
      <PinList pins={pinsOfBoard} showAll={false}/>
    </div>
  );
};

export default BoardPage;
