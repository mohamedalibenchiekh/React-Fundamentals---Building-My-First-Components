import { useState } from 'react'
import Card from './components/Card';
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Card title="Card 1">
        <p>This is the content inside Card 1</p>
      </Card>
      
      <Card title="Card 2">
        <p>Different content!</p>
        <button>Click me</button>
      </Card>
      
      <Card title="Card 3">
        <ul>
          <li>Item A</li>
          <li>Item B</li>
        </ul>
      </Card>
    </>
  )
}

export default App
