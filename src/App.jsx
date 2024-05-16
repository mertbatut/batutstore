import React, { useState } from 'react';
import './App.css'
import HomePage from './pages/HomePage'
import { Route, Switch } from 'react-router-dom/cjs/react-router-dom.min'
import BlogPage from './pages/BlogPage'
import ProductList from './pages/ProductList'
import Contact from './pages/Contact';
import About from './pages/About';
import Subscription from './layout/Subscription';
import LoginPage from './components/Login';
import Price from './pages/Pricing';
import TeamPage from './pages/TeamPage';




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
          <About/>
          </Route>
          <Route path='/Action'>
          <Subscription/>
          </Route>
          <Route path='/Login'>
          <LoginPage/> 
          </Route>
          <Route path='/Pricing'>
          <Price/> 
          </Route>
          <Route path='/TeamPage'>
          <TeamPage/> 
          </Route>
        
      </Switch>  
      
    </>
  )
}

export default App
