import React from 'react'
import { Switch, Route } from 'react-router'
import LinkBtn from './components/LinkBtn'
import ProfileContainer from './containers/ProfileContainer'
import LoginContainer from './containers/LoginContainer'
import PrivateRoute from './containers/PrivateRoute'
import Home from './components/Home'
import RegisterContainer from './containers/RegisterContainer'
import NewsContainer from './containers/NewsContainer'
import { ButtonGroup } from 'react-bootstrap'
import SessionBut from './containers/SessionBut'
import './style/app.css'

const App = () => {
  return (
    <div>
      <header>
        <ButtonGroup aria-label="Basic example" className={'btnGroup'}>
          <LinkBtn to="/profile" label={'Profile'} />
          <LinkBtn to={'/'} label={'Home'} />
          <LinkBtn to={'/news'} label={'News'} />
          <LinkBtn to={'/registration'} label={'Registration'} />
          <SessionBut to={'/login'} label={'Login'} altLabel={'LogOut'} />
        </ButtonGroup>
      </header>
      <div>
        <Switch>
          <Route path={'/news'} component={NewsContainer} />
          <Route path="/login" component={LoginContainer} />
          <Route exact path="/" component={Home} />
          <Route path={'/registration'} component={RegisterContainer} />
          <PrivateRoute path="/profile" component={ProfileContainer} />
        </Switch>
      </div>
    </div>
  )
}

export default App
