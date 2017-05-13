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
        marginBottom: `88px`,
        maxheight: `calc(100% - 64px)`,
        width: `${width}px`,
        backgroundColor: `white`,
        opacity: 0,
        transition: `all 1s`,
      },
      containerShow: {
        opacity: 1,
      },
      submit: {
        display: `block`,
        color: `white`,
        backgroundColor: this.context.colorPrimary,
        border: `none`,
        outline: `none`,
      },
    };

    const containerStyle = [styles.container, this.props.openForm && styles.containerShow];

    return (
      <form style={containerStyle} onSubmit={this.onSubmit}>
        <label htmlFor={`restaurantName`}>
          Name
        </label>
        <input
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
};

export default Radium(NewRestaurantForm);
