class Main extends React.Component {
  render() {
    return (
      <div id="main" className="container-fluid">
        <div id="title" className="col-xl-1">
          <h1 className="text-center">East Eats</h1>
        </div>
        <div id="toolBar">
          <div id="searchBox" className="form-group">
            <input type="text" className="form-control" id="searchInput" placeholder="Search" />
          </div>
          <div id="options"></div>
        </div>
        <div id="map"></div>
      </div>
    );
  }
}

ReactDOM.render(
  <Main />,
  document.getElementById("container")
);

var map;
window.initMap = function() {
  map = new google.maps.Map(document.getElementById('map'), {
    center: {lat: -36.914086, lng: 174.905668},
    zoom: 14
  });
}
