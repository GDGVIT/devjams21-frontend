import React, { useState, useEffect } from 'react'
import './App.css'
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom'
import Navbar from './Components/Navbar'
import About from './Pages/About.jsx'
import Timeline from './Pages/Timeline'
import Sponsors from './Pages/Sponsors'
import Faq from './Pages/Faq'
import Home from './Pages/Home'

function App () {
  const [bodyRender, setBodyRender] = useState(true)
  const [date, setDate] = useState(new Date())
  const [darkTheme, setDarkTheme] = useState(false)
  const hour = 1000 * 60 * 60

  useEffect(() => {
    const timer = setInterval(() => setDate(new Date()), hour)
    if (date.getHours() < 6 && date.getHours > 17) {
      setDarkTheme(true)
    } else {
      setDarkTheme(false)
    }
    return function cleanup () {
      clearInterval(timer)
    }
  })

  return (
    <div className='App'>
      <BrowserRouter>
        <Navbar setBodyRender={setBodyRender} darkTheme={darkTheme} />
        {bodyRender &&
          <Switch>
            <Route exact path='/' render={() => <Home darkTheme={darkTheme} />} />
            <Route exact path='/events' render={() => <Timeline darkTheme={darkTheme} />} />
            <Route exact path='/sponsors' render={() => <Sponsors darkTheme={darkTheme} />} />
            <Route exact path='/faq' render={() => <Faq darkTheme={darkTheme} />} />
            <Route exact path='/about' render={() => <About darkTheme={darkTheme} />} />
            <Redirect to='/' />
          </Switch>}
      </BrowserRouter>
    </div>
  )
}

export default App
