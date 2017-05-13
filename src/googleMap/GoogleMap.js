import React from 'react';
import PropTypes from 'prop-types';

import NewRestaurantForm from './NewRestaurantForm';

export default class GoogleMap extends React.Component {
  render() {
    const styles = {
      container: {
        height: `100%`,
      },
    };

    return (
      <div style={styles.container}>
        <div id={`map`} style={styles.container} />
        <NewRestaurantForm
          openForm={this.state.openForm}
          latLng={this.state.newRestaurantLatLng}
          clearNewMarker={this.clearNewMarker}
        />
      </div>
    );
  }

  constructor(props) {
    super(props);

    this.state = {
      openForm: false,
      newRestaurantLatLng: {},
    };
  }

  componentDidMount() {
    navigator.geolocation.getCurrentPosition(position => {
      this.map = new google.maps.Map(document.getElementById(`map`), {
        center: { lat: position.coords.latitude, lng: position.coords.longitude },
        scrollwheel: true,
        zoom: 14,
        fullscreenControl: false,
        mapTypeControl: true,
        mapTypeControlOptions: {
          style: google.maps.MapTypeControlStyle.DROPDOWN_MENU,
        },
      });

      google.maps.event.addListener(this.map, `click`, event => {
        if (this.props.addRestaurant) {
          const latLng = { lat: event.latLng.lat(), lng: event.latLng.lng() };

          this.newMarker && this.newMarker.setMap(null);
          this.newMarker = new google.maps.Marker({
            position: latLng,
            map: this.map,
          });

          this.setState({
            openForm: true,
            newRestaurantLatLng: latLng,
          }, () => {
            this.map.setCenter(latLng);
          });
        }
      });

      this.markers = [];
      const uid = this.context.firebase.auth().currentUser.uid;
      this.context.firebase.database().ref(`users/${uid}/restaurants`).on(
        `child_added`, data => {
          this.markers.push(
            new google.maps.Marker({
              position: { lat: data.val().lat, lng: data.val().lng },
              map: this.map,
            }),
          );
        });
    });
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.addRestaurant &&
        !nextProps.addRestaurant &&
        this.newMarker) {
      this.clearNewMarker();
    }
  }

  clearNewMarker = () => {
    this.newMarker.setMap(null);
    this.setState({
      openForm: false,
    });
  }
}

GoogleMap.contextTypes = {
  firebase: PropTypes.object,
};

GoogleMap.propTypes = {
  addRestaurant: PropTypes.bool.isRequired,
};
