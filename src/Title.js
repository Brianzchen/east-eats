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
      background: `rgba(115,130,144, 0.4)`,
      color: `rgba(33,118,174, 1)`,
      padding: `8px`,
      borderRadius: `100px`,
      width: `145px`,
      margin: `auto`,
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
