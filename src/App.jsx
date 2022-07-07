import { useState } from 'react';
import './App.css';
import AddUser from './components/Users/AddUsers';
import UsersList from './components/Users/UsersList';

function App() {
  const [userList, setUsersList] = useState([]);

  const addUserHandler = (uName, uAge) => {
    setUsersList((prevUserList) => {
      return [...prevUserList, {name: uName, age: uAge}]
    })
  };

  return (
    <div className="App">
      <AddUser onAddUser={addUserHandler} />
      <UsersList users={[]} />
    </div>
  )
}

export default App
