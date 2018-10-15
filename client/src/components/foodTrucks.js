import React from 'react';

import Walker from '../atoms/walker';
import Button from '../atoms/button';
import GoogleMap from '../atoms/map';
import Results from '../atoms/results';

import Strings from '../content/strings';
// import Data from '../content/data';

const FoodTrucks = () => {
  return (
    <div>
      <Walker />
      <Button link="" text={Strings.button_profile}/>
      <GoogleMap />
      <Button link="" text={Strings.button_zoom_in}/>
      <Button link="" text={Strings.button_zoom_out}/>
      <Results number="2" />
    </div>
  );
}

export default FoodTrucks;
