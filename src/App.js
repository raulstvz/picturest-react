import { React, useState, useEffect } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./App.css";

import Header from "./components/header/Header";

import BoardPage from "./pages/boardPage";
import HomePage from "./pages/homePage";
import UserProfilePage from "./pages/userProfilePage";

function App() {
  const [user, setUser] = useState({});

  useEffect(() => {
    fetch("http://localhost:5000/api/users/3")
      .then((response) => response.json())
      .then((json) => setUser(json));
  }, []);

  const [boards, setBoards] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/api/boards")
      .then((response) => response.json())
      .then((json) => setBoards(json));
  }, []);

  const [pins, setPins] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/api/pins")
      .then((response) => response.json())
      .then((json) => setPins(json));
  }, []);

  /* return (
    <div className="app__body">
      <Header
        avatar={user.avatar}
        fullname={`${user.firstName} ${user.lastName}`}
      />
      <UserCard
        avatar={user.avatar}
        userName={user.userName}
        fullName={`${user.firstName} ${user.lastName}`}
        followingCount={user.id}
      />
      <BoardList user={user} boards={boards}/>
      <PinList user={user} boards={boards} pins={pins}/>
    </div>
  );
 */

  return (
    <div className="app__body">
      <BrowserRouter>
        <Header
          avatar={user.avatar}
          fullname={`${user.firstName} ${user.lastName}`}
        />
        <Switch>
          <Route path="/boards">
            <BoardPage user={user} boards={boards} pins={pins} />
          </Route>
          <Route path="/user">
            <UserProfilePage user={user} boards={boards} />
          </Route>
          <Route path="/">
            <HomePage user={user} boards={boards} pins={pins} />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
