import { React, useState, useEffect } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./App.css";

import Header from "./components/header/Header";

import BoardPage from "./pages/boardPage";
import HomePage from "./pages/homePage";
import UserProfilePage from "./pages/userProfilePage";

function App() {
  const [user, setUser] = useState({});
  const [boards, setBoards] = useState([]);
  const [pins, setPins] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/api/users/3")
      .then((response) => response.json())
      .then((json) => setUser(json));
  }, []);

  useEffect(() => {
    fetch("http://localhost:5000/api/boards")
      .then((response) => response.json())
      .then((json) => setBoards(json));
  }, []);

  useEffect(() => {
    fetch("http://localhost:5000/api/pins")
      .then((response) => response.json())
      .then((json) => setPins(json));
  }, []);

  return (
    <div className="app__body">
      <BrowserRouter>
        <Header
          avatar={user.avatar}
          fullname={`${user.firstName} ${user.lastName}`}
        />
        <Switch>
          <Route exact path="/boards/:id">
            <BoardPage user={user} boards={boards} pins={pins} />
          </Route>
          <Route exact path="/user">
            <UserProfilePage user={user} boards={boards} />
          </Route>
          <Route exact path="/">
            <HomePage user={user} boards={boards} pins={pins} />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
