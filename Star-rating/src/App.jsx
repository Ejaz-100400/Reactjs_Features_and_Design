import { useState } from 'react'
import StarRating from './Components/Star'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='App'>
        <StarRating />
      </div>
    </>
  )
}

export default App
