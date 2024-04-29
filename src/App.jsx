import { useState } from 'react'
import './App.css'
import Header from './layout/Header'
import { BrowserRouter } from 'react-router-dom/cjs/react-router-dom.min'
import Carousel from './components/Carousels'

function App() {
  let slides = [
    "./home1.jpg",
    "./home1.jpg",
    "./home1.jpg",
    "./home1.jpg",
    
  ];
  const [count, setCount] = useState(0)

  return (
    <>
      <BrowserRouter>
        <Header></Header>
        <Carousel slides={slides} />
      </BrowserRouter>
    </>
  )
}

export default App
