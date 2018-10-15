import React from 'react';

import Logo from '../atoms/logo';
import Button from '../atoms/button';
import Info from '../atoms/info';

import Strings from '../content/strings';

const DisclaimerSearch = () => {
  return (
    <div>
      <Logo />
      <Info text={Strings.warning_search}/>
      <Button text={Strings.button_agree} link='/foodTrucks' />
    </div>
  );
}

export default DisclaimerSearch;
