import React, { useState } from 'react'
import './App.css'
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom'
import Navbar from './Components/Navbar'
import About from './Pages/About.jsx'
import Timeline from './Pages/Timeline'
import Sponsors from './Pages/Sponsors'
import Faq from './Pages/Faq'
import Home from './Pages/Home'
import Animation from './Components/Animation'

function App () {
  const [bodyRender, setBodyRender] = useState(false)
  const [metrics, setMetrics] = useState(null)
  const [navlinksOpen, setNavlinksOpen] = useState(false)

  const date = new Date()
  const time = date.getHours()
  const darkTheme = !(time > 5 && time < 18)

  return (
    <div className='App'>
      <BrowserRouter>
        <Navbar
          setBodyRender={setBodyRender}
          darkTheme={darkTheme}
          navlinksOpen={navlinksOpen}
          setNavlinksOpen={setNavlinksOpen}
          metrics={metrics}
        />
        {navlinksOpen && (
          <div className='bg-white fixed top-0 left-0 opacity-50 z-30 w-screen h-full transition-all ease-in-out duration-300' />
        )}
        <Animation darkTheme={darkTheme} setMetrics={setMetrics} />
        {bodyRender && (
          <Switch>
            <Route
              exact
              path='/'
              component={() => <Home darkTheme={darkTheme} />}
            />
            <Route
              exact
              path='/timeline'
              component={() => <Timeline darkTheme={darkTheme} />}
            />
            <Route
              exact
              path='/sponsors'
              component={() => <Sponsors darkTheme={darkTheme} />}
            />
            <Route
              exact
              path='/faq'
              component={() => <Faq darkTheme={darkTheme} />}
            />
            <Route
              exact
              path='/about'
              component={() => <About darkTheme={darkTheme} />}
            />
            <Redirect to='/' />
          </Switch>
        )}
      </BrowserRouter>
    </div>
  )
}

export default App
