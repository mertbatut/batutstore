import React, { useState } from 'react';
import './App.css'
import HomePage from './pages/HomePage'
import { Route, Switch } from 'react-router-dom/cjs/react-router-dom.min'
import BlogPage from './pages/BlogPage'
import ProductList from './pages/ProductList'
import Contact from './pages/Contact';
import Team from './pages/Team';
import Subscription from './layout/Subscription';
import LoginPage from './components/Login';





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
          <Route path='/Contact'>
          <Contact/>
          </Route>
          <Route path='/About'>
          <Team/>
          </Route>
          <Route path='/Action'>
          <Subscription/>
          </Route>
          <Route path='/Login'>
          <LoginPage/> 
          </Route>
        
      </Switch>  
      
    </>
  )
}

export default App
