import { Enemy } from "../../modules/Enemy/index.js";

const sheetWidth = 1160;
const sheetHeight = 113;
const numFrames = 20;
const numRows = 2;
const frameWidth = sheetWidth / numFrames;
const frameHeight = sheetHeight / numRows;
const goblinSpritesheet = "../../Images/goblin-spritesheet-forward-backward.png";
let goblinCounter = 0;


const Goblin = Object.create(Enemy);

Goblin.setUp = function(archer) {
  // delegate to enemy init to initialize Goblin set up
  this.init(`goblin${goblinCounter++}`, goblinSpritesheet, 1 / 12, archer, frameWidth, frameHeight, numFrames)
}


export {
  Goblin
};
