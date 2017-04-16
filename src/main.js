import React from 'react';
import PropTypes from 'prop-types';

import App from './App';
import Login from './Login';

export default class Main extends React.Component {
  render() {
    if (typeof this.state.loggedIn === `undefined`) {
      return null;
    }

    const body = this.state.loggedIn ?
      <App /> :
      <Login />;

    return body;
  }

  constructor(props) {
    super(props);

    this.state = {
      loggedIn: undefined,
    };

    this.props.firebase.auth().onAuthStateChanged(user => {
      this.setState({
        loggedIn: user !== null,
      });
    });
  }

  getChildContext() {
    return ({
      firebase: this.props.firebase,
    });
  }

  login = () => {
    this.setState({
      loggedIn: true,
    });
  }
}

Main.childContextTypes = {
  firebase: PropTypes.object.isRequired,
};

Main.propTypes = {
  firebase: PropTypes.object.isRequired,
};
