var viewModel = function() {
  var self = this;
  self.myMap = ko.observable({
    center: ko.observable(model.initialMap.center),
    zoom: ko.observable(model.initialMap.zoom)});
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
      content:  "Temp value"
    });

    // Creates all the map markers
    mapObj.marker = [];
    for (i = 0; i < model.markers.length; i++) {
      var temp = new google.maps.Marker({
        position: model.markers[i].position,
        title: model.markers[i].title
      });
      mapObj.marker.push(temp);
    }
    for (i = 0; i < mapObj.marker.length; i++) {
      var temp = mapObj.marker[i];
      mapObj.marker[i].setMap(mapObj.googleMap);
      google.maps.event.addListener(mapObj.marker[i], 'click', (function(mark) {
        return function() {
          mapObj.infoWindow.open(mapObj.googleMap, mark);
        };
      })(temp));
    }
  }
};

ko.applyBindings(viewModel);

// Sets the map on all markers in the array.
function setAllMap(map) {
  for (var i = 0; i < myMap().marker.length; i++) {
    myMap().marker[i].setMap(map);
  }
}
