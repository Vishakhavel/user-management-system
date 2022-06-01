import logo from './logo.svg'
import './App.css'
import AddUser from './Users/AddUser'
import UserList from './Users/UserList'
import Error from './UI/Error'
import React, { useState } from 'react'

function App() {
  const [users, setUsers] = useState([])
  const handleInputUserData = (inputName, inputAge) => {
    setUsers((prevState) => {
      return [
        ...prevState,
        { name: inputName, age: inputAge, id: Math.random().toString() },
      ]
    })
  }
  return (
    <div>
      {/* {<Error />} */}
      <AddUser onValidInput={handleInputUserData} />
      <UserList items={users} />
    </div>
  )
}

export default App
