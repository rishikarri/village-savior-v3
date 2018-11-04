const sheetWidth = 1160;
const sheetHeight = 113;
const numFrames = 20;
const numRows = 2;
const frameWidth = sheetWidth / numFrames;
const frameHeight = sheetHeight / numRows;
let frameIndex = 0;
let staggerFrame = 0;

export function Goblin(name, image) {
  this.name = name;
  this.health = 3;
  this.image = new Image();
  this.image.src = image;      
  this.speed = .5;
  this.x = Math.random() * 440 + 40;
  this.y = Math.random() * 400 + 20;
  this.destinationX = 500;
  this.destinationY = Math.random() * 400 + 20;
  this.srcX = 0;
  this.srcY = 0;
  this.frameWidth = frameWidth;
  this.frameHeight = frameHeight;
  this.updateFrame = function() {	
	staggerFrame = ++staggerFrame % 2;
    if (staggerFrame === 0) {
	  frameIndex = ++frameIndex % numFrames;
	}    
	this.srcX = frameIndex * frameWidth;	
  };
  this.move = function() {
    if (Math.abs(this.x - this.destinationX) < 32) {
		// monster hit the destination - walk to a new place to a n
		console.log('found spot');
	  this.destinationX = Math.random() * 440 + 40;
	  if (this.destinationX < this.x) {
		//   he is going to walk left use second row of frames
		this.srcY = frameHeight;
	  } else {
		//  he is about to walk right - use first set of frames
		this.srcY = 0;
	  }

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
