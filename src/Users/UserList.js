import React, { useState } from 'react'
import Card from '../UI/Card'
import styles from './UserList.module.css'
const UserList = (props) => {
  return (
    <Card className={styles.users}>
      {' '}
      <ul>
        {props.items.map((user) => (
          <li>
            {user.name} - {user.age} years old
          </li>
        ))}
      </ul>
    </Card>
  )
}

export default UserList
