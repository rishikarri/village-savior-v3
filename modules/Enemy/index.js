import {xCoordGen, yCoordGen} from '../RandNumGen/index.js';

export const Enemy = {
    init: function(name, image, speed, archer, findFrameRow, frameWidth, frameHeight) {
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
        this.srcY = findFrameRow(this.destinationX, this.x);
        this.frameWidth = frameWidth;
        this.frameHeight = frameHeight;
        this.heroToAttack = archer;
    },

}