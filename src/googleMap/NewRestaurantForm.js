import React from 'react';
import PropTypes from 'prop-types';
import Radium from 'radium';

class NewRestaurantForm extends React.Component {
  render() {
    const width = `312`;

    const styles = {
      container: {
        position: `fixed`,
        left: `calc(50% - ${width / 2}px)`,
        bottom: 0,
        marginBottom: `96px`,
        padding: `8px 24px 0`,
        maxheight: `calc(100% - 64px)`,
        width: `${width}px`,
        backgroundColor: `white`,
        opacity: 0,
        transition: `opacity 1s`,
        fontSize: `14px`,
        boxSizing: `border-box`,
      },
      containerShow: {
        opacity: 1,
      },
      label: {
        display: `inline-block`,
        width: `88px`,
      },
      input: {
        boxSizing: `border-box`,
        width: `176px`,
      },
      submit: {
        display: `block`,
        color: `white`,
        backgroundColor: this.context.colorPrimary,
        margin: `8px auto 0`,
        height: `32px`,
        width: `128px`,
        fontSize: `18px`,
        border: `none`,
        outline: `none`,
      },
    };

    const containerStyle = [styles.container, this.props.openForm && styles.containerShow];

    return (
      <form style={containerStyle} onSubmit={this.onSubmit}>
        <label style={styles.label} htmlFor={`restaurantName`}>
          Name
        </label>
        <input
          style={styles.input}
          id={`restaurantName`}
          type={`text`}
          value={this.state.name}
          onChange={this.onNameChange}
          required
          autoComplete={`off`}
        />
        <input style={styles.submit} type={`submit`} value={`Save`} />
      </form>
    );
  }

  constructor(props) {
    super(props);

    this.state = {
      name: ``,
    };
  }

  onNameChange = event => {
    this.setState({
      name: event.target.value,
    });
  }

  onSubmit = event => {
    event.preventDefault();
    const uid = this.context.firebase.auth().currentUser.uid;
    const newRestaurant = this.context.firebase.database().ref(`users/${uid}/restaurants`).push();
    newRestaurant.set({
      name: this.state.name,
      lat: this.props.latLng.lat,
      lng: this.props.latLng.lng,
    }, () => {
      this.props.clearNewMarker();
      this.setState({
        name: ``,
      });
    });
  }
}

NewRestaurantForm.contextTypes = {
  firebase: PropTypes.object,
  colorPrimary: PropTypes.string,
};

NewRestaurantForm.propTypes = {
  openForm: PropTypes.bool.isRequired,
  latLng: PropTypes.shape({
    lat: PropTypes.number,
    lng: PropTypes.number,
  }).isRequired,
  clearNewMarker: PropTypes.func.isRequired,
};

export default Radium(NewRestaurantForm);
