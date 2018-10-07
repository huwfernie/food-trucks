import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import './index.css';

import Logo from './components/logo';
import Button from './components/button';
import Info from './components/info';

const AppIndex = () => {
  return (
    <div>
      <Logo />
      <Button text='Find food' link= '/info' />
      <Button text='Add a food truck' link="#" />
    </div>
  );
}

const DisclaimerComponent = () => {
  return (
    <div>
      <Logo />
      <Info />
    </div>
  );
}

ReactDOM.render(
  <BrowserRouter>
    <div>
      <Switch>
        <Route path="/info" component={ DisclaimerComponent }/>
        <Route path="/" component={ AppIndex } />
      </Switch>
    </div>
  </BrowserRouter>,
  document.getElementById('root'));
