var map;
window.initMap = function() {
  map = new google.maps.Map(document.getElementById('map'), {
    center: {lat: -36.914086, lng: 174.905668},
    zoom: 14
  });
}

class Main extends React.Component {
  render() {
    return (
      <div id="main">
        <h1 id="title">East Eats</h1>
        <div id="map"></div>
      </div>
    );
  }
}

ReactDOM.render(
  <Main />,
  document.getElementById("container")
);
