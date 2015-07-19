var viewModel = function() {
  var init = function() {
    var mapOptions = {
      center: model.initialMap.center,
      zoom: model.initialMap.zoom
    };
    var map = new google.maps.Map(document.getElementById('map-canvas'), mapOptions);
  }
};

ko.applyBindings(viewModel);

var initializeMap = function() {
      var mapOptions = {
        center: model.initialMap.center,
        zoom: model.initialMap.zoom
      };
      var map = new google.maps.Map(document.getElementById('map-canvas'), mapOptions);

      var marker = new google.maps.Marker({
        position: model.markers[0].position,
        title: model.markers[0].title
      });

      marker.setMap(map);
    }

google.maps.event.addDomListener(window, 'load', initializeMap);
