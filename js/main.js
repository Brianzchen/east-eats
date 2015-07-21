var viewModel = function() {
  var self = this;
  self.myMap = ko.observable({
    center: ko.observable(model.initialMap.center),
    zoom: ko.observable(model.initialMap.zoom)});
  self.search = ko.observable("");
  self.searchResult = function() {
    console.log(self.search());
  }
  self.hideText = ko.observable("Hide markers");
  self.hide = function() {
    if (this.hideText() == "Hide markers") {
      this.hideText("Show makers");
      setAllMap(null);
    } else {
      this.hideText("Hide markers");
      setAllMap(self.myMap().googleMap);
    }
  };
};

// Creates the google map and initializes all the markers
ko.bindingHandlers.map = {
  init: function (element, valueAccessor, allBindingsAccessor, viewModel) {
    var mapObj = ko.utils.unwrapObservable(valueAccessor());

    // Builds the map defaults
    var mapOptions = {
      center: ko.utils.unwrapObservable(mapObj.center),
      zoom: ko.utils.unwrapObservable(mapObj.zoom)
    };

    // Initiates the map
    mapObj.googleMap = new google.maps.Map(element, mapOptions);

    // Builds info window for marker click events
    mapObj.infoWindow = new google.maps.InfoWindow({
      content:  ""
    });

    // Creates all the map markers
    mapObj.marker = [];
    for (i = 0; i < model.markers.length; i++) {
      var temp = new google.maps.Marker({
        position: model.markers[i].position,
        title: model.markers[i].title,
        description: model.markers[i].description,
        address: model.markers[i].address
      });
      mapObj.marker.push(temp);
    }
    for (i = 0; i < mapObj.marker.length; i++) {
      var temp = mapObj.marker[i];
      mapObj.marker[i].setMap(mapObj.googleMap);
      google.maps.event.addListener(mapObj.marker[i], 'click', (function(mark) {
        return function() {
          mapObj.infoWindow.setContent(buildInfoWindow(mapObj.marker[mark].title,
            mapObj.marker[mark].description,
            mapObj.marker[mark].address));
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

function buildInfoWindow(title, para1, para2) {
  return '<div id="infoContent">' +
  '<h2 id="firstHeading" class="firstHeading">' +
  title +
  '</h2>' +
  '<div id="infoBodyContent">' +
  '<p>' +
  para1 +
  '</p>'+
  '<p>'+
  para2 +
  '</p>'+
  '</div>'+
  '</div>'
}
