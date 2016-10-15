// Initialize Firebase
var config = {
  apiKey: "AIzaSyDe-N6RY8AvlGr3r76v-2hLVXdw3bi6oHQ",
  authDomain: "east-eats.firebaseapp.com",
  databaseURL: "https://east-eats.firebaseio.com",
  storageBucket: ""
};
firebase.initializeApp(config);

var database = firebase.database().ref("restaurants");

var restaurants = [];

database.on("child_added", function(data) {
  restaurants.push(data.val());
  addMarkers(restaurants);
  database.off();
});

initMap();
// writeNewRestaurant("Gouemon", -36.880788, 174.899305, "Japanese", 30, "View");

var map;
var infoWindow;

/* Initialize the map */
function initMap() {
  map = new google.maps.Map(document.getElementById('map'), {
    center: {lat: -36.914086, lng: 174.905668},
    zoom: 14
  });
}

/* Add a marker */
function addMarkers(restaurants) {
  for (var i = 0, len = restaurants.length; i < len; i++) {
    var position = {"lat": restaurants[i].latitude, "lng": restaurants[i].longitude}
    var marker = new google.maps.Marker({
      position: position,
      map: map,
      name: restaurants[i].name
    });

    marker.addListener("click", function() {
      if (infoWindow) {
        infoWindow.close();
      }

      infoWindow = getInfoWindow(this);
      infoWindow.open(map, this);
    })
  }
}

/* Add an info window to a marker */
function getInfoWindow(marker) {
  var content = marker.name;
  return new google.maps.InfoWindow({
    content: content
  });
}

/* Format to write new restaurants to the database */
function writeNewRestaurant(name, lat, lng, cuisine, price, keywords) {
  database.push().set({
    name: name,
    latitude: lat,
    longitude: lng,
    cuisine: cuisine,
    pricePerPerson: price,
    keywords: keywords
  });
}
