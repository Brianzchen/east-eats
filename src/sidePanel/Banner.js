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
      top: `10px`,
      right: `14px`,
      fontSize: `40px`,
      color: `white`,
      cursor: `pointer`,
      ':hover': {
        color: context.colorHover,
      },
    },
  };

  return (
    <div style={styles.container}>
      <i
        className={`fa fa-arrow-right`}
        style={styles.backButton}
        aria-hidden
        onClick={props.closeCallback}
      />
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
