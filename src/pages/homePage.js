import "../App.css";
import BoardForm from "../components/boardForm/BoardForm";
import PinList from "../components/pinList/PinList";

const HomePage = ({ user, boards, pins }) => {
  return (
    <div className="app__body">
      <BoardForm user={user}/>
      <PinList user={user} boards={boards} pins={pins}/>
    </div>
  );
};

export default HomePage;
