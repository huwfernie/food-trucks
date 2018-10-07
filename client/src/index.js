import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';

import Logo from './components/logo';
import Button from './components/button';

const App = () => {
  return (
    <div>
      <Logo />
      <Button />
      <Button />
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));
