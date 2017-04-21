$(document).keydown(function (e) {
    var distance = 20;
    var keyId = e.which;

    move(keyId, distance);

    function move(keyId, distance) {
        var moveAmt = (keyId === 37 || keyId === 38) ? '-=' + distance : '+=' + distance;

        if (keyId === 37 || keyId === 39) {
            $("#character").stop().animate({
                left: moveAmt
            });
        }

        if (keyId === 38 || keyId === 40) {
            $("#character").stop().animate({
                top: moveAmt
            });
        }
    }
});

$(document).ready(function () {
    setInterval(function () {
        animatePhrase();
    }, 3000);

    function animatePhrase() {
        $(".tagline").letterfx({
            "fx": "fly-top",
            "backwards": false,
            "timing": 50,
            "fx_duration": "1000ms",
            "letter_end": "stay",
            "element_end": "stay"
        });
    }

});
