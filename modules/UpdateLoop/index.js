
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
  console.log('click');
  const arrow = Object.create(Arrow);
  arrowArray.push(arrow);
});


addEventListener("mousemove", getMousePos);

function moveArrows(archer, enemyArr, context, delta) {
  if (arrowArray.length === 0) return;

  arrowArray.forEach((arrow) => {
    if (!arrow.initiated) {
      arrow.init('arrow1', '../../Images/arrow-right.png', null, archer, enemyArr);
    }
    
    arrow.move(delta);
    context.drawImage(arrow.image, arrow.x, arrow.y);
  })
  
}
let unitMovement = 2;
export function update(context, delta, archer) {
  // console.log(enemyArr)

  unitMovement = delta / 10;
  context.drawImage(archer.image, archer.x, archer.y);
  moveArrows(archer, enemyArr, context, delta);
  // debugger
  for (let i = 0; i < enemyArr.length; i++) {
    enemyArr[i].updateFrame();
    context.drawImage(enemyArr[i].image, enemyArr[i].srcX, Math.floor(enemyArr[i].srcY), enemyArr[i].frameWidth, enemyArr[i].frameHeight, enemyArr[i].x, enemyArr[i].y, enemyArr[i].frameWidth, enemyArr[i].frameHeight);
    enemyArr[i].move(unitMovement);
  }
  
  archer.move(keysPressed, unitMovement, mouseCoords);
}
