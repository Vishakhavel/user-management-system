import React, { useState } from 'react'
import styles from './UserForm.module.css'
import Card from '../UI/Card'
import Error from '../UI/Error'
const UserForm = (props) => {
  const [enteredAge, setEnteredAge] = useState('')
  const [enteredName, setEnteredName] = useState('')

  const [error, setError] = useState()
  // always initialize the useState variable wioth empty quotes, or else warning shows up.

  const handleFormSubmit = (event) => {
    event.preventDefault()
    // console.log(enteredName)
    // console.log(enteredAge)

    if (enteredName.trim().length === 0 || enteredAge.trim().length === 0) {
      // handle error
      setError({
        title: 'Invalid Input',
        message: 'Please fill in Name/Age input fields!',
      })
    } else if (+enteredAge < 0) {
      setError({
        title: 'Invalid Input',
        message: 'Please enter Age > 0',
      })
    } else {
      setEnteredAge('')
      setEnteredName('')

      props.onValidInput(enteredName, enteredAge) // call to App.js
    }
  }

  const handleInputName = (event) => {
    setEnteredName(event.target.value)
  }

  const handleInputAge = (event) => {
    setEnteredAge(event.target.value)
  }
  return (
    <div>
      {error && <Error title={error.title} message={error.message} />}
      <Card className={styles.input}>
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
      </Card>
    </div>
  )
}
export default UserForm
