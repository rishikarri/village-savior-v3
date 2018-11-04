const sheetWidth = 1160;
const sheetHeight = 57;
const numFrames = 20;
const frameWidth = sheetWidth / numFrames;
const frameHeight = sheetHeight;
let frameIndex = 0;
let countBackwards = false;
let staggerFrame = 0;

export function Goblin(name, image, flippedImage) {
  this.name = name;
  this.health = 3;
  this.image = new Image();
  this.image.src = image;      
  this.speed = .5;
  this.x = Math.random() * 440 + 40;
  this.y = Math.random() * 400 + 20;
  this.destinationX = 640 + 40;
  this.destinationY = Math.random() * 400 + 20;
  this.srcX = 0;
  this.srcY = 0;
  this.frameWidth = frameWidth;
  this.frameHeight = frameHeight;
  this.updateFrame = function() {
	// walking backwards
	if (this.destinationX < this.x) {
		this.image.src = flippedImage; 
	} else {
		this.image.src = image;
	}
	staggerFrame = ++staggerFrame % 2;
    if (staggerFrame === 0) {
	  frameIndex = ++frameIndex % numFrames;
	}    
	this.srcX = frameIndex * frameWidth;
	this.srcY = 0;
    

    console.log(frameIndex, "frame index");
  };
  this.move = function() {
    if (Math.abs(this.x - this.destinationX) < 32) {
		console.log('walking in a direction');
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
