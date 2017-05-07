import React from 'react';
import PropTypes from 'prop-types';
import Radium from 'radium';

class AddRestaurantButton extends React.Component {
  render() {
    const styles = {
      container: {
        position: `fixed`,
        left: `calc(50% - 32px)`,
        bottom: `16px`,
        height: `64px`,
        width: `64px`,
        borderRadius: `32px`,
        backgroundColor: this.context.colorPrimary,
        cursor: `pointer`,
        boxShadow: `0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)`,
        WebkitTapHighlightColor: `rgba(255, 255, 255, 0)`,
      },
      plus: {
        position: `relative`,
        top: `10px`,
        left: `13px`,
        height: `48px`,
        width: `48px`,
        color: `white`,
        fontSize: `48px`,
      },
    };

    return (
      <div style={styles.container} onClick={this.openRestaurantModal}>
        <i className={`fa fa-plus`} style={styles.plus} aria-hidden />
      </div>
    );
  }

  constructor(props) {
    super(props);

    this.state = {
      openRestaurantModal: false,
    };
  }

  openRestaurantModal = () => {
    this.setState({
      openRestaurantModal: true,
    });
  }
}

AddRestaurantButton.contextTypes = {
  colorPrimary: PropTypes.string,
  colorSecondary: PropTypes.string,
};

export default Radium(AddRestaurantButton);
