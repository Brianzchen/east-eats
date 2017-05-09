import React from 'react';
import PropTypes from 'prop-types';
import Radium from 'radium';

function Banner(props, context) {
  const styles = {
    container: {
      height: `64px`,
      backgroundColor: context.colorPrimary,
    },
    backButton: {
      position: `absolute`,
      top: 0,
      right: `14px`,
      lineHeight: `64px`,
      fontSize: `40px`,
      color: `white`,
      cursor: `pointer`,
      WebkitTapHighlightColor: `rgba(255, 255, 255, 0)`,
      ':hover': {
        color: context.colorHover,
      },
    },
  };

  return (
    <div style={styles.container}>
      <i style={styles.backButton} className={`material-icons`} onClick={props.closeCallback}>
        arrow_forward
      </i>
    </div>
  );
}

Banner.contextTypes = {
  colorPrimary: PropTypes.string,
  colorHover: PropTypes.string,
};

Banner.propTypes = {
  closeCallback: PropTypes.func.isRequired,
};

export default Radium(Banner);
