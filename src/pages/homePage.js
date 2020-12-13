import { React, useState, useEffect } from 'react'
import "../App.css";
import PinList from "../components/pinList/PinList";

const HomePage = ({ user, boards }) => {

  const [pins, setPins] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/api/pins")
      .then((response) => response.json())
      .then((json) => setPins(json));
  }, []);

  return (
    <div>
      <PinList user={user} boards={boards} pins={pins} />
    </div>
  );
};

export default HomePage;
