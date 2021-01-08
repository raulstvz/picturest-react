import { React, useState, useEffect } from 'react'
import "../App.css";
import PinList from "../components/pinList/PinList";

const HomePage = () => {

  const [pins, setPins] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/api/pins")
      .then((response) => response.json())
      .then((json) => setPins(json));
  }, []);

  return (
      <PinList pins={pins} showAll={true}/>
  );
};

export default HomePage;
