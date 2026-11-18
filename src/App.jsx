import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  const increase = () => {
    setCount(count + 1)
  }

  const decrease = () => {
    if (count > 0) {
      setCount(count - 1)

    }
  }
  const reset = () => {
    setCount(0)
  }

  return (
    <>
      <div className="container">
        <div className="container-card">
          <h1>Counter App</h1>
          <h2 className="count">{count}</h2>
          <div className="button-group">

            <button className='increase' onClick={increase}>+</button>
            <button className='decrease' onClick={decrease}>-</button>
            <br/>
            <button className='reset' onClick={reset}>Reset</button>

          </div>
        </div>
      </div>

    </>
  )
}

export default App
