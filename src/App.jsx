import { useState } from 'react'
import './App.css'
import Header from './layout/Header'
import { BrowserRouter } from 'react-router-dom/cjs/react-router-dom.min'
import Carousel from './components/Carousels'
import ShopCard from './components/ShopCard'
import Footer from './layout/Footer'
import ProductContent from './layout/PageContent'
import ProductCard4 from './components/ProductCard4'
import ProductCard25 from './components/Productcard25'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <BrowserRouter>
        <Header/>
        <Carousel/>
        <ShopCard/>
        <ProductContent/>
        <ProductCard4/>
        <ProductCard25/>
        <Footer/>
      </BrowserRouter>
    </>
  )
}

export default App
