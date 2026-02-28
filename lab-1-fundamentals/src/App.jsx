import { useState } from 'react'
import Product from './components/Product';
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Product title="Laptop" price={999} inStock={true} rating={4.5} />
      <Product title="Phone" price={499} inStock={false} rating={4} />
      <Product title="Headphones" price={99} inStock={true} rating={5} />
    </>
  )
}

export default App
