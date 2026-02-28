import { useState } from 'react'
import UserCard from './components/UserCard';
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <UserCard name="Alice" email="alice@example.com" role="Developer" />
      <UserCard name="Bob" email="bob@example.com" role="Designer" />
      <UserCard name="Charlie" email="charlie@example.com" role="Manager" />
    </>
  )
}

export default App
