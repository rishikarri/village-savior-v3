const sheetWidth = 1429;
const sheetHeight = 50;
const numFrames = 24;
const frameWidth = sheetWidth / numFrames;
const frameHeight = sheetHeight;
let frameIndex = 0;

export function Goblin(name, image) {
  this.name = name;
  this.health = 3;
  this.image = new Image();
  this.image.src = image;
  this.speed = 1;
  this.x = Math.random() * 440 + 40;
  this.y = Math.random() * 400 + 20;
  this.destinationX = Math.random() * 440 + 40;
  this.destinationY = Math.random() * 400 + 20;
  this.srcX = 0;
  this.srcY = 0;
  this.frameWidth = frameWidth;
  this.frameHeight = frameHeight;
  this.updateFrame = function() {
	frameIndex = ++frameIndex % numFrames;
	console.log(frameIndex, 'frame index');
    this.srcX = frameIndex * frameWidth;
    this.srcY = 0;
  };
  this.move = function() {
    if (Math.abs(this.x - this.destinationX) < 32) {
      this.destinationX = Math.random() * 440 + 40;
    } else if (this.x < this.destinationX) {
      this.x += 2.94 * this.speed;
    } else {
      this.x -= 2.94 * this.speed;
    }
    if (Math.abs(this.y - this.destinationY) < 32) {
      this.destinationY = Math.random() * 400 + 20;
    } else if (this.y > this.destinationY) {
      this.y -= 2.94 * this.speed;
    } else {
      this.y += 2.94 * this.speed;
    }
  };
}
