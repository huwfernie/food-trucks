import React from 'react';

import Logo from '../atoms/logo';
import Button from '../atoms/button';
import Copy from '../atoms/copy';

import Strings from '../content/strings';

const AppIndex = () => {
  return (
    <div>
      <Logo />
      <Button text={Strings.button_find} link= '/info' />
      <Button text={Strings.button_add} link="#" />
      <Copy copy={Strings.index_text} />
    </div>
  );
}

export default AppIndex;
