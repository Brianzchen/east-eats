class Main extends React.Component {
  render() {
    return (
      <div id="main" className="container-fluid">
        <div id="title" className="col-xl-1"></div>
        <div id="titleText" className="col-xl-1">
          <h1 className="text-center">East Eats</h1>
        </div>
        <div id="toolBar" className="col-xl-1">
          <div id="searchBox" className="form-group">
            <input type="text" className="form-control" id="searchInput" placeholder="Search" />
          </div>
          <MenuIcon usedTo="open" />
        </div>
        <div id="map"></div>
        <SideBar />
      </div>
    );
  }
}

class MenuIcon extends React.Component {

  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  render() {
    return (
      <div id="menuIcon" onClick={this.handleClick}></div>
    );
  }

  handleClick() {
    if (this.props.usedTo == "open") {
      openSideBar();
    } else if (this.props.usedTo == "close") {
      closeSideBar();
    }
  }
}

class SideBar extends React.Component {
  render() {
    return (
      <div id="openSideBar" className="sideBar">
        <MenuIcon usedTo="close" />
      </div>
    );
  }
}

ReactDOM.render(
  <Main />,
  document.getElementById("container")
);

function openSideBar() {
  document.getElementById("closeSideBar").id = "openSideBar";
}

function closeSideBar() {
  document.getElementById("openSideBar").id = "closeSideBar";
}
