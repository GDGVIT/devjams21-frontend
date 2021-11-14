import React, { useState, useRef, useEffect } from 'react'
import './App.css'
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom'
import Navbar from './Components/Navbar'
import About from './Pages/About.jsx'
import Timeline from './Pages/Timeline'
import Sponsors from './Pages/Sponsors'
import Faq from './Pages/Faq'
import Home from './Pages/Home'
import Animation from './Components/Animation'
import DJprizes from './Assets/DJprizes.png'

function App () {
  const [bodyRender, setBodyRender] = useState(false)
  const [metrics, setMetrics] = useState(null)
  const [navlinksOpen, setNavlinksOpen] = useState(false)
  const [prizeModalOpen, setPrizeModalOpen] = useState(true)
  const prizesRef = useRef(null)

  const date = new Date()
  const time = date.getHours()
  const darkTheme = !(time > 5 && time < 18)

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        prizesRef &&
        prizesRef.current &&
        !prizesRef.current.contains(event.target)
      ) {
        setPrizeModalOpen(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)

    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [prizesRef, setPrizeModalOpen])

  return (
    <div className='App'>
      {
        prizeModalOpen && (
          <div className='fixed top-0 left-0 z-50 flex h-full w-screen overflow-y-auto'>
            <div
              className={`absolute opacity-70 z-50 ${
                darkTheme ? 'bg-gray-400' : 'bg-black'
              } h-screen w-full transition-all ease-in-out duration-500 delay-1000`}
            />
              <div className='z-50 h-screen overflow-y-auto m-auto transition-all ease-in-out duration-500 delay-1000'>
                <div className='z-60 flex md:h-full'>
                  <div
                    ref={prizesRef}
                    className={`my-5 mx-5 h-full md:h-auto md:mx-auto md:my-auto rounded-xl shadow-lg p-5 font-sora w-1/2 ${
                      darkTheme ? 'bg-jams_dark_blue text-white' : 'bg-white'
                    }  border-4 border-jams_blue transition-all ease-in-out duration-500 delay-1000`}
                  >
                    <img src={DJprizes} alt='Prizes' />
                  </div>
                </div>
              </div>
            </div>
        )
      }
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
