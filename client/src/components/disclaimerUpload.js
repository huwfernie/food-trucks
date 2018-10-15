import React from 'react';

import Logo from '../atoms/logo';
import Button from '../atoms/button';
import Info from '../atoms/info';

import Strings from '../content/strings';

const DisclaimerUpload = () => {
  return (
    <div>
      <Logo />
      <Info text={Strings.warning_upload}/>
      <Button text={Strings.button_agree} link='/camera' />
    </div>
  );
}

export default DisclaimerUpload;
