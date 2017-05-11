function rain() {
    var audio = document.getElementById("audio");

    if ( audio.paused ) {
      audio.play();
    } else {
      audio.pause()
    }
}

function thunder() {
    var audio2 = document.getElementById("audio2");

    if ( audio.paused ) {
      audio.play();
    } else {
      audio.pause()
    }
}

function bird() {
    var audio3 = document.getElementById("audio3");

    if ( audio.paused ) {
      audio.play();
    } else {
      audio.pause()
    }
}

function city() {
    var audio4 = document.getElementById("audio4");

    if ( audio.paused ) {
      audio.play();
    } else {
      audio.pause()
    }
}

function fire() {
    var audio5 = document.getElementById("audio5");

    if ( audio.paused ) {
      audio.play();
    } else {
      audio.pause()
    }
}

function honk() {
    var audio6 = document.getElementById("audio6");

    if ( audio.paused ) {
      audio.play();
    } else {
      audio.pause()
    }
}

function wind() {
    var audio7 = document.getElementById("audio7");

    if ( audio.paused ) {
      audio.play();
    } else {
      audio.pause()
    }
}

function rain1() {
    var rain1 = $('.rain1.background');
    rain1.toggle();
}

function city2() {
    var city2 = $('.city2.background');
    city2.toggle();
}

function fire2() {
    var fire2 = document.getElementById('fire2');
    if (fire2.style.display === 'none') {
        fire2.style.display = 'block';
    } else {
        fire2.style.display = 'none';
    }
}

function honk2() {
    var honk2 = document.getElementById('honk2');
    if (honk2.style.display === 'none') {
        honk2.style.display = 'block';
    } else {
        honk2.style.display = 'none';
    }
}


function wind2() {
    var wind2 = document.getElementById('wind2');
    if (wind2.style.display === 'none') {
        wind2.style.display = 'block';
    } else {
        wind2.style.display = 'none';
    }
}
