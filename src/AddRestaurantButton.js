import React from 'react';
import PropTypes from 'prop-types';
import Radium from 'radium';

function AddRestaurantButton(props, context) {
  const styles = {
    container: {
      position: `fixed`,
      left: `calc(50% - 32px)`,
      bottom: `16px`,
      height: `64px`,
      width: `64px`,
      borderRadius: `32px`,
      backgroundColor: context.colorPrimary,
      textAlign: `center`,
      cursor: `pointer`,
      boxShadow: `0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)`,
      WebkitTapHighlightColor: `rgba(255, 255, 255, 0)`,
    },
    icon: {
      color: `white`,
      fontSize: props.addRestaurant ? `45px` : `52px`,
      lineHeight: `64px`,
      userSelect: `none`,
      ':hover': {
        color: context.colorHover,
      },
    },
  };

  const onClick = props.addRestaurant ? props.cancelCallback : props.addCallback;
  const icon = props.addRestaurant ? `close` : `add`;

  return (
    <div style={styles.container} onClick={onClick}>
      <i style={styles.icon} className={`material-icons`}>
        {icon}
      </i>
    </div>
  );
}

AddRestaurantButton.contextTypes = {
  colorPrimary: PropTypes.string,
  colorHover: PropTypes.string,
};

AddRestaurantButton.propTypes = {
  addRestaurant: PropTypes.bool.isRequired,
  addCallback: PropTypes.func.isRequired,
  cancelCallback: PropTypes.func.isRequired,
};

export default Radium(AddRestaurantButton);
