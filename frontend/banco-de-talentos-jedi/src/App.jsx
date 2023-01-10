import { useState } from 'react'
import './App.css'
import Loading from './pages/loading.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <Loading />
  )
}

export default App
