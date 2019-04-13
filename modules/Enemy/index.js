import { xCoordGen, yCoordGen } from "../RandNumGen/index.js";

export const Enemy = {
  init: function(
    name,
    image,
    speed,
    archer,
    frameWidth,
    frameHeight,
    numFrames,
    detectCollision,
  ) {
    this.name = name;
    this.health = 3;
    this.image = new Image();
    this.image.src = image;
    this.frameIndex = 0;
    this.staggerFrame = 0;
    this.speed = speed || 0.1;
    this.x = xCoordGen.next().value;
    this.y = yCoordGen.next().value;
    this.destinationX = xCoordGen.next().value;
    this.destinationY = yCoordGen.next().value;
    this.srcX = 0;
    this.frameHeight = frameHeight;
    this.srcY = this.findFrameRow();
    this.frameWidth = frameWidth;
    this.numFrames = numFrames;
    this.heroToAttack = archer;
    this.detectCollision = detectCollision;
    this.moving = true;
  },
  findFrameRow() {
    if (this.destinationX < this.x) {
      //   he is going to walk left use second row of frames
      return this.frameHeight;
    } else {
      //  he is about to walk right - use first set of frames
      return 0;
    }
  },
  updateFrame: function() {
    this.staggerFrame = ++this.staggerFrame % 2;
    if (this.staggerFrame === 0) {
      this.frameIndex = ++this.frameIndex % this.numFrames;
    }
    this.srcX = this.frameIndex * this.frameWidth;
  },
  move(delta) {
    // catch archer logic
    if (!this.moving) return;
    if (
      Math.abs(this.x - this.heroToAttack.x) < 24 &&
      Math.abs(this.y - this.heroToAttack.y) < 24
    ) {
      this.x = xCoordGen.next().value;
      this.srcY = this.findFrameRow();
      this.y = yCoordGen.next().value;
      this.catchHero();
    }
    if (Math.abs(this.x - this.destinationX) < 32) {
      // monster hit the destination - walk to a new place to a n
      this.destinationX = xCoordGen.next().value;
      this.srcY = this.findFrameRow();
    } else if (this.x < this.destinationX) {
      this.x += delta * this.speed;
    } else {
      this.x -= delta * this.speed;
    }
    if (Math.abs(this.y - this.destinationY) < 32) {
      this.destinationY = yCoordGen.next().value;
    } else if (this.y > this.destinationY) {
      this.y -= delta * this.speed;
    } else {
      this.y += delta * this.speed;
    }
  },
  catchHero() {
    this.heroToAttack.decreaseHealth(1);
  },
  decreaseHealth (damage = 1) {
    this.health -= damage;    
    console.log(this, 'i got hit');
  }, 
  faintingAnimation() {
    // implement
  }
};
