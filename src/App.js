import React from 'react';
import { StyleRoot } from 'radium';

import GoogleMap from './GoogleMap';
import Hamburger from './Hamburger';
import Title from './Title';
import AddRestaurantButton from './AddRestaurantButton';

export default function App() {
  const styles = {
    container: {
      fontFamily: `'Lato', sans-serif`,
      height: `100%`,
      minWidth: `320px`,
      margin: 0,
      padding: 0,
      overflow: `hidden`,
    },
  };

  return (
    <StyleRoot style={styles.container}>
      <GoogleMap />
      <Title />
      <Hamburger />
      <AddRestaurantButton />
    </StyleRoot>
  );
}
