import './App.css'
import LeftBase from './components/LeftBase/LeftBase'
import RightBase from './components/RightBase/RightBase'
import { useState } from 'react'

function App() {
  return (
    <div className="App">
      <LeftBase />
      <RightBase />
    </div>
  )
}

export default App
