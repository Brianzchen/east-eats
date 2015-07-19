var viewModel = function() {

};

ko.applyBindings(viewModel);

var initializeMap = function() {
      var mapOptions = {
        center: { lat: -36.897775, lng: 174.906409},
        zoom: 15
      };
      var map = new google.maps.Map(document.getElementById('map-canvas'), mapOptions);
    }

google.maps.event.addDomListener(window, 'load', initializeMap);
