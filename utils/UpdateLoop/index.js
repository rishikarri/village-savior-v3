import { Hero } from "../../utils/Hero/index.js";
import { Goblin } from "../../utils/Goblin/index.js";

var keysPressed = []; //array that holds whats in the array

addEventListener("keyup", function(event) {
delete keysPressed[event.keyCode];
});
//anonymous functions to pass moveArcher commands
addEventListener("keydown", function(event) {
keysPressed[event.keyCode] = true; //this position of the array has a position of true
});

const archer = new Hero("archer", "../../Images/archer.png", 1);
const goblin = new Goblin("goblin0", "../../Images/goblin-small-spritesheet-11.4-dirty.png", "../../Images/goblin-small-spritesheet-11.4-flipped.png", 1);

export function update(context) {
  context.drawImage(archer.image, archer.x, archer.y);
  goblin.updateFrame();
  console.log(JSON.stringify(goblin), 'goblin');
  // context.clearRect(goblin.x, goblin.y, goblin.frameWidth, goblin.frameHeight);
  context.drawImage(goblin.image, goblin.srcX, goblin.srcY, goblin.frameWidth, goblin.frameHeight, goblin.x, goblin.y, goblin.frameWidth, goblin.frameHeight);
  
  goblin.move();
  archer.move(keysPressed);
}
