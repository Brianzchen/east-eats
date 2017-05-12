import React from 'react';
import PropTypes from 'prop-types';
import Radium from 'radium';

function Title(props) {
  const styles = {
    container: {
      position: `fixed`,
      top: `7px`,
      height: `48px`,
      width: `100%`,
      textAlign: `center`,
      pointerEvents: `none`,
      visibility: `visible`,
    },
    title: {
      background: `rgba(115,130,144, 0.4)`,
      color: `rgba(33,118,174, 1)`,
      boxSizing: `border-box`,
      padding: `8px`,
      borderRadius: `100px`,
      height: `100%`,
      width: `160px`,
      margin: `auto`,
      lineHeight: `32px`,
      fontSize: `24px`,
      transformStyle: `preserve-3d`,
      transition: `all 0.5s linear`,
    },
    titleTransform: {
      transform: `rotateX(180deg)`,
    },
    name: {
      backfaceVisibility: `hidden`,
    },
    instruction: {
      position: `relative`,
      top: `-32px`,
      backfaceVisibility: `hidden`,
      transform: `rotateX(180deg)`,
    },
  };

  const name = `East Eats`;
  const instruction = `Add Place`;

  const titleStyle = [styles.title, props.addRestaurant && styles.titleTransform];

  return (
    <div style={styles.container}>
      <div style={titleStyle}>
        <div style={styles.name}>
          {name}
        </div>
        <div style={styles.instruction}>
          {instruction}
        </div>
      </div>
    </div>
  );
}

Title.propTypes = {
  addRestaurant: PropTypes.bool.isRequired,
};

export default Radium(Title);
