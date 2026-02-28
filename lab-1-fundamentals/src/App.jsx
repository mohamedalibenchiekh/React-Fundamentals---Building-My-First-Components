import { useState } from 'react'
import Greeting from './components/Greeting';
import StatusBadge from './components/StatusBadge';
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Greeting />
      <h2>Status Examples:</h2>
      <StatusBadge />
    </>
  )
}

export default App
