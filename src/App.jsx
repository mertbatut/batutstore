import { useState } from 'react'
import './App.css'
import { BrowserRouter } from 'react-router-dom/cjs/react-router-dom.min'

import HomePage from './pages/HomePage'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <BrowserRouter>
      <HomePage/>
      </BrowserRouter>
    </>
  )
}

export default App
