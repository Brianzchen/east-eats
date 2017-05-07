import React from 'react';
import PropTypes from 'prop-types';
import Radium from 'radium';

import SidePanel from './sidePanel/SidePanel';

class Hamburger extends React.Component {
  render() {
    const styles = {
      icon: {
        position: `fixed`,
        top: `16px`,
        right: `12px`,
        fontSize: `40px`,
        color: this.context.colorPrimary,
        cursor: `pointer`,
        WebkitTapHighlightColor: `rgba(255, 255, 255, 0)`,
      },
    };

    return (
      <div>
        <i
          style={styles.icon} className="fa fa-bars" aria-hidden="true"
          onClick={this.openSidePanel}
        />
        <SidePanel open={this.state.sidePanelOpen} closeCallback={this.closeSidePanel} />
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
    this.setState({
      sidePanelOpen: true,
    });
  }

  closeSidePanel = () => {
    this.setState({
      sidePanelOpen: false,
    });
  }
}

Hamburger.contextTypes = {
  firebase: PropTypes.object,
  colorPrimary: PropTypes.string,
};

export default Radium(Hamburger);
