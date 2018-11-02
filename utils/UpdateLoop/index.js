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
const goblin = new Goblin("goblin0", "../../Images/goblin-image.png", 1);

export function update(context) {
  context.drawImage(archer.image, archer.x, archer.y);
  context.drawImage(goblin.image, goblin.x, goblin.y);
  goblin.move();
  archer.move(keysPressed);
}
