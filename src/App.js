import './App.css'
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom'
import About from './Pages/About.jsx'
import Timeline from './Pages/Timeline'
import Sponsors from './Pages/Sponsors'
import Speakers from './Pages/Speakers'
import Faq from './Pages/Faq'

function App () {
  return (
    <div className='App'>
      <BrowserRouter>
        <Switch>
          <Route exact path='/' component={About} />
          <Route exact path='/timeline' component={Timeline} />
          <Route exact path='/sponsors' component={Sponsors} />
          <Route exact path='/speakers' component={Speakers} />
          <Route exact path='/faq' component={Faq} />
          <Redirect to='/' />
        </Switch>
      </BrowserRouter>
    </div>
  )
}

export default App
