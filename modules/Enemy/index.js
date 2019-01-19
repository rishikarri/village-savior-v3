import {xCoordGen, yCoordGen} from '../RandNumGen/index.js';

export const Enemy = {
    init: function(name, image, speed, archer, frameWidth, frameHeight, numFrames) {
        this.name = name;
        this.health = 3;
        this.image = new Image();
        this.image.src = image;
        this.frameIndex = 0;
        this.staggerFrame = 0;
        this.speed = speed || 1;
        this.x = xCoordGen.next().value;
        this.y = yCoordGen.next().value;
        this.destinationX = xCoordGen.next().value;
        this.destinationY = yCoordGen.next().value;
        this.srcX = 0;
        this.srcY = this.findFrameRow();
        this.frameWidth = frameWidth;
        this.frameHeight = frameHeight;
        this.numFrames = numFrames;
        this.heroToAttack = archer;
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
    updateFrame: function () {
        this.staggerFrame = ++this.staggerFrame % 2;
        if (this.staggerFrame === 0) {
          this.frameIndex = ++this.frameIndex % this.numFrames;
        }
        this.srcX = this.frameIndex * this.frameWidth;
    },
    move() {
        // catch archer logic
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
          this.x += 2 * this.speed;
        } else {
          this.x -= 2 * this.speed;
        }
        if (Math.abs(this.y - this.destinationY) < 32) {
          this.destinationY = yCoordGen.next().value;
        } else if (this.y > this.destinationY) {
          this.y -= 2 * this.speed;
        } else {
          this.y += 2 * this.speed;
        }
      },
      catchHero() {
        this.heroToAttack.decreaseHealth(1);
      }
}