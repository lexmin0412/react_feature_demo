import React, { useState, useEffect } from 'react'

function Example() {
  const [count, setCount] = useState(0)

  useEffect(() => {
    document.title = `you've clicked the button ${count} times`
  })

  const [inputValue, setInput] = useState('')
  // useEffect(() => {
  //   function handleInput(e) {
  //     const { target } = e
  //     const { value } = target
  //     setInput(value)
  //   }
  //   handleInput()
  // })

  function handleInput (e) {
    const { target } = e
    const { value } = target
    setInput(value)
  }

  return (
    <div>
      <div>
        you've clicked the button {count} times
      </div>
      <button onClick={() => setCount(count + 1)}>
        add
      </button>
      <input type="text" value={inputValue} onChange={handleInput} />
    </div>
  )
}

export default Example