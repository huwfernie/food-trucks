import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import './styles/index.scss';

import AppIndex from './components/index';
import DisclaimerUpload from './components/disclaimerUpload';
import DisclaimerSearch from './components/disclaimerSearch';
import FoodTrucks from './components/foodTrucks';
import Camera from './components/camera';

ReactDOM.render(
  <BrowserRouter>
    <div>
      <Switch>
        <Route path="/warning-upload" component={ DisclaimerUpload }/>
        <Route path="/warning-search" component={ DisclaimerSearch }/>
        <Route path="/foodTrucks" component={ FoodTrucks }/>
        <Route path="/camera" component={ Camera }/>
        <Route path="/" component={ AppIndex } />
      </Switch>
    </div>
  </BrowserRouter>,
  document.getElementById('root')
);
