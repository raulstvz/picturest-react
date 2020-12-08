import { useState, useEffect} from 'react';
import './App.css';
import UserCard from "./components/userCard/UserCard"
import Header from "./components/header/Header"
import BoardList from './components/boardList/BoardList';
import PinList from './components/pinList/PinList';

function App() {

  const [user, setUser] = useState({});

  useEffect(() => {  
    fetch("http://localhost:5000/api/users/3")
      .then((response) => response.json())
      .then((json) => setUser(json))
  }, []);

  console.log(user);

  return (
    <div className="app__body">
      <Header 
        avatar={user.avatar} 
        fullname={`${user.firstName} ${user.lastName}`}/>
      <UserCard 
        avatar={user.avatar}
        userName={user.userName} 
        fullName={`${user.firstName} ${user.lastName}`}
        followingCount={user.id}
      />
      <BoardList />
      <PinList />
    </div>
  );
}

export default App;
