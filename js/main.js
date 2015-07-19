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
      var markers = [];
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
      /*var marker = new google.maps.Marker({
        position: model.markers[0].position,
        title: model.markers[0].title,
        icon: model.markers[0].icon
      });

      marker.setMap(map);*/
    }

google.maps.event.addDomListener(window, 'load', initializeMap);
