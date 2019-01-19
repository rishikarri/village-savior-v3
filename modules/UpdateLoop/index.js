import { Hero } from "../../modules/Hero/index.js";
import { Goblin, GoblinTest } from "../../modules/Goblin/index.js";
import { Enemy } from "../../modules/Enemy/index.js";

var keysPressed = []; //array that holds whats in the array

addEventListener("keyup", function(event) {
  delete keysPressed[event.keyCode];
});
//anonymous functions to pass moveArcher commands
addEventListener("keydown", function(event) {
  keysPressed[event.keyCode] = true; //this position of the array has a position of true
});

const archer = new Hero("archer", "../../Images/archer.png", 1);
const goblin = new Goblin("goblin0", "../../Images/goblin-spritesheet-forward-backward.png", null, archer);
const goblin1 = new Goblin("goblin1", "../../Images/goblin-spritesheet-forward-backward.png", null, archer);
const goblin2 = new Goblin("goblin2", "../../Images/goblin-spritesheet-forward-backward.png", null, archer);

const goblin3 = Object.create(GoblinTest);

goblin3.setUp("goblin3", "../../Images/goblin-spritesheet-forward-backward.png", null, archer);
console.log(goblin3, 'goglin3')
console.log(GoblinTest, 'GoblinTest')

const goblinArray = [goblin, goblin1, goblin2, goblin3];
export function update(context) {
  context.drawImage(archer.image, archer.x, archer.y);
  
  for (let i = 0; i < goblinArray.length; i++) {
    goblinArray[i].updateFrame();
    context.drawImage(goblinArray[i].image, goblinArray[i].srcX, goblinArray[i].srcY, goblinArray[i].frameWidth, goblinArray[i].frameHeight, goblinArray[i].x, goblinArray[i].y, goblinArray[i].frameWidth, goblinArray[i].frameHeight);
    goblinArray[i].move();
  }
  
  archer.move(keysPressed);
}
