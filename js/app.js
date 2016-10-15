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
          <MenuIcon />
        </div>
        <div id="map"></div>
      </div>
    );
  }
}

class MenuIcon extends React.Component {
  render() {
    return (
      <div id="menuIcon" onClick={this.handleClick}></div>
    );
  }

  handleClick() {
    openSideBar();
  }
}

ReactDOM.render(
  <Main />,
  document.getElementById("container")
);

function openSideBar() {
  console.log("Side bar is supposed to open");
}
