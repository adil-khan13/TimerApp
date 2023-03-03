var start = document.getElementById("start");
var reset = document.getElementById("reset");

var h = document.getElementById("hour");
var m = document.getElementById("minute");
var s = document.getElementById("seconds");

var startTime = null;

function timer() {
  if (h.value == 0 && m.value == 0 && s.value == 0) {
    var sound = document.getElementById("audio");
    sound.play();
    sound.onended = function () {
      alert("Time is UP!!!");
    };
    stopTimer();
  } else if (s.value != 0) {
    s.value--;
  } else if (m.value != 0 && s.value == 0) {
    s.value = 59;
    m.value--;
  } else if (h.value != 0 && m.value == 0) {
    s.value = 59;
    m.value = 59;
    h.value--;
  }
  return;
}
function stopTimer() {
  clearInterval(startTime);
}

start.addEventListener("click", function () {
  function startInterval() {
    startTime = setInterval(function () {
      timer();
    }, 1000);
  }
  startInterval();
});

reset.addEventListener("click", function () {
  h.value = "00";
  m.value = "00";
  s.value = "00";
  stopTimer();
});
