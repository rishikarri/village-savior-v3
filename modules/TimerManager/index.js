var w;
var timer;

function startWorker() {
  // console.log(document);

  if (typeof Worker !== "undefined") {
    if (typeof w == "undefined") {
      w = new Worker("../../modules/WebWorkerTimer/index.js");
    }
    w.onmessage = function(event) {
      document.getElementById("timer").innerHTML =
        Number(document.getElementById("timer").innerHTML) + Number(event.data);
    };
  } else {
    document.getElementById("timer").innerHTML =
      "Sorry! No Web Worker support.";
  }
}

function stopWorker() {
  if (w) {
    w.terminate();
    w = undefined;
  }
}

export function keepTrackOfGameTime() {
  // Throttle the frame rate.
  clearTimeout(timer);
  startWorker();
  function stopTimer() {
    timer = setTimeout(function() {
      stopWorker();
    }, 300);
  }
  stopTimer();
}
