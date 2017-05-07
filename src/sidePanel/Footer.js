import React from 'react';
import PropTypes from 'prop-types';
import Radium from 'radium';

class Footer extends React.Component {
  render() {
    const styles = {
      container: {
        position: `absolute`,
        left: 0,
        right: 0,
        bottom: 0,
        height: `64px`,
        backgroundColor: this.context.colorPrimary,
        color: `white`,
        fontSize: `32px`,
        lineHeight: `64px`,
        textAlign: `center`,
        cursor: `pointer`,
        ':hover': {
          color: this.context.colorHover,
        },
      },
    };

    return (
      <div style={styles.container} onClick={this.logout}>
        Logout
      </div>
    );
  }

  logout = () => {
    this.context.firebase.auth().signOut();
  }
}

Footer.contextTypes = {
  firebase: PropTypes.object,
  colorPrimary: PropTypes.string,
  colorHover: PropTypes.string,
};

export default Radium(Footer);
