function updateTime() {
  var date = new Date();
  $('#time').html( date.toGMTString() );
}

$(function() {
  updateTime();
  setInterval(updateTime, 1000);
});

function myFunction() {
    var seconds = new Date().getSeconds();
    var greet;

    if (seconds < 30) {
        greet = "nice hair";
    } else {
        greet = "nice nails";
    }
    document.getElementById("time").innerHTML = greet;
}
