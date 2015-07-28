// Handles all the resizing for the mainDiv

$(document).ready(function() {
  mainDivAdjust();
});

$(window).resize(function() {
  mainDivAdjust();
});

function mainDivAdjust() {
  if (window.innerWidth < 500) {
    var tempHeight = window.innerHeight - 140 + "px";
    $("#mainDiv").css({"height": tempHeight})
  } else {
    var tempHeight = window.innerHeight - 120 + "px";
    $("#mainDiv").css({"height": tempHeight})
  }
}
