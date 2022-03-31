
var play = function() {
  var audio = new Audio('sound/jump.ogg');
  audio.play();
}

var playDelayed = function(nbSec) {
  var audio = new Audio('sound/unlocked.mp3');
  setTimeout(function(nbSec){ 
    audio.play(); }, nbSec * 1000);
}

setTimeout(function () {
  document.getElementById("my_audio").play();
  console.log('your audio is started just now');
}, 2000)