import { useState } from 'react'
import './App.css'
import './style/card.css'
import './style/gender.css'
import './style/header.css'
import './style/loading.css'
import './style/characters.css'
import Loading from './pages/loading.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <Loading />
  )
}

export default App
