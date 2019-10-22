import React, {Component} from "react";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import {Navigation} from './components/Utils/Navigation';
import Company from './components/Company';
import Job from './components/Job';
import 'bootstrap/dist/css/bootstrap.min.css';


export default class App extends Component {

  render() {

    return (
      <Router basename={""}>
        <>
        <Navigation />
        
        <Switch>
          <Route exact path="/" >
            <Company />
          </Route>
          <Route path="/job" >
            <Job />
          </Route>
        </Switch>
        </>
      </Router>
    )
  }
}