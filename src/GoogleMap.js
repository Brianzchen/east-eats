import React from 'react';

export default class GoogleMap extends React.Component {
  render() {
    const styles = {
      container: {
        height: `100%`,
      },
    };

    return (
      <div id={`map`} style={styles.container} />
    );
  }

  componentDidMount() {
    navigator.geolocation.getCurrentPosition(position => {
      this.map = new google.maps.Map(document.getElementById(`map`), {
        center: { lat: position.coords.latitude, lng: position.coords.longitude },
        scrollwheel: false,
        zoom: 14,
        fullscreenControl: false,
        mapTypeControl: false,
      });
    });
  }
}
