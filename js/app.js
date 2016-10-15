class Main extends React.Component {
  render() {
    return (
      <div id="main" className="container-fluid">
        <div id="title" className="col-xl-1">
          <h1 className="text-center">East Eats</h1>
        </div>
        <div id="toolBar" className="col-xl-1">
          <div id="searchBox" className="form-group">
            <input type="text" className="form-control" id="searchInput" placeholder="Search" />
          </div>
          <div id="menuIcon"></div>
        </div>
        <div id="map"></div>
      </div>
    );
  }
}

class InfoWindow extends React.Component {
  render() {
    return (
      <h1>Hello</h1>
    );
  }
}

ReactDOM.render(
  <Main />,
  document.getElementById("container")
);
