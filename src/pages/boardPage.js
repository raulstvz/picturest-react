import { React, useState, useEffect } from "react";
import { useParams } from 'react-router';
import PinList from "../components/pinList/PinList";

const BoardPage = ({ user, boards }) => {
  const params = useParams();

  const [board, setBoard] = useState({});
  const [pins, setPins] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:5000/api/boards/${params.id}`)
      .then((response) => response.json())
      .then((json) => setBoard(json))
  }, [])

  useEffect(() => {
    fetch(`http://localhost:5000/api/boards/${params.id}`)
      .then((response) => response.json())
      .then((json) => setPins(json.pins))
  }, [])

  console.log(pins)

  return (
    <div className="app__body">
      <div>
        <p>{board.title}</p>
        <p>{board.author}</p>
      </div>
      <PinList user={user} boards={boards} pins={pins} />
    </div>
  );
};

export default BoardPage;
