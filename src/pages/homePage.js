import "../App.css";
import PinList from "../components/pinList/PinList";

const HomePage = ({ user, boards, pins }) => {
  return (
    <div className="app__body">
      <PinList user={user} boards={boards} pins={pins}/>
    </div>
  );
};

export default HomePage;
