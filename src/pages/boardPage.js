import React from "react";
import Header from "../components/header/Header";
import BoardList from "../components/boardList/BoardList";

const BoardPage = ({ user, boards, pins }) => {
  return (
    <div className="app__body">
      <Header
        avatar={user.avatar}
        fullname={`${user.firstName} ${user.lastName}`}
      />
      <BoardList user={user} boards={boards} pins={pins} />
    </div>
  );
};

export default BoardPage;
