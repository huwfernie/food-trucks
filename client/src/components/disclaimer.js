import React from 'react';

import Logo from '../atoms/logo';
import Button from '../atoms/button';
import Info from '../atoms/info';

import Strings from '../content/strings';

const DisclaimerComponent = () => {
  return (
    <div>
      <Logo />
      <Info text={Strings.warning_text}/>
      <Button text='OK' link='/foodTrucks' />
    </div>
  );
}

export default DisclaimerComponent;
