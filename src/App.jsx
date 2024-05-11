import { useState } from 'react'
import './App.css'
import HomePage from './pages/HomePage'
import { Route, Switch } from 'react-router-dom/cjs/react-router-dom.min'



function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Route exact path='/'>
        <HomePage />
      </Route>
      <Switch>
        <Route path='/About'>

        </Route>
      </Switch>
    </>
  )
}

export default App
