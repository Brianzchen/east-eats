// Coordinates of map markers and initial values

var model = {
  "initialMap":
  {
    "center": new google.maps.LatLng(-36.912771, 174.915997),
    "zoom": 14,
    "markerListZoom": 17
  },
  "yelpKeys": {
    "oauth_consumer_key": "YGvAOYaSuVPLNZQjlnsNEg",
    "oauth_consumer_secret": "h7Etv1nEP8c8ytZlSdtYPWftNe8",
    "oauth_token": "MbjXN_q5hbQEY8QZGg00qY3RWOq7fjaC",
    "oauth_token_secret": "739IDgl-a4PLdz5__md3-E028js"
  },
  "markers": [
    {
      "title": "Tanpopo Japanese Ramen",
      "cuisine": "Japanese",
      "description": "Authentic Japanese style ramen with many different flavours of soup bases.",
      "price": "$13",
      "address": "491 Pakuranga Rd",
      "suburb": "Highland Park",
      "image": "images/tanpopo.jpg",
      "imageAlt": "Tanpopo Highland Park front door",
      "position": new google.maps.LatLng(-36.899596,174.904265),
      "keyword": "food",
      "yelpQuery": "tanpopo-howick-auckland?cc=NZ&lang_filter=true"
    },
    {
      "title": "Coffee Club / Highland Park",
      "cuisine": "English breakfast",
      "description": "The place to be for luxury all day breakfast food.",
      "price": "$17",
      "address": "J/20-22 Dunrobin Place",
      "suburb": "Highland Park",
      "image": "images/coffee-club.jpg",
      "imageAlt": "Coffee club Highland Park interior",
      "position": new google.maps.LatLng(-36.899010, 174.903909),
      "keyword": "food"
    },
    {
      "title": "Sura Korean",
      "cuisine": "Korean",
      "description": "Good old Korean style stir fry and BBQ. Family owned restaurant for many years",
      "price": "$12",
      "address": "Shop 28, 503 Pakuranga Rd",
      "suburb": "Highland Park",
      "image": "images/sura.jpg",
      "imageAlt": "Sura delicious food",
      "position": new google.maps.LatLng(-36.899539, 174.907194),
      "keyword": "food"
    },
    {
      "title": "Nishiki",
      "cuisine": "Japanese",
      "description": "Amazing Japanese cuisine, featuring a real taste from Japan. A bit pricey but great for those special occasions.",
      "price": "$50",
      "address": "9 Torrens Rd",
      "suburb": "Burswood",
      "image": "images/nishiki.jpg",
      "imageAlt": "Nishiki Botany interior",
      "position": new google.maps.LatLng(-36.925612, 174.896527),
      "keyword": "food"
    },
    {
      "title": "Neighbours",
      "cuisine": "Taiwanese",
      "description": "Taiwanese restaurant with great food and good price.",
      "price": "$12",
      "address": "113 Meadowland Dr.",
      "suburb": "Somerville",
      "image": "images/nishiki.jpg",
      "imageAlt": "Nishiki Botany interior",
      "position": new google.maps.LatLng(-36.912338, 174.929834),
      "keyword": "food"
    },
    {
      "title": "Viet Hoa Vietnamese Restaurant",
      "cuisine": "Vietnamese",
      "description": "Amazing Vietnamese cuisine, featuring a real taste from Vietnam.",
      "price": "$12",
      "address": "168F Aviemore Dr",
      "suburb": "Highland Park",
      "image": "images/nishiki.jpg",
      "imageAlt": "Nishiki Botany interior",
      "position": new google.maps.LatLng(-36.912174, 174.908042),
      "keyword": "food"
    },
    {
      "title": "Genghis Khan",
      "cuisine": "Mongolian",
      "description": "Amazing Mongolian cuisine, featuring a real taste from Mongolia.",
      "price": "$50",
      "address": "317 Ti Rakau Drive",
      "suburb": "East Tamaki",
      "image": "images/nishiki.jpg",
      "imageAlt": "Nishiki Botany interior",
      "position": new google.maps.LatLng(-36.928009, 174.899297),
      "keyword": "food"
    },
    {
      "title": "Pita Pit / Highland Park",
      "cuisine": "American sandwich",
      "description": "Fresh and healthy ingredients wrapped in pita bread.",
      "price": "$10",
      "address": "491 Pakuranga Rd,",
      "suburb": "Highland Park",
      "image": "images/nishiki.jpg",
      "imageAlt": "Nishiki Botany interior",
      "position": new google.maps.LatLng(-36.898874, 174.904271),
      "keyword": "food"
    },
    {
      "title": "Marina Thai",
      "cuisine": "Thai",
      "description": "Amazing Thai cuisine, featuring a real taste from Thai.",
      "price": "$25",
      "address": "The Promenade Building Shop C5/1 Ara-Tai",
      "suburb": "Half Moon Bay",
      "image": "images/nishiki.jpg",
      "imageAlt": "Nishiki Botany interior",
      "position": new google.maps.LatLng(-36.880977, 174.899923),
      "keyword": "food"
    },
    {
      "title": "Bruce Lee Sushi / Highland Park",
      "cuisine": "Japanese",
      "description": "Amazing Japanese cuisine, featuring a real taste from Japan.",
      "price": "$14",
      "address": "Unit 4, 490 Pakuranga Road",
      "suburb": "Highland Park",
      "image": "images/nishiki.jpg",
      "imageAlt": "Nishiki Botany interior",
      "position": new google.maps.LatLng(-36.899180, 174.901123),
      "keyword": "food"
    },
    {
      "title": "Chongqing Cuisine",
      "cuisine": "Chinese",
      "description": "Spicy Chinese food from Chongqing province.",
      "price": "$12",
      "address": "Shop 7 Unit 6/119 Meadowland Drive",
      "suburb": "Somerville",
      "image": "images/tanpopo.jpg",
      "imageAlt": "Tanpopo Highland Park front door",
      "position": new google.maps.LatLng(-36.912620, 174.929364),
      "keyword": "food"
    },
    {
      "title": "Sri Mahkota",
      "cuisine": "Malaysian",
      "description": "Authentic Malaysian cuisine.",
      "price": "$25",
      "address": "22D Torrens Road",
      "suburb": "Burswood",
      "image": "images/tanpopo.jpg",
      "imageAlt": "Tanpopo Highland Park front door",
      "position": new google.maps.LatLng(-36.924927, 174.897249),
      "keyword": "food"
    },
    {
      "title": "Kyou Sushi",
      "cuisine": "Japanese",
      "description": "Amazing Japanese cuisine, featuring a real taste from Japan.",
      "price": "$10",
      "address": "12/29 Aviemore Drive",
      "suburb": "Highland Park",
      "image": "images/tanpopo.jpg",
      "imageAlt": "Tanpopo Highland Park front door",
      "position": new google.maps.LatLng(-36.902144, 174.904867),
      "keyword": "food"
    }
  ]
}
