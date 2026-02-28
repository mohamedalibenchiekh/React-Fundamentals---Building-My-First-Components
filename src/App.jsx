import { useState } from 'react'
import ToggleButton from './components/ToggleButton';
import './App.css'

function App() {


  return (
    <>
      <h2>Toggle Preview (Visible State)</h2>
      <ToggleButton /> {/* Has isVisible = true hardcoded */}
      
      <h2>Toggle Preview (Hidden State)</h2>
      <ToggleButton isVisible={false} /> {/* Passes isVisible = false */}
    </>
  )
}

export default App
