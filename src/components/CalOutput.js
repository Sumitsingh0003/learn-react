import React from 'react'
import {add, min, div, mul} from './Calc'

const CalOutput = () => {
  return (
    <>
      <ul>
        <li>{add(40, 4)}</li>
        <li>{min(40, 4)}</li>
        <li>{div(40, 7)}</li>
        <li>{mul(40, 4)}</li>
      </ul>
    </>
  )
}

export default CalOutput
