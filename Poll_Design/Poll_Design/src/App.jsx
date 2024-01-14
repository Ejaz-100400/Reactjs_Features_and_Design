import { useState } from 'react'
import Poll from './Components/Poll'
import PollRadio from './Components/ProgessRadio'
import ProgressComponent from './Components/ProgressBar'
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
