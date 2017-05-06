import React from 'react';
import PropTypes from 'prop-types';

export default class Login extends React.Component {
  render() {
    const styles = {
      container: {
        position: `fixed`,
        top: 0,
        left: 0,
        height: `100%`,
        width: `100%`,
        backgroundImage: `url(images/login.jpg)`,
        backgroundSize: `cover`,
        backgroundPosition: `center`,
      },
      containerOverlay: {
        position: `fixed`,
        top: 0,
        left: 0,
        height: `100%`,
        width: `100%`,
        backgroundColor: `rgba(68,68,68, 0.45)`,
      },
      form: {
        position: `absolute`,
        top: `calc(50% - 128px)`,
        left: `calc(50% - 128px)`,
        width: `352px`,
        padding: `64px 0`,
        backgroundColor: `rgba(255, 255, 255, 1)`,
        boxShadow: `0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)`,
      },
      label: {
        display: `block`,
        width: `256px`,
        margin: `auto`,
        padding: `8px`,
      },
      icon: {
        display: `inline-block`,
        fontSize: `32px`,
        height: `32px`,
        width: `32px`,
        textAlign: `center`,
        paddingRight: `8px`,
      },
      input: {
        display: `inline-block`,
        boxSizing: `border-box`,
        border: `none`,
        outline: `none`,
      },
    };

    return (
      <div style={styles.container}>
        <div style={styles.containerOverlay}>
          <form style={styles.form} onSubmit={this.logIn}>
            <label style={styles.label} htmlFor={`emailInput`}>
              <i style={styles.icon} className={`fa fa-user-circle-o`} aria-hidden />
              <input
                id={`emailInput`}
                style={styles.input} name={`email`}
                type={`email`} value={this.state.email}
                onChange={this.onEmailChange} required
                placeholder={`email`}
              />
            </label>
            <label style={styles.label} htmlFor={`passwordInput`}>
              <i style={styles.icon} className={`fa fa-lock`} aria-hidden />
              <input
                id={`passwordInput`}
                style={styles.input} name={`password`}
                type={`password`} value={this.state.password}
                onChange={this.onPasswordChange} required
                placeholder={`password`}
              />
            </label>
            <input type={`submit`} value={`Log in`} />
            <input type={`button`} value={`Sign up`} onClick={this.signUp} />
          </form>
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

  logIn = event => {
    event.preventDefault();
    this.context.firebase.auth().signInWithEmailAndPassword(
      this.state.email,
      this.state.password,
    ).catch(error => {
      alert(error.message);
    });
  }

  signUp = () => {
    this.context.firebase.auth().createUserWithEmailAndPassword(
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
