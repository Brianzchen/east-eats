import React from 'react';
import { StyleRoot } from 'radium';

import GoogleMap from './googleMap/GoogleMap';
import MenuButton from './MenuButton';
import Title from './Title';
import AddRestaurantButton from './AddRestaurantButton';

export default class App extends React.Component {
  render() {
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
        <GoogleMap
          addRestaurant={this.state.addRestaurant}
          cancelAddRestaurant={this.cancelAddRestaurant}
        />
        <Title addRestaurant={this.state.addRestaurant} />
        <AddRestaurantButton
          addRestaurant={this.state.addRestaurant}
          addCallback={this.addRestaurant}
          cancelCallback={this.cancelAddRestaurant}
        />
        <MenuButton />
      </StyleRoot>
    );
  }

  constructor(props) {
    super(props);

    this.state = {
      addRestaurant: false,
    };
  }

  addRestaurant = () => {
    this.setState({
      addRestaurant: true,
    });
  }

  cancelAddRestaurant = () => {
    this.setState({
      addRestaurant: false,
    });
  }
}
