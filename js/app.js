ReactDOM.render(
  <div id="map"></div>,
  document.getElementById('container')
);

var map;
window.initMap = function() {
  map = new google.maps.Map(document.getElementById('map'), {
    center: {lat: -34.397, lng: 150.644},
    zoom: 8
  });
}
