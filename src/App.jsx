import { useState } from 'react'
import './App.css'
import Header from './layout/Header'
import { BrowserRouter } from 'react-router-dom/cjs/react-router-dom.min'
import Carousel from './components/Carousels'
import ShopCard from './components/ShopCard'
import Footer from './layout/Footer'
import ProductContent from './layout/PageContent'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <BrowserRouter>
        <Header/>
        <Carousel/>
        <ShopCard/>
        <ProductContent/>
        <Footer/>
      </BrowserRouter>
    </>
  )
}

export default App
