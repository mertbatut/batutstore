import { useState } from 'react'
import './App.css'
import HomePage from './pages/HomePage'
import { Route } from 'react-router-dom/cjs/react-router-dom.min'
import ProductPage from './pages/ProductPage'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Route path='/'>
    <HomePage/>
    </Route>
    
    <Route exact path='/About'>
    <ProductPage></ProductPage>
   </Route>
    </>
  )
}

export default App
