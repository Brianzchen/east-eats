import React from 'react';
import PropTypes from 'prop-types';
import Radium from 'radium';

class Hamburger extends React.Component {
  render() {
    const styles = {
      icon: {
        position: `fixed`,
        top: `16px`,
        right: `12px`,
        fontSize: `2.5em`,
        color: `#111111`,
        cursor: `pointer`,
      },
    };

    return (
      <div>
        <i
          style={styles.icon} className="fa fa-bars" aria-hidden="true"
          onClick={this.openSidePanel}
        />
      </div>
    );
  }

  constructor(props) {
    super(props);

    this.state = {
      sidePanelOpen: false,
    };
  }

  openSidePanel = () => {
    this.context.firebase.auth().signOut();
    this.setState({
      sidePanelOpen: true,
    });
  }
}

Hamburger.contextTypes = {
  firebase: PropTypes.object,
};

export default Radium(Hamburger);
