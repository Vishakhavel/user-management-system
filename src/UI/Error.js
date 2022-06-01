import React, { useState } from 'react'
import styles from './Error.module.css'

const Error = (props) => {
  return (
    <div>
      <header>
        <h2>{props.title}</h2>
      </header>
      <div>
        <p>{props.message}</p>
      </div>
      <footer>footer</footer>
    </div>
  )
}

export default Error
