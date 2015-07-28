var viewModel = function() {
  var self = this;
  self.myMap = ko.observable({visibleMarkersList: ko.observableArray([])});
  self.search = ko.observable("");
  self.listButton = ko.observable({
    open: false
  });
  self.hideText = ko.observable("Hide Markers");

  // Shows only the markers that are related to the search result
  self.searchResult = function() {
    console.log("hi");
    for (i = 0; i < model.markers.length; i++) {
      // Loops through all the terms in markers to check if a word is mentioned
      if (model.markers[i].title.toLowerCase().includes(self.search().toLowerCase()) ||
      model.markers[i].description.toLowerCase().includes(self.search().toLowerCase()) ||
      model.markers[i].address.toLowerCase().includes(self.search().toLowerCase()) ||
      model.markers[i].suburb.toLowerCase().includes(self.search().toLowerCase()) ||
      model.markers[i].keyword.toLowerCase().includes(self.search().toLowerCase())) {
        myMap().marker[i].setMap(myMap().googleMap);
        self.myMap().visibleMarkersList()[i].visible(true);
      } else {
        myMap().marker[i].setMap(null);
        self.myMap().visibleMarkersList()[i].visible(false);
      }
    }
  }

  // Hides or shows all markers when using presses the hide/show marker button
  self.hide = function(data) {
    if (self.hideText() == "Hide Markers") {
      self.hideText("Show Makers");
      setAllMap(null);
      for (i = 0; i < model.markers.length; i++) {
        self.myMap().visibleMarkersList()[i].visible(false);
      }
    } else {
      self.hideText("Hide Markers");
      searchResult();
    }
  };

  // Displays a list view of all current markers on the map
  self.listFunction = function() {
    if (self.listButton().open) {
      self.listButton().open = false;
      document.getElementById("map-canvas").style.width = "100%";
      document.getElementById("markerPanel").style.display = "none";
    } else {
      self.listButton().open = true;
      if ($(window).width() < 500) {
        document.getElementById("map-canvas").style.width = "20%";
      } else {
        document.getElementById("map-canvas").style.width = "80%";
      }
      document.getElementById("markerPanel").style.display = "inline";
    }
  }
};

// Creates the google map and initializes all the markers and info window
ko.bindingHandlers.map = {
  init: function (element, valueAccessor, allBindingsAccessor, viewModel) {
    var mapObj = ko.utils.unwrapObservable(valueAccessor());

    // Builds the map defaults
    var mapOptions = {
      center: model.initialMap.center,
      zoom: model.initialMap.zoom
    };

    // Initiates the map
    mapObj.googleMap = new google.maps.Map(element, mapOptions);

    // Builds info window for marker click events
    mapObj.infoWindow = new google.maps.InfoWindow({
      content:  "",
      maxWidth: 400
    });

    // Creates all the map markers
    mapObj.marker = [];
    for (i = 0; i < model.markers.length; i++) {
      var temp = new google.maps.Marker({
        position: model.markers[i].position,
        title: model.markers[i].title,
        description: model.markers[i].description,
        price: model.markers[i].price,
        address: model.markers[i].address,
        suburb: model.markers[i].suburb,
        image: model.markers[i].image,
        imageAlt: model.markers[i].imageAlt
      });
      mapObj.marker.push(temp);

      // Creates a observable array to hold the list of
      // markers to know when to show and when not to show.
      mapObj.visibleMarkersList.push( {
        visible: ko.observable(true),
        position: model.markers[i].position,
        title: model.markers[i].title,
        findLocation: function() {
          // Close the marker panel when user presses on a location in mobile
          // screen size
          if (window.innerWidth < 500) {
            self.listFunction();
          }
          mapObj.googleMap.setCenter(this.position);
          mapObj.googleMap.setZoom(model.initialMap.markerListZoom);
        }
      });
    }

    // Enclosed fucntion that returns the info windows when user clicks
    // on one of the markers
    for (i = 0; i < mapObj.marker.length; i++) {
      var temp = mapObj.marker[i];
      mapObj.marker[i].setMap(mapObj.googleMap);
      google.maps.event.addListener(mapObj.marker[i], 'click', (function(mark) {
        return function() {
          var accessor = {
              consumerSecret : model.yelpKeys.consumerSecret,
              tokenSecret : model.yelpKeys.accessTokenSecret
          };

          // Setting the parameters to send to Yelp when user clicks on a marker
          parameters = [];
          parameters.push(['callback', 'cb']);
          parameters.push(['oauth_consumer_key', model.yelpKeys.consumerKey]);
          parameters.push(['oauth_consumer_secret', model.yelpKeys.consumerSecret]);
          parameters.push(['oauth_token', model.yelpKeys.accessToken]);
          parameters.push(['oauth_signature_method', 'HMAC-SHA1']);

          var message = {
              'action' : 'http://api.yelp.com/v2/business/' + model.markers[mark].yelpQuery,
              'method' : 'GET',
              'parameters' : parameters
          };

          // Sets a timestamp for the request to Yelp
          OAuth.setTimestampAndNonce(message);
          OAuth.SignatureMethod.sign(message, accessor);

          var parameterMap = OAuth.getParameterMap(message.parameters);

          // Sets a timer to see if there is a response from the Yelp server
          var yelpRequestTimeout = setTimeout(function(){
            mapObj.infoWindow.setContent("<h3>Sorry we weren't able to reach Yelp</h3>");
            mapObj.infoWindow.open(mapObj.googleMap, mapObj.marker[mark]);
          }, 8000);

          // Checks if the location has a yelp business link, if so then it will run
          // the ajax request, otherwise it will generate a cut down version of
          // the info window with less details
          if (model.markers[mark].yelpQuery !== "no-yelp") {
            $.ajax({
                'url' : message.action,
                'data' : parameterMap,
                'dataType' : 'jsonp',
                'jsonpCallback' : 'cb',
                'success' : function(data, textStats, XMLHttpRequest) {
                    mapObj.infoWindow.setContent(buildInfoWindow(mapObj.marker[mark].title,
                      data.image_url,
                      "Image taken from yelp.com",
                      mapObj.marker[mark].price,
                      mapObj.marker[mark].description,
                      mapObj.marker[mark].address,
                      mapObj.marker[mark].suburb,
                      data.rating,
                      data.review_count,
                      data.url));
                    mapObj.infoWindow.open(mapObj.googleMap, mapObj.marker[mark]);

                    // Stops the timer if there was a yelp response
                    clearTimeout(yelpRequestTimeout);
                }
            });
          } else {
            // Create a timer to be more consistent with locations that require calling
            // the yelp database before they display.
            setTimeout(function(){
              mapObj.infoWindow.setContent(buildInfoWindow(mapObj.marker[mark].title,
                mapObj.marker[mark].image,
                mapObj.marker[mark].imageAlt,
                mapObj.marker[mark].price,
                mapObj.marker[mark].description,
                mapObj.marker[mark].address,
                mapObj.marker[mark].suburb));
              mapObj.infoWindow.open(mapObj.googleMap, mapObj.marker[mark]);

              // Clears the timer because we are not calling the yelp server
              clearTimeout(yelpRequestTimeout);
            }, 400);
          }
        };
      })(i));
    }
  }
};

