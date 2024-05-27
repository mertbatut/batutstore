import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import HomePage from './pages/HomePage';
import BlogPage from './pages/BlogPage';
import ProductList from './pages/ProductList';
import Contact from './pages/Contact';
import About from './pages/About';
import Subscription from './layout/Subscription';
import Login from './components/Login';
import Price from './pages/Pricing';
import TeamPage from './pages/TeamPage';
import { PasswordStrengthExample } from './components/Register';
import ProductPage from './pages/ProductDetailPage';

function App() {
  
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/Blog" component={BlogPage} />
        <Route path="/ProductList" component={ProductList} />
        <Route path="/Contact" component={Contact} />
        <Route path="/About" component={About} />
        <Route path="/Action" component={Subscription} />
        <Route path="/Login" component={Login} />
        <Route path="/Pricing" component={Price} />
        <Route path="/TeamPage" component={TeamPage} />
        <Route path="/Register" component={PasswordStrengthExample} />
        <Route path="/ProductPage" component={ProductPage}/>

      </Switch>
    </Router>
  );
}

export default App;
