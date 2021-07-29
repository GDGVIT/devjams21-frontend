import './App.css'
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom'
import { ReactComponent as Discord } from './Assets/Discord.svg'
import Navbar from './Components/Navbar'
import About from './Pages/About.jsx'
import Timeline from './Pages/Timeline'
import Sponsors from './Pages/Sponsors'
import Speakers from './Pages/Speakers'
import Faq from './Pages/Faq'
import Home from './Pages/Home'

function App () {
  return (
    <div className='App'>
      <Navbar />
      <BrowserRouter>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/timeline' component={Timeline} />
          <Route exact path='/sponsors' component={Sponsors} />
          <Route exact path='/speakers' component={Speakers} />
          <Route exact path='/faq' component={Faq} />
          <Route exact path='/about' component={About} />
          <Redirect to='/' />
        </Switch>
      </BrowserRouter>
      <div className='discord absolute bottom-8 right-8 z-30'>
        <Discord className='' />
      </div>
    </div>
  )
}

export default App
