import React, { useState } from 'react'
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

  const date = new Date()
  const time = date.getHours()
  const darkTheme = !((time > 5 && time < 18))

  return (
    <div className='App'>
      <BrowserRouter>
        <Navbar setBodyRender={setBodyRender} darkTheme={darkTheme} />
        {bodyRender &&
          <Switch>
            <Route exact path='/' component={() => <Home darkTheme={darkTheme} />} />
            <Route exact path='/events' component={() => <Timeline darkTheme={darkTheme} />} />
            <Route exact path='/sponsors' component={() => <Sponsors darkTheme={darkTheme} />} />
            <Route exact path='/faq' component={() => <Faq darkTheme={darkTheme} />} />
            <Route exact path='/about' component={() => <About darkTheme={darkTheme} />} />
            <Redirect to='/' />
          </Switch>}
      </BrowserRouter>
    </div>
  )
}

export default App
