import React from 'react'
import {BrowserRouter, Route, Link} from 'react-router-dom'

import Home from './components/Home'
import LogIn from './components/LogIn'
import SignUp from './components/SignUp'


class App extends React.Component{
  render = () =>{
    return <div>
      <BrowserRouter>
        <div>
          <Link to="/home">Home</Link>
          <Link to="/login">Log In</Link>
          <Link to="/signup">Sign Up</Link>
        </div>
        <Route path="/home" component={Home} />
        <Route path="/login" component={LogIn} />
        <Route path="/signup" component={SignUp} />
      </BrowserRouter>
    </div>
  }
}

export default App