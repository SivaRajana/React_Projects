import React, { useState } from 'react';
import AddUser from './Components/Users/AddUser';
import UserList from './Components/Users/UserList';

function App() {

  const [usersList, setUsersList] = useState([]);

  const addUserHandler = (userDetails) => {
    console.log(userDetails);
    setUsersList((prevUsersList) => {
      return [userDetails, ...prevUsersList];
    })
  }

  return (
    <div>
      <AddUser addUser={addUserHandler} />
      <UserList usersList={usersList} />
    </div>
  );
}

export default App;