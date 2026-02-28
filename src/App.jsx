import { useState } from 'react'
import BlogPost from './components/BlogPost';
import './App.css'

function App() {
  // Define author objects for clarity
  const alice = { name: "Alice", email: "alice@example.com", role: "Developer" };
  const bob = { name: "Bob", email: "bob@example.com", role: "Designer" };

  return (
    <>
     <BlogPost 
        title="Learning React"
        author={alice}
        content="React makes building UIs fun and component-based..."
        date="Jan 15"
      />
      <BlogPost 
        title="React Tips"
        author={bob}
        content="Here are my top tips for writing clean React code..."
        date="Jan 20"
      />
    </>
  )
}

export default App
