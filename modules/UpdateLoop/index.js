import { Hero } from "../../modules/Hero/index.js";
import { Goblin } from "../../modules/Goblin/index.js";

var keysPressed = []; //array that holds whats in the array

addEventListener("keyup", function(event) {
  delete keysPressed[event.keyCode];
});
//anonymous functions to pass moveArcher commands
addEventListener("keydown", function(event) {
  keysPressed[event.keyCode] = true; //this position of the array has a position of true
});

const archer = new Hero("archer", "../../Images/archer.png", 1);

const goblin3 = Object.create(Goblin);
const goblin1 = Object.create(Goblin);

goblin3.setUp(archer);
goblin1.setUp(archer);
console.log(goblin1, 'goglin3')
console.log(Goblin, 'GoblinTest')

const goblinArray = [goblin3, goblin1];
export function update(context) {
  context.drawImage(archer.image, archer.x, archer.y);
  
  for (let i = 0; i < goblinArray.length; i++) {
    goblinArray[i].updateFrame();
    context.drawImage(goblinArray[i].image, goblinArray[i].srcX, goblinArray[i].srcY, goblinArray[i].frameWidth, goblinArray[i].frameHeight, goblinArray[i].x, goblinArray[i].y, goblinArray[i].frameWidth, goblinArray[i].frameHeight);
    goblinArray[i].move();
  }
  
  archer.move(keysPressed);
}
