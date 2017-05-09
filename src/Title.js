import React from 'react';
import Radium from 'radium';

function Title() {
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
    },
  };

  const title = `East Eats`;

  return (
    <div style={styles.container}>
      <div style={styles.title}>
        {title}
      </div>
    </div>
  );
}

export default Radium(Title);
