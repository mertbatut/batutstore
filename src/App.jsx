import React, { useState } from 'react';
import './App.css'
import HomePage from './pages/HomePage'
import { Route, Switch } from 'react-router-dom/cjs/react-router-dom.min'
import BlogPage from './pages/BlogPage'
import ProductList from './pages/ProductList'



function App() {
  const [count, setCount] = useState(0)

  return (
    <>

      <Route exact path='/'>
        <HomePage />
      </Route>
      <Switch>
        <Route path='/Blog'><BlogPage/></Route>
        <Route path='/ProductPage'>
          <ProductList/>
          </Route>
        
      </Switch> 
    </>
  )
}

export default App
