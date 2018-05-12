import React, { Component } from 'react';
import { Route, BrowserRouter as Router, Switch, NavLink} from 'react-router-dom';
import Home from './Home';
import History from './History';
import './App.css';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <nav>
            <NavLink exact to="/">Accueil</NavLink>
            <NavLink exact to="/notre-histoire">Notre-histoire</NavLink>
          </nav>
          <Switch>
            <Route exact path='/' component={Home} />
            <Route path='/notre-histoire' component={History} />
          </Switch>
       </div>
      </Router>
    );
  }
}

export default App;