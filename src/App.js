import React, { Component } from 'react';
import {Offices, Overviews} from './Containers'
import { BrowserRouter,Route, Redirect, Switch }from 'react-router-dom';
import './App.css';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path='/overview' component={Overviews}/>
          <Route exact path='/offices/:id' component={Offices}/>
          <Redirect to={'/overview'}></Redirect>
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
