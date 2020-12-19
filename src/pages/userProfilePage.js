import "../App.css";
import UserCard from "../components/userCard/UserCard";
import BoardList from "../components/boardList/BoardList";
import BoardForm from "../components/boardForm/BoardForm";

const UserProfilePage = ({ user }) => {

  //const localStorageUser = JSON.parse(localStorage.getItem('user'));

  return (
    <div>
      {/* <UserCard user={localStorageUser} /> */}
      <UserCard user={user} />
      <BoardForm user={user} />
      <BoardList user={user} />
    </div>
  );
};

export default UserProfilePage;
