var viewModel = function() {
  var self = this;
  self.myMap = ko.observable({visibleMarkers: ko.observableArray([])});
  self.search = ko.observable("");
  self.searchResult = function() {
    console.log(self.search());
  }
  self.listButton = ko.observable({
    open: false
  });
  self.hideText = ko.observable("Hide markers");

  // Events that trigger when user presses the markers button
  self.hide = function() {
    if (this.hideText() == "Hide markers") {
      this.hideText("Show makers");
      setAllMap(null);
    } else {
      this.hideText("Hide markers");
      setAllMap(self.myMap().googleMap);
    }
  };

  // Displays a list view of all current markers on the map
  self.listFunction = function() {
    if (self.listButton().open) {
      self.listButton().open = false;
      document.getElementById("map-canvas").style.width = "100%";
      document.getElementById("markerPanel").style.display = "none";
    } else {
      self.listButton().open = true;
      if ($(window).width() < 500) {
        document.getElementById("map-canvas").style.width = "20%";
      } else {
        document.getElementById("map-canvas").style.width = "80%";
      }
      document.getElementById("markerPanel").style.display = "inline";
    }
  }
};

// Creates the google map and initializes all the markers
ko.bindingHandlers.map = {
  init: function (element, valueAccessor, allBindingsAccessor, viewModel) {
    var mapObj = ko.utils.unwrapObservable(valueAccessor());

    // Builds the map defaults
    var mapOptions = {
      center: model.initialMap.center,
      zoom: model.initialMap.zoom
    };

    // Initiates the map
    mapObj.googleMap = new google.maps.Map(element, mapOptions);

    // Builds info window for marker click events
    mapObj.infoWindow = new google.maps.InfoWindow({
      content:  "",
      maxWidth: 400
    });

    // Creates all the map markers
    mapObj.marker = [];
    for (i = 0; i < model.markers.length; i++) {
      var temp = new google.maps.Marker({
        position: model.markers[i].position,
        title: model.markers[i].title,
        description: model.markers[i].description,
        price: model.markers[i].price,
        address: model.markers[i].address,
        suburb: model.markers[i].suburb,
        image: model.markers[i].image,
        imageAlt: model.markers[i].imageAlt,
      });
      mapObj.marker.push(temp);
      mapObj.visibleMarkers.push(temp);
    }

    for (i = 0; i < mapObj.marker.length; i++) {
      mapObj.visibleMarkers().push(mapObj.marker[i]);
    }
    console.log(mapObj.visibleMarkers());

    // Enclosed fucntion that returns the info windows when user clicks
    // on one of the markers
    for (i = 0; i < mapObj.marker.length; i++) {
      var temp = mapObj.marker[i];
      mapObj.marker[i].setMap(mapObj.googleMap);
      google.maps.event.addListener(mapObj.marker[i], 'click', (function(mark) {
        return function() {
          mapObj.infoWindow.setContent(buildInfoWindow(mapObj.marker[mark].title,
            mapObj.marker[mark].image,
            mapObj.marker[mark].imageAlt,
            mapObj.marker[mark].price,
            mapObj.marker[mark].description,
            mapObj.marker[mark].address,
            mapObj.marker[mark].suburb));
          mapObj.infoWindow.open(mapObj.googleMap, mapObj.marker[mark]);
        };
      })(i));
    }
  }
};

// registers when the enter key is pressed to request a response
ko.bindingHandlers.returnAction = {
  init: function(element, valueAccessor, allBindingsAccessor, viewModel) {
    var value = ko.utils.unwrapObservable(valueAccessor());

    $(element).keydown(function(e) {
      if (e.which === 13) {
        value(viewModel);
      }
    });
  }
};

ko.applyBindings(viewModel);

// Sets the map on all markers in the array.
function setAllMap(map) {
  for (var i = 0; i < myMap().marker.length; i++) {
    myMap().marker[i].setMap(map);
  }
}

// Helpful content creator for the Google maps info window
function buildInfoWindow(title, image, imageAlt, price, para1, address, suburb) {
  return '<div id="infoContent">' +
  '<h2 class="infoHeading">' +
  title +
  '</h2>' +
  '<img class="infoImage floatRight" src="' +
  image +
  '" alt="' +
  imageAlt +
  '">' +
  '<div id="infoBodyContent">' +
  '<p>Approximate price range per person: <i>' +
  price +
  '</i></p>'+
  '<p>'+
  para1 +
  '</p>'+
  '<p>'+
  address +
  '<br>' +
  suburb +
  '</p>'+
  '</div>'+
  '</div>'
}
