import { useState } from 'react'
import '../App.css'

const Counter = () => {
  const [counter, setCounter] = useState(0)

  const handleIncrement = () => {
    setCounter(counter + 1)
  }

  const handleDecrement = () => {
      setCounter(counter - 1)
  }

  return (
    <div>
      <span className="count">{counter}</span>
      <div>
        <button onClick={handleDecrement} disabled={counter === 0}>Decrement</button>
        <button onClick={handleIncrement}>Increment</button>
      </div>
    </div>
  )
}

export default Counter
