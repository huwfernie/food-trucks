import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import './index.css';

import AppIndex from './components/index';
import DisclaimerComponent from './components/disclaimer';
import FoodTrucks from './components/foodTrucks';

ReactDOM.render(
  <BrowserRouter>
    <div>
      <Switch>
        <Route path="/info" component={ DisclaimerComponent }/>
        <Route path="/foodTrucks" component={ FoodTrucks }/>
        <Route path="/" component={ AppIndex } />
      </Switch>
    </div>
  </BrowserRouter>,
  document.getElementById('root')
);
