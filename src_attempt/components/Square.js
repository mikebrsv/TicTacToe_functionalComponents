import React, { useState } from 'react'

const Square = (props) => {
  const [value, setValue] = useState(0)

  return (
    <button
      className="square"
      onClick={() => props.onClick()}
    >
      {props.value}
    </button>
  )
}

export default Square
