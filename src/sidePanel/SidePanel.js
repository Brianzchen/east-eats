import React from 'react';
import PropTypes from 'prop-types';
import Radium from 'radium';

import Banner from './Banner';
import Footer from './Footer';

function SidePanel(props) {
  const width = `304px`;

  const styles = {
    container: {
      position: `fixed`,
      height: `100%`,
      width,
      top: 0,
      right: `-${width}`,
      transition: `all 0.4s`,
      backgroundColor: `white`,
    },
    open: {
      right: 0,
      boxShadow: `0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)`,
    },
  };

  const containerStyle = [styles.container, props.open && styles.open];

  return (
    <div style={containerStyle}>
      <Banner closeCallback={props.closeCallback} />
      <Footer />
    </div>
  );
}

SidePanel.propTypes = {
  open: PropTypes.bool.isRequired,
  closeCallback: PropTypes.func.isRequired,
};

export default Radium(SidePanel);
