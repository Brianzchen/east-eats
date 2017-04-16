import React from 'react';
import Radium from 'radium';

class Hambuger extends React.Component {
  render() {
    const styles = {
      icon: {
        position: `fixed`,
        top: `12px`,
        right: `12px`,
        fontSize: `3em`,
        color: `#111111`,
        cursor: `pointer`,
      },
    };

    return (
      <div>
        <i style={styles.icon} className="fa fa-bars" aria-hidden="true" />
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
}

export default Radium(Hambuger);
