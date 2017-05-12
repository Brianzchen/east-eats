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
      transformStyle: `preserve-3d`,
      transition: `all 0.5s linear`,
    },
    containerTransform: {
      transform: `rotateY(180deg)`,
    },
    icon: {
      color: `white`,
      lineHeight: `64px`,
      userSelect: `none`,
      ':hover': {
        color: context.colorHover,
      },
    },
    addIcon: {
      fontSize: `52px`,
      backfaceVisibility: `hidden`,
      WebkitBackfaceVisibility: `hidden`,
    },
    closeIcon: {
      position: `relative`,
      top: `-64px`,
      fontSize: `45px`,
      backfaceVisibility: `hidden`,
      WebkitBackfaceVisibility: `hidden`,
      transform: `rotateY(180deg)`,
    },
  };

  const onClick = props.addRestaurant ? props.cancelCallback : props.addCallback;
  const containerStyle = [styles.container, props.addRestaurant && styles.containerTransform];

  return (
    <div style={containerStyle} onClick={onClick}>
      <i style={[styles.icon, styles.addIcon]} key={`addIcon`} className={`material-icons`}>
        add
      </i>
      <i style={[styles.icon, styles.closeIcon]} key={`closeIcon`} className={`material-icons`}>
        close
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
