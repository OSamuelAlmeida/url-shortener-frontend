import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom'
import Nav from './Nav'
import Home from '../pages/Home'
import About from '../pages/About'
import Footer from './Footer'
import NotFound from '../pages/NotFound'
import Redirector from '../components/Redirector'

const Layout = () => {
  return (
      <Router>
        <Nav />
        <Switch>
          <Route exact path='/'>
            <Home />
          </Route>
          <Route path='/about-page'>
            <About />
          </Route>
          <Route path='/not-found'>
            <NotFound />
          </Route>
          <Route path='/:code'>
            <Redirector />
          </Route>
        </Switch>
        <Footer />
      </Router>
  )
}

export default Layout
