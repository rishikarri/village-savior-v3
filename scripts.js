
"use strict";

import { update } from './modules/UpdateLoop/index.js';

$(document).ready(function() {
  // creating a canvas element
  const canvas = document.createElement("canvas");
  var context = canvas.getContext("2d");
  // set the canvas height and width
  canvas.width = 675;
  canvas.height = 480;
  $("#canvas").append(canvas);

  var backgroundImage = new Image();
  backgroundImage.src = "./Images/background.jpeg";  

  var lastFrameTimeMs = 0, // The last time the loop was run
    maxFPS = .5, // The maximum FPS we want to allow
    delta = 0;

  function mainLoop(timestamp) {
    // Throttle the frame rate. 
    debugger;   
    if (timestamp < lastFrameTimeMs + (1000 / maxFPS)) {
        // short circuit until alloted time has passed
        requestAnimationFrame(mainLoop);
        return;
    }
    delta = timestamp - lastFrameTimeMs; // get the delta time since last frame
    lastFrameTimeMs = timestamp;
 
    context.drawImage(backgroundImage, 0, 0); // @TODO: move this to be background in plain css and then simply draw characters on constant
    update(context, delta);
    requestAnimationFrame(mainLoop);

  }

  backgroundImage.onload = function() {
    requestAnimationFrame(mainLoop);
  };
});
