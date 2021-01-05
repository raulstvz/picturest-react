import { React, useState, useEffect } from "react";
import "../App.css";
import UserCard from "../components/userCard/UserCard";
import BoardList from "../components/boardList/BoardList";
import BoardForm from "../components/boardForm/BoardForm";
import PinList from "../components/pinList/PinList";

const UserProfilePage = ({ user }) => {

  //const localStorageUser = JSON.parse(localStorage.getItem('user'));

  const userId = user._id
  console.log(user._id)

  const [userPins, setUserPins] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/api/users/" + userId + "/pins")
      .then((response) => response.json())
      .then((json) => setUserPins(json));
  }, [userId]);

  console.log(userPins)


  return (
    <div>
      {/* <UserCard user={localStorageUser} /> */}
      <UserCard user={user} />
      <BoardForm user={user} />
      <BoardList user={user} />
      <PinList pins={userPins} />
    </div>
  );
};

export default UserProfilePage;
