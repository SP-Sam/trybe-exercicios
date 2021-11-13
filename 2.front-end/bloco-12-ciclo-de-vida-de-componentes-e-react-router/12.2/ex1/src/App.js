import React, { Component } from 'react';
import Home from './components/Home';
import About from './components/About';
import Users from './components/Users';
import StrictAccess from './StrictAccess';
import { Route, BrowserRouter, Link, Switch } from 'react-router-dom'

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route
            path='/users/:id'
            render={(props) => <Users {...props} greetingsMessage='Good morning'/>}
          />
          <Route exact path="/"><Home/></Route>
          <Route path="/about"><About/></Route>
          <Route
            path="/strictAccess"
            render={(props) => <StrictAccess {...props} username='joão' password='1234' />}
          />
        </Switch>

        <Link to="/">Home</Link>
        <br/>
        <Link to="/about">About</Link>
        <br/>
        <Link to="/users/1">Users</Link>
        <br/>
        <Link to="/strictAccess">Strict Access</Link>
      </BrowserRouter>
    );
  }
}

export default App;
