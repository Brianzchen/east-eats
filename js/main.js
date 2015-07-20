var mapOptions = {
  center: model.initialMap.center,
  zoom: model.initialMap.zoom
};
var map = new google.maps.Map(document.getElementById('map-canvas'), mapOptions);
var markers = [];

var viewModel = function() {
  this.hideText = ko.observable("Hide markers");
  this.init = function() {
    var mapOptions = {
      center: model.initialMap.center,
      zoom: model.initialMap.zoom
    };
    var map = new google.maps.Map(document.getElementById('map-canvas'), mapOptions);
  };
  this.hide = function() {
    if (this.hideText() == "Hide markers") {
      this.hideText("Show makers");
      setAllMap(null);
    } else {
      this.hideText("Hide markers");
      setAllMap(map);
    }
  };
};

ko.applyBindings(viewModel);

// Sets the map on all markers in the array.
function setAllMap(map) {
  for (var i = 0; i < markers.length; i++) {
    markers[i].setMap(map);
  }
}

var initializeMap = function() {

      for (i = 0; i < model.markers.length; i++) {
        var temp = new google.maps.Marker({
          position: model.markers[i].position,
          title: model.markers[i].title,
          icon: model.markers[i].icon
        });
        markers.push(temp);
      }
      for (i = 0; i < markers.length; i++) {
        markers[i].setMap(map);
      }
    }

google.maps.event.addDomListener(window, 'load', initializeMap);
