import React from 'react';
import PropTypes from 'prop-types';
import Radium from 'radium';

import SidePanel from './sidePanel/SidePanel';

class MenuButton extends React.Component {
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
        <i style={styles.icon} className={`material-icons`} onClick={this.openSidePanel}>
          menu
        </i>
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

MenuButton.contextTypes = {
  firebase: PropTypes.object,
  colorPrimary: PropTypes.string,
};

export default Radium(MenuButton);
