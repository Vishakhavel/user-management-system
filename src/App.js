import logo from './logo.svg'
import './App.css'
import AddUser from './Users/AddUser'
import React, { useState } from 'react'

function App() {
  const [userlist, setUserList] = useState([])
  return (
    <div>
      <AddUser />
    </div>
  )
}

export default App
