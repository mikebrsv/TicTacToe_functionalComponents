import React, { useState } from 'react'

const Square = (props) => {
  const [value, setValue] = useState(0)

  return (
    <button
      className="square"
      onClick={() => setValue('X')}
    >
      {value}
    </button>
  )
}

export default Square