import "../App.css";
import Header from "../components/header/Header";
import UserCard from "../components/userCard/UserCard";
import BoardList from "../components/boardList/BoardList";

const UserProfilePage = ({ user, boards }) => {
  return (
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
    </div>
  );
};

export default UserProfilePage;
