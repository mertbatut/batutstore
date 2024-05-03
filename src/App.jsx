import { useState } from 'react'
import './App.css'
import Header from './layout/Header'
import { BrowserRouter } from 'react-router-dom/cjs/react-router-dom.min'
import Carousel from './components/Carousels'
import ShopCard from './components/ShopCard'
import Footer from './components/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <BrowserRouter>
        <Header/>
        <Carousel/>
        <ShopCard/>
        <Footer/>
      </BrowserRouter>
    </>
  )
}

export default App
