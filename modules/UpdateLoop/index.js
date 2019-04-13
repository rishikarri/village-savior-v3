
import { enemyArr } from '../EnemyInterval';
import { Arrow } from '../Arrow';
const keysPressed = []; 
const arrowArray = [];
let mouseCoords = {
  x: 0,
  y: 0
}
function getMousePos(evt) {
  var rect = canvas.getBoundingClientRect();
  mouseCoords = {
    x: evt.clientX - rect.left,
    y: evt.clientY - rect.top
  };
}

addEventListener("keyup", function(event) {
  delete keysPressed[event.keyCode];
});
//anonymous functions to pass moveArcher commands
addEventListener("keydown", function(event) {
  keysPressed[event.keyCode] = true; //this position of the array has a position of true
});

addEventListener("click", function(event) {
  console.log('click', event.x);
  const arrow = Object.create(Arrow);
  
  arrowArray.push(arrow);
});


addEventListener("mousemove", getMousePos);

function moveArrows(archer, enemyArr, context, delta) {
  if (arrowArray.length === 0) return;

  // only loop through arrows that have not hit enemies 
  const liveArrows = arrowArray.filter((arrow) => !arrow.enemyCaught);

  liveArrows.forEach((arrow) => {
    if (!arrow.initiated) {
      arrow.init('arrow1', 0.2, archer, enemyArr);
    }
    
    arrow.move(delta);    

    context.drawImage(arrow.image, arrow.x, arrow.y);
  })
  
}
let unitMovement = 2;
export function update(context, delta, archer) {
  unitMovement = delta / 10;
  context.drawImage(archer.image, archer.x, archer.y);
  moveArrows(archer, enemyArr, context, delta);
  // debugger
  for (let i = 0; i < enemyArr.length; i++) {
    if (enemyArr[i].health === 0) continue;
    enemyArr[i].updateFrame();
    context.drawImage(enemyArr[i].image, enemyArr[i].srcX, Math.floor(enemyArr[i].srcY), enemyArr[i].frameWidth, enemyArr[i].frameHeight, enemyArr[i].x, enemyArr[i].y, enemyArr[i].frameWidth, enemyArr[i].frameHeight);
    enemyArr[i].move(unitMovement);
    enemyArr[i].detectCollision(arrowArray);

  }
  
  archer.move(keysPressed, unitMovement, mouseCoords);
}