// registers when the enter key is pressed to request a response for search bar
ko.bindingHandlers.returnAction = {
  init: function(element, valueAccessor, allBindingsAccessor, viewModel) {
    var value = ko.utils.unwrapObservable(valueAccessor());

    // If the key entered is enter then do something
    $(element).keydown(function(e) {
      if (e.which === 13) {
        value(viewModel);
      }
    });
  }
};

ko.applyBindings(viewModel);

// Sets the map on all markers in the array.
function setAllMap(map) {
  for (var i = 0; i < myMap().marker.length; i++) {
    myMap().marker[i].setMap(map);
  }
}

// Helpful content creator for the Google maps info window
function buildInfoWindow(title, image, imageAlt, price, para1, address, suburb, rating, reviewCount, url) {
  var heading = '<div id="infoContent" class="row">' +
    '<h3 class="infoHeading col-12">' +
    title +
    '</h3>';
  var body = '<div id="infoBodyContent" class="col-7">' +
    '<p>Approximate price range per person: <i>' +
    price +
    '</i></p>'+
    '<p>'+
    para1 +
    '</p>'+
    '<p class="infoAddress">'+
    address +
    '<br>' +
    suburb +
    '</p>' +
    '</div>';
  if (image !== undefined) {
    var infoImage = '<img class="infoImage floatRight col-4" src="' +
      image +
      '" alt="' +
      imageAlt +
      '">';
  } else {
    var infoImage = '';
  }
  // Checks to see if there is yelp data and append the correct rating to
  // info window
  var ratingImage = '<div class="col-6"><img class="infoRating" src="';
  if (rating !== undefined) {
    if (rating == 5) {
      ratingImage += 'images/star5.png">';
    } else if (rating == 4.5) {
      ratingImage += 'images/star45.png">';
    } else if (rating == 4) {
      ratingImage += 'images/star4.png">';
    } else if (rating == 3.5) {
      ratingImage += 'images/star35.png">';
    } else if (rating == 3) {
      ratingImage += 'images/star3.png">';
    } else if (rating == 2.5) {
      ratingImage += 'images/star25.png">';
    } else if (rating == 2) {
      ratingImage += 'images/star2.png">';
    } else if (rating == 1.5) {
      ratingImage += 'images/star15.png">';
    } else if (rating == 1) {
      ratingImage += 'images/star1.png">';
    }
    ratingImage += '</div><p class="col-6 infoReview">Based on ' +
      reviewCount +
      ' review</p>';
  } else {
    // If there is no yelp data apply a zero star rating and encourage user to
    // rate themselves
    ratingImage += 'images/star0.png"></div>' +
      '<p class="infoNoYelp col-12">' +
      "This restaurant hasn't been rated yet, why not try it and let us know!</p>";
  }
  // If there is yelp data append the link to the yelp page of the restaurant
  if (url !== undefined) {
    var urlLine = '<a target="_blank" class="col-10" href="' +
      url +
      '">' +
      url +
      '</a>';
  } else {
    var urlLine = "";
  }
  var end = '<a class="col-2" target="_blank" href="http://nz.yelp.com/"><img class="floatRight col-12" src="images/yelp_logo.png" alt="yelp logo"></a>' +
    '</div>';

  return heading + body + infoImage + ratingImage + urlLine + end;
}
