import React from 'react';
import PropTypes from 'prop-types';

export default class Login extends React.Component {
  render() {
    const createAccountText = `Don't have an account with us yet? Create one here`;

    return (
      <div>
        <form onSubmit={this.signIn}>
          <input
            type={`email`} value={this.state.email}
            onChange={this.onEmailChange} required
            placeholder={`email`}
          />
          <input
            type={`password`} value={this.state.password}
            onChange={this.onPasswordChange} required
            placeholder={`password`}
          />
          <input type={`submit`} value={`Sign in`} />
        </form>
        <div>
          <p>
            {createAccountText}
          </p>
        </div>
      </div>
    );
  }

  constructor(props) {
    super(props);

    this.state = {
      email: ``,
      password: ``,
    };
  }

  onEmailChange = event => {
    this.setState({
      email: event.target.value,
    });
  }

  onPasswordChange = event => {
    this.setState({
      password: event.target.value,
    });
  }

  signIn = event => {
    event.preventDefault();
    this.context.firebase.auth().signInWithEmailAndPassword(
      this.state.email,
      this.state.password,
    ).catch(error => {
      alert(error.message);
    });
  }
}

Login.contextTypes = {
  firebase: PropTypes.object,
};
