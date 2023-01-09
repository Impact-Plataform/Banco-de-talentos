import { useState } from 'react'
import reactLogo from './assets/react.svg'
import { Characters } from './pages/characters.jsx'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <Characters />
  )
}

export default App
