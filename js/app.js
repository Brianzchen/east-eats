class Main extends React.Component {
  render() {
    const sideBar = true;

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
          <MenuIcon usedTo={SideBar} />
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
    this.state = { isClosed: this.props.usedTo };
    this.handleClick = this.handleClick.bind(this);
  }

  render() {
    return (
      <div id="menuIcon" onClick={this.handleClick}></div>
    );
  }

  handleClick() {
    if (this.state.isClosed) {
      this.openSideBar();
    } else if (!this.state.isClosed) {
      this.closeSideBar();
    }
  }

  openSideBar() {
    if (document.getElementById("loadedSideBar") !== null) {
      document.getElementById("loadedSideBar").id = "openSideBar";
    } else {
      document.getElementById("closeSideBar").id = "openSideBar";
    }
  }

  closeSideBar() {
    document.getElementById("openSideBar").id = "closeSideBar";
  }
}

class SideBar extends React.Component {
  render() {
    const sideBar = false;

    return (
      <div id="loadedSideBar" className="sideBar">
        <MenuIcon usedTo={sideBar} />
      </div>
    );
  }
}

ReactDOM.render(
  <Main />,
  document.getElementById("container")
);
