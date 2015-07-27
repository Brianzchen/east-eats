// Coordinates of map markers and initial values

var model = {
  "initialMap":
  {
    "center": new google.maps.LatLng(-36.912771, 174.915997),
    "zoom": 14,
    "markerListZoom": 17
  },
  "yelpKeys":
  {
    "consumerKey": "YGvAOYaSuVPLNZQjlnsNEg",
    "consumerSecret": "h7Etv1nEP8c8ytZlSdtYPWftNe8",
    "accessToken": "MbjXN_q5hbQEY8QZGg00qY3RWOq7fjaC",
    "accessTokenSecret": "739IDgl-a4PLdz5__md3-E028js",
    "signatureMethod": "HMAC-SHA1"
  },
  "markers": [
    {
      "title": "Tanpopo Japanese Ramen",
      "cuisine": "Japanese",
      "description": "Authentic Japanese style ramen with many different flavours of soup bases.",
      "price": "$13",
      "address": "491 Pakuranga Rd",
      "suburb": "Highland Park",
      "position": new google.maps.LatLng(-36.899596,174.904265),
      "keyword": "food",
      "yelpQuery": "tanpopo-howick-auckland"
    },
    {
      "title": "Coffee Club / Highland Park",
      "cuisine": "English breakfast",
      "description": "The place to be for luxury all day breakfast food.",
      "price": "$17",
      "address": "J/20-22 Dunrobin Place",
      "suburb": "Highland Park",
      "position": new google.maps.LatLng(-36.899010, 174.903909),
      "keyword": "food",
      "yelpQuery": "no-yelp"
    },
    {
      "title": "Sura Korean",
      "cuisine": "Korean",
      "description": "Good old Korean style stir fry and BBQ. Family owned restaurant for many years",
      "price": "$12",
      "address": "Shop 28, 503 Pakuranga Rd",
      "suburb": "Highland Park",
      "position": new google.maps.LatLng(-36.899539, 174.907194),
      "keyword": "food",
      "yelpQuery": "no-yelp"
    },
    {
      "title": "Nishiki",
      "cuisine": "Japanese",
      "description": "Amazing Japanese cuisine, featuring a real taste from Japan. A bit pricey but great for those special occasions.",
      "price": "$50",
      "address": "9 Torrens Rd",
      "suburb": "Burswood",
      "position": new google.maps.LatLng(-36.925612, 174.896527),
      "keyword": "food",
      "yelpQuery": "nishiki-japanese-restaurant-botany-downs"
    },
    {
      "title": "Neighbours",
      "cuisine": "Taiwanese",
      "description": "Taiwanese restaurant with great food and good price.",
      "price": "$12",
      "address": "113 Meadowland Dr.",
      "suburb": "Somerville",
      "position": new google.maps.LatLng(-36.912338, 174.929834),
      "keyword": "food",
      "yelpQuery": "no-yelp"
    },
    {
      "title": "Viet Hoa Vietnamese Restaurant",
      "cuisine": "Vietnamese",
      "description": "Amazing Vietnamese cuisine, featuring a real taste from Vietnam.",
      "price": "$12",
      "address": "168F Aviemore Dr",
      "suburb": "Highland Park",
      "position": new google.maps.LatLng(-36.912174, 174.908042),
      "keyword": "food",
      "yelpQuery": "viet-hoa-auckland-2"
    },
    {
      "title": "Genghis Khan",
      "cuisine": "Mongolian",
      "description": "Amazing Mongolian cuisine, featuring a real taste from Mongolia.",
      "price": "$50",
      "address": "317 Ti Rakau Drive",
      "suburb": "East Tamaki",
      "position": new google.maps.LatLng(-36.928009, 174.899297),
      "keyword": "food",
      "yelpQuery": "genghis-khan-auckland-2"
    },
    {
      "title": "Pita Pit / Highland Park",
      "cuisine": "American sandwich",
      "description": "Fresh and healthy ingredients wrapped in pita bread.",
      "price": "$10",
      "address": "491 Pakuranga Rd,",
      "suburb": "Highland Park",
      "position": new google.maps.LatLng(-36.898874, 174.904271),
      "keyword": "food",
      "yelpQuery": "no-yelp"
    },
    {
      "title": "Marina Thai",
      "cuisine": "Thai",
      "description": "Amazing Thai cuisine, featuring a real taste from Thai.",
      "price": "$25",
      "address": "The Promenade Building Shop C5/1 Ara-Tai",
      "suburb": "Half Moon Bay",
      "position": new google.maps.LatLng(-36.880977, 174.899923),
      "keyword": "food",
      "yelpQuery": "marina-thai-auckland"
    },
    {
      "title": "Bruce Lee Sushi / Highland Park",
      "cuisine": "Japanese",
      "description": "Amazing Japanese cuisine, featuring a real taste from Japan.",
      "price": "$14",
      "address": "Unit 4, 490 Pakuranga Road",
      "suburb": "Highland Park",
      "position": new google.maps.LatLng(-36.899180, 174.901123),
      "keyword": "food",
      "yelpQuery": "no-yelp"
    },
    {
      "title": "Chongqing Cuisine",
      "cuisine": "Chinese",
      "description": "Spicy Chinese food from Chongqing province.",
      "price": "$12",
      "address": "Shop 7 Unit 6/119 Meadowland Drive",
      "suburb": "Somerville",
      "position": new google.maps.LatLng(-36.912620, 174.929364),
      "keyword": "food",
      "yelpQuery": "no-yelp"
    },
    {
      "title": "Sri Mahkota",
      "cuisine": "Malaysian",
      "description": "Authentic Malaysian cuisine.",
      "price": "$25",
      "address": "22D Torrens Road",
      "suburb": "Burswood",
      "position": new google.maps.LatLng(-36.924927, 174.897249),
      "keyword": "food",
      "yelpQuery": "sri-mahkota-auckland-2"
    },
    {
      "title": "Kyou Sushi",
      "cuisine": "Japanese",
      "description": "Amazing Japanese cuisine, featuring a real taste from Japan.",
      "price": "$10",
      "address": "12/29 Aviemore Drive",
      "suburb": "Highland Park",
      "position": new google.maps.LatLng(-36.902144, 174.904867),
      "keyword": "food",
      "yelpQuery": "kyou-sushi-auckland"
    },
    {
      "title": "Sa Rang Bang Korean Restaurant",
      "cuisine": "Korean",
      "description": "Small rustic restaurant lots of unique flavours of Korea. Has korean steamboats to share",
      "price": "$16",
      "address": "1/17 Aviemore Drive",
      "suburb": "Highland Park",
      "position": new google.maps.LatLng(-36.900900, 174.905152),
      "keyword": "food",
      "yelpQuery": "sa-rang-bang-korean-restaurant-auckland"
    }
  ]
}
