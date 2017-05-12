function rain() {
    var audio = document.getElementById("audio");

    if ( audio.paused ) {
      audio.play();
    } else {
      audio.pause();
    }
}

function thunder() {
    var audio2 = document.getElementById("audio2");

    if ( audio2.paused ) {
      audio2.play();
    } else {
      audio2.pause();
    }
}

function bird() {
    var audio3 = document.getElementById("audio3");

    if ( audio3.paused ) {
      audio3.play();
    } else {
      audio3.pause();
    }
}

function city() {
    var audio4 = document.getElementById("audio4");

    if ( audio4.paused ) {
      audio4.play();
    } else {
      audio4.pause();
    }
}

function fire() {
    var audio5 = document.getElementById("audio5");

    if ( audio5.paused ) {
      audio5.play();
    } else {
      audio5.pause();
    }
}

function honk() {
    var audio6 = document.getElementById("audio6");
    $('#flash').click(function hoverFunction() {
        $(this).fadeOut(10);
        $(this).fadeIn(500);
    });
    if (audio6.paused) {
        audio6.play();
    } else {
        audio6.pause();
    }
}

function wind() {
    var audio7 = document.getElementById("audio7");

    if ( audio7.paused ) {
      audio7.play();
    } else {
      audio7.pause();
    }
}

function rain1() {
    var rain1 = $('.rain1.background');
    rain1.toggle();
}

function thunder2() {
    var thunder2 = $('.thunder2.background');
    thunder2.toggle();
}

function bird2() {
    var bird2 = $('.bird2.background');
    bird2.toggle();
}

function city2() {
    var city2 = $('.city2.background');
    city2.toggle();
}

function fire2() {
    var fire2 = $('.fire2.background');
    fire2.toggle();
}

function honk2() {
    var honk2 = $('.honk2.background');
    honk2.toggle();
}

function wind2() {
    var wind2 = $('.wind2.background');
    wind2.toggle();
}
