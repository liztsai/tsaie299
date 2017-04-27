function myFunction() {
    var seconds = new Date().getSeconds();
    var greeting;
    if (seconds < 30) {
        greeting = "nice hair";
    } else {
        greeting = "nice nails";
    }
    document.getElementById("timeo").innerHTML = greeting;
}
