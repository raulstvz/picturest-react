import "../App.css";
import UserUpdateForm from "../components/userUpdateForm/UserUpdateForm";

const UserUpdateProfilePage = ({ user }) => {

  return (
    <div>
      <UserUpdateForm user={user} />
    </div>
  );
};

export default UserUpdateProfilePage;