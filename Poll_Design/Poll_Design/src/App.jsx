import { useState } from 'react'
import PollRadio from './Components/ProgessRadio'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='App'>
    <PollRadio />
    </div>
  )
}

export default App
