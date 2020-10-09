import React from 'react'
// import {BrowserRouter, Route, Link} from 'react-router-dom'
import { Tab } from 'semantic-ui-react'

import Home from './components/Home'
import LogIn from './components/LogIn'
import SignUp from './components/SignUp'


const panes = [
  {
    menuItem: 'Home',
    render: () => <Tab.Pane attached={false}><Home/></Tab.Pane>,
  },
  {
    menuItem: 'Log In',
    render: () => <Tab.Pane attached={false}><LogIn/></Tab.Pane>,
  },
  {
    menuItem: 'Sign Up',
    render: () => <Tab.Pane attached={false}><SignUp/></Tab.Pane>,
  },
]

class App extends React.Component{
  state = { color: "blue" }

  render() {
    const color = this.state.color

    return (
      <div className="ui container">
        <Tab menu={{ color, attached: false, tabular: false }} panes={panes} />
      </div>
    )
  }
}

export default App