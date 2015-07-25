// Coordinates of map markers and initial values

var model = {
  "initialMap":
  {
    "center": new google.maps.LatLng(-36.912771, 174.915997),
    "zoom": 14,
    "markerListZoom": 17
  },
  "markers": [
    {
      "title": "Tanpopo Ramen",
      "description": "Authentic Japanese style ramen with many different flavours of soup bases.",
      "price": "$13",
      "address": "491 Pakuranga Rd",
      "suburb": "Highland Park",
      // Image should be 100px vertical for consistency
      "image": "images/tanpopo.jpg",
      "imageAlt": "Tanpopo Highland Park front door",
      "position": new google.maps.LatLng(-36.899596,174.904265),
      "type": "food"
    },
    {
      "title": "Coffee Club",
      "description": "The place to be for luxury all day breakfast food.",
      "price": "$17",
      "address": "J/20-22 Dunrobin Place",
      "suburb": "Highland Park",
      // Image should be 100px vertical for consistency
      "image": "images/coffee-club.jpg",
      "imageAlt": "Coffee club Highland Park interior",
      "position": new google.maps.LatLng(-36.899010, 174.903909),
      "type": "food"
    },
    {
      "title": "Sura Korean",
      "description": "Good old Korean style stir fry and BBQ. Family owned restaurant for many years",
      "price": "$12",
      "address": "Shop 28, 503 Pakuranga Rd",
      "suburb": "Highland Park",
      // Image should be 100px vertical for consistency
      "image": "images/sura.jpg",
      "imageAlt": "Sura delicious food",
      "position": new google.maps.LatLng(-36.899539, 174.907194),
      "type": "food"
    },
    {
      "title": "Nishiki",
      "description": "Amazing Japanese cuisine, featuring a real taste from Japan. A bit pricey but great for those special occasions.",
      "price": "$50",
      "address": "9 Torrens Rd",
      "suburb": "Burswood",
      // Image should be 100px vertical for consistency
      "image": "images/nishiki.jpg",
      "imageAlt": "Nishiki Botany interior",
      "position": new google.maps.LatLng(-36.925612, 174.896527),
      "type": "food"
    },
    {
      "title": "Neighbours",
      "description": "Amazing Japanese cuisine, featuring a real taste from Japan. A bit pricey but great for those special occasions.",
      "price": "$50",
      "address": "9 Torrens Rd",
      "suburb": "Burswood",
      // Image should be 100px vertical for consistency
      "image": "images/nishiki.jpg",
      "imageAlt": "Nishiki Botany interior",
      "position": new google.maps.LatLng(-36.912338, 174.929834),
      "type": "food"
    },
    {
      "title": "Viet place avimore Drive",
      "description": "Amazing Japanese cuisine, featuring a real taste from Japan. A bit pricey but great for those special occasions.",
      "price": "$50",
      "address": "9 Torrens Rd",
      "suburb": "Burswood",
      // Image should be 100px vertical for consistency
      "image": "images/nishiki.jpg",
      "imageAlt": "Nishiki Botany interior",
      "position": new google.maps.LatLng(-36.912174, 174.908042),
      "type": "food"
    },
    {
      "title": "Ghenghis Khan",
      "description": "Amazing Japanese cuisine, featuring a real taste from Japan. A bit pricey but great for those special occasions.",
      "price": "$50",
      "address": "9 Torrens Rd",
      "suburb": "Burswood",
      // Image should be 100px vertical for consistency
      "image": "images/nishiki.jpg",
      "imageAlt": "Nishiki Botany interior",
      "position": new google.maps.LatLng(-36.928009, 174.899297),
      "type": "food"
    },
    {
      "title": "Llyod Elsmore Swimming Pool",
      "description": "Amazing Japanese cuisine, featuring a real taste from Japan. A bit pricey but great for those special occasions.",
      "price": "$50",
      "address": "9 Torrens Rd",
      "suburb": "Burswood",
      // Image should be 100px vertical for consistency
      "image": "images/nishiki.jpg",
      "imageAlt": "Nishiki Botany interior",
      "position": new google.maps.LatLng(-36.903217, 174.902259),
      "type": "leisure,fun"
    },
    {
      "title": "Pita Pit Highland Park",
      "description": "Amazing Japanese cuisine, featuring a real taste from Japan. A bit pricey but great for those special occasions.",
      "price": "$50",
      "address": "9 Torrens Rd",
      "suburb": "Burswood",
      // Image should be 100px vertical for consistency
      "image": "images/nishiki.jpg",
      "imageAlt": "Nishiki Botany interior",
      "position": new google.maps.LatLng(-36.898874, 174.904271),
      "type": "food"
    },
    {
      "title": "Marina Thai",
      "description": "Amazing Japanese cuisine, featuring a real taste from Japan. A bit pricey but great for those special occasions.",
      "price": "$50",
      "address": "9 Torrens Rd",
      "suburb": "Burswood",
      // Image should be 100px vertical for consistency
      "image": "images/nishiki.jpg",
      "imageAlt": "Nishiki Botany interior",
      "position": new google.maps.LatLng(-36.880977, 174.899923),
      "type": "food"
    },
    {
      "title": "Bruce Lee sushi Highland Park",
      "description": "Amazing Japanese cuisine, featuring a real taste from Japan. A bit pricey but great for those special occasions.",
      "price": "$50",
      "address": "9 Torrens Rd",
      "suburb": "Burswood",
      // Image should be 100px vertical for consistency
      "image": "images/nishiki.jpg",
      "imageAlt": "Nishiki Botany interior",
      "position": new google.maps.LatLng(-36.899180, 174.901123),
      "type": "food"
    }
  ]
}
