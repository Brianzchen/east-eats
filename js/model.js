// Coordinates of map markers, initial values and Yelp keys for GET requests
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
      "description": "Authentic Japanese style ramen with many different flavours of soup bases.",
      "price": "$13",
      "address": "491 Pakuranga Rd",
      "suburb": "Highland Park",
      "position": new google.maps.LatLng(-36.899596,174.904265),
      "keyword": "food, Japanese",
      "yelpQuery": "tanpopo-howick-auckland"
    },
    {
      "title": "Coffee Club / Highland Park",
      "description": "The place to be for luxury all day breakfast food.",
      "price": "$17",
      "address": "J/20-22 Dunrobin Place",
      "suburb": "Highland Park",
      "position": new google.maps.LatLng(-36.899010, 174.903909),
      "keyword": "food, English breakfast, white",
      "yelpQuery": "no-yelp"
    },
    {
      "title": "Sura Korean",
      "description": "Good old Korean style stir fry and BBQ. Family owned restaurant for many years",
      "price": "$12",
      "address": "Shop 28, 503 Pakuranga Rd",
      "suburb": "Highland Park",
      "position": new google.maps.LatLng(-36.899539, 174.907194),
      "keyword": "food, Korean",
      "yelpQuery": "no-yelp"
    },
    {
      "title": "Nishiki",
      "description": "Amazing Japanese cuisine, featuring a real taste from Japan. A bit pricey but great for those special occasions.",
      "price": "$50",
      "address": "9 Torrens Rd",
      "suburb": "Burswood",
      "position": new google.maps.LatLng(-36.925612, 174.896527),
      "keyword": "food, Japanese",
      "yelpQuery": "nishiki-japanese-restaurant-botany-downs"
    },
    {
      "title": "Neighbours",
      "description": "Taiwanese restaurant with great food and good price.",
      "price": "$12",
      "address": "113 Meadowland Dr.",
      "suburb": "Somerville",
      "position": new google.maps.LatLng(-36.912338, 174.929834),
      "keyword": "food, Taiwanese, noodles",
      "yelpQuery": "no-yelp"
    },
    {
      "title": "Viet Hoa Vietnamese Restaurant",
      "description": "Good casual Vietnamese dining. Prices are fair and food is fast",
      "price": "$12",
      "address": "168F Aviemore Dr",
      "suburb": "Highland Park",
      "position": new google.maps.LatLng(-36.912174, 174.908042),
      "keyword": "food, Vietnamese",
      "yelpQuery": "viet-hoa-auckland-2"
    },
    {
      "title": "Genghis Khan",
      "description": "All you can eat Mongolian BBQ stirfry. Just pick the meats you want, the veggies you like and the chef with fry it up right in front of you. Great fun with friends and family.",
      "price": "$50",
      "address": "317 Ti Rakau Drive",
      "suburb": "East Tamaki",
      "position": new google.maps.LatLng(-36.928009, 174.899297),
      "keyword": "food, Mongolian, buffet",
      "yelpQuery": "genghis-khan-auckland-2"
    },
    {
      "title": "Pita Pit / Highland Park",
      "description": "Fresh and healthy ingredients wrapped in pita bread.",
      "price": "$10",
      "address": "491 Pakuranga Rd,",
      "suburb": "Highland Park",
      "position": new google.maps.LatLng(-36.898874, 174.904271),
      "keyword": "food, American sandwich",
      "yelpQuery": "no-yelp"
    },
    {
      "title": "Marina Thai",
      "description": "Traditional Thai cuisine with lots of flavours to choose from and non that you'll be disapointed with.",
      "price": "$25",
      "address": "The Promenade Building Shop C5/1 Ara-Tai",
      "suburb": "Half Moon Bay",
      "position": new google.maps.LatLng(-36.880977, 174.899923),
      "keyword": "food, Thai",
      "yelpQuery": "marina-thai-auckland"
    },
    {
      "title": "Bruce Lee Sushi / Highland Park",
      "description": "Modern sushi that are sure to send your tastebuds flying.",
      "price": "$14",
      "address": "Unit 4, 490 Pakuranga Road",
      "suburb": "Highland Park",
      "position": new google.maps.LatLng(-36.899180, 174.901123),
      "keyword": "food, Japanese",
      "yelpQuery": "no-yelp"
    },
    {
      "title": "Chongqing Cuisine",
      "description": "Spicy Chinese food from Chongqing province. Expect to sweat",
      "price": "$12",
      "address": "Shop 7 Unit 6/119 Meadowland Drive",
      "suburb": "Somerville",
      "position": new google.maps.LatLng(-36.912620, 174.929364),
      "keyword": "food, Chinese",
      "yelpQuery": "no-yelp"
    },
    {
      "title": "Sri Mahkota",
      "description": "A small little Malaysian restaurant with big flavours.",
      "price": "$13",
      "address": "22D Torrens Road",
      "suburb": "Burswood",
      "position": new google.maps.LatLng(-36.924927, 174.897249),
      "keyword": "food, Malaysian",
      "yelpQuery": "sri-mahkota-auckland-2"
    },
    {
      "title": "Kyou Sushi",
      "description": "A small Japanese style shop. Has a wide slection of fresh sushi don, or lunch boxes.",
      "price": "$10",
      "address": "12/29 Aviemore Drive",
      "suburb": "Highland Park",
      "position": new google.maps.LatLng(-36.902144, 174.904867),
      "keyword": "food, Japanese",
      "yelpQuery": "kyou-sushi-auckland"
    },
    {
      "title": "Sa Rang Bang Korean Restaurant",
      "description": "Small rustic restaurant lots of unique flavours of Korea. Has korean steamboats to share",
      "price": "$16",
      "address": "1/17 Aviemore Drive",
      "suburb": "Highland Park",
      "position": new google.maps.LatLng(-36.900900, 174.905152),
      "keyword": "food, Korean",
      "yelpQuery": "sa-rang-bang-korean-restaurant-auckland"
    }
  ]
};
