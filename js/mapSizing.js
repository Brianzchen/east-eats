// Handles all the resizing for the mainDiv

$(document).ready(function() {
  mainDivAdjust();
});

$(window).resize(function() {
  mainDivAdjust();
});

function mainDivAdjust() {
  if (window.innerWidth < 500) {
    $("#mainDiv").css({"height": window.innerHeight - 140 + "px"});
  } else {
    $("#mainDiv").css({"height": window.innerHeight - 120 + "px"});
  }
}
