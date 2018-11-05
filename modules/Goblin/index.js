const sheetWidth = 1160;
const sheetHeight = 113;
const numFrames = 20;
const numRows = 2;
const frameWidth = sheetWidth / numFrames;
const frameHeight = sheetHeight / numRows;

export function Goblin(name, image, speed, archer) {
  this.name = name;
  this.health = 3;
  this.image = new Image();
  this.image.src = image;
  this.frameIndex = 0;
  this.staggerFrame = 0;
  this.speed = speed || 1;
  this.x = Math.floor(Math.random() * 440 + 40);
  this.y = Math.floor(Math.random() * 400 + 20);
  this.destinationX = 100;
  this.destinationY = Math.floor(Math.random() * 400 + 20);
  this.srcX = 0;
  this.findFrameRow = function () {
	if (this.destinationX < this.x) {
        //   he is going to walk left use second row of frames
        return frameHeight;
      } else {
        //  he is about to walk right - use first set of frames
        return 0;
      }
  }
  this.srcY = this.findFrameRow();
  this.frameWidth = frameWidth;
  this.frameHeight = frameHeight;
  this.updateFrame = function() {
    console.log('update frame run, frame number: ', this.frameIndex, this.name);
    // console.log(this.name, 'name');
    this.staggerFrame = ++this.staggerFrame % 2;
    if (this.staggerFrame === 0) {
      this.frameIndex = ++this.frameIndex % numFrames;
    }
    this.srcX = this.frameIndex * frameWidth;
  };

  
  this.move = function() {
    // catch archer logic
	// console.log('move');
    if ((Math.abs(this.x - archer.x) < 24) && (Math.abs(this.y - archer.y) < 24)) {
		console.log ('hello');
      this.x = Math.random() * 440 + 40;
	  this.y = Math.random() * 400 + 20;
	  this.catchHero();
    }
    if (Math.abs(this.x - this.destinationX) < 32) {
      // monster hit the destination - walk to a new place to a n
	  this.destinationX = Math.random() * 440 + 40;
	  this.srcY = this.findFrameRow(); 
    } else if (this.x < this.destinationX) {
      this.x += 2 * this.speed;
    } else {
      this.x -= 2 * this.speed;
    }
    if (Math.abs(this.y - this.destinationY) < 32) {
      this.destinationY = Math.floor(Math.random() * 400 + 20);
    } else if (this.y > this.destinationY) {
      this.y -= 2 * this.speed;
    } else {
      this.y += 2 * this.speed;
    }
  };
  this.catchHero = function() {
	archer.decreaseHealth(1);
  };
}
