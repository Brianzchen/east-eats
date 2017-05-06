import React from 'react';
import PropTypes from 'prop-types';
import Radium from 'radium';

class Login extends React.Component {
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
        top: `calc(50% - ${this.state.formHeight / 2}px)`,
        left: `calc(50% - 160px)`,
        width: `320px`,
        padding: `64px 0`,
        backgroundColor: `rgba(255, 255, 255, 1)`,
        boxShadow: `0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)`,
      },
      title: {
        color: this.context.colorPrimary,
        margin: `auto auto 32px`,
        width: `256px`,
      },
      label: {
        display: `block`,
        width: `256px`,
        margin: `auto auto 4px auto`,
        padding: `8px`,
        borderBottom: `1px solid ${this.context.colorSecondary}`,
      },
      labelSelected: {
        borderBottom: `1px solid ${this.context.colorPrimary}`,
      },
      icon: {
        display: `inline-block`,
        fontSize: `32px`,
        height: `32px`,
        width: `32px`,
        textAlign: `center`,
        paddingRight: `8px`,
        color: this.context.colorSecondary,
      },
      iconSelected: {
        color: this.context.colorPrimary,
      },
      input: {
        display: `inline-block`,
        boxSizing: `border-box`,
        border: `none`,
        outline: `none`,
        width: `calc(100% - 40px)`,
        fontSize: `28px`,
        verticalAlign: `top`,
      },
      buttonGroup: {
        width: `272px`,
        margin: `auto`,
      },
      button: {
        backgroundColor: this.context.colorSecondary,
        color: `white`,
        border: `none`,
        height: `32px`,
        width: `calc(50% - 8px)`,
        margin: `32px 4px 0`,
        cursor: `pointer`,
        ':hover': {
          backgroundColor: this.context.colorPrimary,
        },
      },
    };

    const emailLabelStyle = [styles.label, this.state.emailFocus && styles.labelSelected];
    const emailIconStyle = [styles.icon, this.state.emailFocus && styles.iconSelected];

    const passwordLabelStyle = [styles.label, this.state.passwordFocus && styles.labelSelected];
    const passwordIconStyle = [styles.icon, this.state.passwordFocus && styles.iconSelected];

    return (
      <div style={styles.container}>
        <div style={styles.containerOverlay}>
          <form style={styles.form} onSubmit={this.logIn} ref={o => { this.form = o; }}>
            <h1 style={styles.title}>East Eats</h1>
            <label style={emailLabelStyle} htmlFor={`emailInput`}>
              <i style={emailIconStyle} className={`fa fa-user-circle-o`} aria-hidden />
              <input
                id={`emailInput`} ref={o => { this.email = o; }}
                style={styles.input} name={`email`}
                type={`email`} value={this.state.email}
                onChange={this.onEmailChange} required
                placeholder={`Email`}
              />
            </label>
            <label style={passwordLabelStyle} htmlFor={`passwordInput`}>
              <i style={passwordIconStyle} className={`fa fa-lock`} aria-hidden />
              <input
                id={`passwordInput`} ref={o => { this.password = o; }}
                style={styles.input} name={`password`}
                type={`password`} value={this.state.password}
                onChange={this.onPasswordChange} required
                placeholder={`Password`}
              />
            </label>
            <div style={styles.buttonGroup}>
              <input style={styles.button} key={`login`} type={`submit`} value={`Log in`} />
              <input style={styles.button} key={`signup`} type={`button`} value={`Sign up`} onClick={this.signUp} />
            </div>
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
      emailFocus: false,
      passwordFocus: false,
      formHeight: 0,
    };
  }

  componentDidMount() {
    this.email.addEventListener(`focus`, this.inputEvent);
    this.email.addEventListener(`blur`, this.inputEvent);
    this.password.addEventListener(`focus`, this.inputEvent);
    this.password.addEventListener(`blur`, this.inputEvent);

    this.setState({ // eslint-disable-line
      formHeight: this.form.offsetHeight,
    });
  }

  componentWillUnmount() {
    this.email.removeEventListener(`focus`, this.inputEvent);
    this.email.removeEventListener(`blur`, this.inputEvent);
    this.password.removeEventListener(`focus`, this.inputEvent);
    this.password.removeEventListener(`blur`, this.inputEvent);
  }

  inputEvent = event => {
    const focus = event.type === `focus`;

    if (event.target.id === `emailInput`) {
      this.setState({
        emailFocus: focus,
      });
    } else {
      this.setState({
        passwordFocus: focus,
      });
    }
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
  colorPrimary: PropTypes.string,
  colorSecondary: PropTypes.string,
};

export default Radium(Login);
