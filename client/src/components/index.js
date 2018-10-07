import React from 'react';

import Logo from '../atoms/logo';
import Button from '../atoms/button';

import Strings from '../content/strings';

const AppIndex = () => {
  return (
    <div>
      <Logo />
      <Button text={Strings.find_food_trucks} link= '/info' />
      <Button text={Strings.add_a_food_truck} link="#" />
    </div>
  );
}

export default AppIndex;
