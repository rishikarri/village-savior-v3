var i = 0;

function timedCount() {
  i = i + 1;
  postMessage(1);
  setTimeout("timedCount()", 1000);
}

timedCount();