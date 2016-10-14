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

database.once('value').then(function(snapshot) {
  console.log(snapshot.name);
});

var map;
window.initMap = function() {
  map = new google.maps.Map(document.getElementById('map'), {
    center: {lat: -36.914086, lng: 174.905668},
    zoom: 14
  });

  for (var i = 0, len = restaurants.length; i < len; i++) {
    var position = {lat: restaurants[i].latitude, long: restaurants[i].longitude}
    var marker = new google.maps.Marker({
      position: position,
      map: map
    });
  }
}

// writeNewRestaurant("Gouemon", -36.880788, 174.899305, "Japanese", 30, "View");

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
