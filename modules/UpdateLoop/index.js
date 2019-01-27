
import { enemyArr } from '../EnemyInterval'
var keysPressed = []; //array that holds whats in the array

addEventListener("keyup", function(event) {
  delete keysPressed[event.keyCode];
});
//anonymous functions to pass moveArcher commands
addEventListener("keydown", function(event) {
  keysPressed[event.keyCode] = true; //this position of the array has a position of true
});


// const goblin3 = Object.create(Goblin);
// const goblin1 = Object.create(Goblin);

// goblin3.setUp(archer);
// goblin1.setUp(archer);


let unitMovement = 2;
export function update(context, delta, archer) {
  unitMovement = delta / 10;
  context.drawImage(archer.image, archer.x, archer.y);
  // debugger
  for (let i = 0; i < enemyArr.length; i++) {
    enemyArr[i].updateFrame();
    context.drawImage(enemyArr[i].image, enemyArr[i].srcX, Math.floor(enemyArr[i].srcY), enemyArr[i].frameWidth, enemyArr[i].frameHeight, enemyArr[i].x, enemyArr[i].y, enemyArr[i].frameWidth, enemyArr[i].frameHeight);
    enemyArr[i].move(unitMovement);
  }
  
  archer.move(keysPressed, unitMovement);
}
