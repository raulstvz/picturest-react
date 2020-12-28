import { React, useState, useEffect } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./App.css";

import Header from "./components/header/Header";

import BoardPage from "./pages/boardPage";
import HomePage from "./pages/homePage";
import UserProfilePage from "./pages/userProfilePage";
import LoginPage from "./pages/loginPage";

function App() {
  const [user, setUser] = useState({});
  const [boards, setBoards] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/api/users/5fde40d891756215e2172851")
      .then((response) => response.json())
      .then((json) => setUser(json));
  }, []);

  useEffect(() => {
    fetch("http://localhost:5000/api/boards")
      .then((response) => response.json())
      .then((json) => setBoards(json));
  }, []);

  return (
    <div className="app__body">
      <BrowserRouter>
        <Header user={user} />
        <Switch>
          <Route exact path="/boards/:id">
            <BoardPage user={user} boards={boards}/>
          </Route>
          <Route exact path="/user">
            <UserProfilePage user={user} />
          </Route>
          <Route exact path="/login">
            <LoginPage/>
          </Route>
          <Route exact path="/">
            <HomePage user={user} boards={boards} />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
