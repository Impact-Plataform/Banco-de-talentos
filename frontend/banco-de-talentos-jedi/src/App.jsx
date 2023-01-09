import { useState } from 'react'
import { Characters } from './pages/characters.jsx'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <Characters />
  )
}

export default App
