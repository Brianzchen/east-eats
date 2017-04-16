import React from 'react';
import Radium from 'radium';

function Title() {
  const styles = {
    container: {
      position: `fixed`,
      top: `7px`,
      width: `100%`,
      textAlign: `center`,
      fontSize: `2em`,
      pointerEvents: `none`,
      visibility: `visible`,
    },
    title: {
      background: `rgba(238, 238, 238, 0.5)`,
      color: `rgba(0, 0, 0, 1)`,
      padding: `8px`,
      borderRadius: `100px`,
      width: `145px`,
      margin: `auto`,
    },
  };

  return (
    <div style={styles.container}>
      <div style={styles.title}>
        East Eats
      </div>
    </div>
  );
}

export default Radium(Title);
