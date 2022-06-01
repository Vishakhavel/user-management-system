import React, { useState } from 'react'
import styles from './UserForm.module.css'

const UserForm = (props) => {
  const [enteredAge, setEnteredAge] = useState()
  const [enteredName, setEnteredName] = useState()

  const handleFormSubmit = (event) => {
    event.preventDefault()
    console.log(enteredName)
    console.log(enteredAge)

    setEnteredAge('')
    setEnteredName('')

    // call to the handler
  }

  const handleInputName = (event) => {
    setEnteredName(event.target.value)
  }

  const handleInputAge = (event) => {
    setEnteredAge(event.target.value)
  }
  return (
    <div>
      <form onSubmit={handleFormSubmit}>
        <label htmlFor='name'>Name:</label>
        <input
          type='text'
          id='name'
          value={enteredName}
          onChange={handleInputName}
        />

        <label htmlFor='age'>Age:</label>
        <input
          type='number'
          id='age'
          value={enteredAge}
          onChange={handleInputAge}
        />

        <button type='submit'>Add User</button>
      </form>
    </div>
  )
}
export default UserForm
