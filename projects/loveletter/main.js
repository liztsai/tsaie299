var narrative = ['Games', 'on', 'Cartoon', 'Network', 'and', 'Disney', 'Channel', 'websites', 'used',  'to', 'basically', 'consume', 'my', 'life.' ];
var missed = []
var caught =[]


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
