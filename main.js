"use strict";

import { update } from "./modules/UpdateLoop/index.js";
import { keepTrackOfGameTime } from "./modules/TimerManager";
import { createEnemies } from "./modules/EnemyInterval";
import { Hero } from "./modules/Hero/index.js";

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

  var lastFrameTimeMs = 0; // The last time the loop was run
  var maxFPS = 50; // The maximum FPS we want to allow
  var timestep = 1000 / maxFPS;
  var delta = 0;
  var gameOn = true;
  const archer = new Hero("archer", "../../Images/archer.png", "../../Images/archerLeft.png", 3);

  function mainLoop(timestamp) {
    if (timestamp < lastFrameTimeMs + 1000 / maxFPS) {
      // short circuit until alloted time has passed
      requestAnimationFrame(mainLoop);
      return;
    }
    delta += timestamp - lastFrameTimeMs; // get delta since last timestamp
    var numUpdateSteps = 0;
    lastFrameTimeMs = timestamp;
    keepTrackOfGameTime();
    createEnemies(archer);

    // Simulate the total elapsed time in fixed-size chunks
    while (delta >= timestep) {
      if (gameOn) {
        context.drawImage(backgroundImage, 0, 0); // @TODO: move this to be background in plain css and then simply draw characters on constant
        update(context, timestep, archer);
        delta -= timestep;
      }
      if (++numUpdateSteps >= 200) {
        // reset delta if there are too many steps
        delta = 0;
        break;
      }
    }

    if (!gameOn) {
      setTimeout(function() {
        gameOn = true;
      }, 3000);
    }

    requestAnimationFrame(mainLoop);
  }

  backgroundImage.onload = function() {
    requestAnimationFrame(mainLoop);
  };
});
