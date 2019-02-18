export const Arrow = {
    init: function(name, image, speed, archer, enemyArray) {
        this.name = name;
        this.image = new Image();
        this.image.src = image;
        this.speed = speed || 0.1;
        this.archer = archer;
        this.enemyArray = enemyArray;
        this.x = 200;
        this.y = 200;
        this.initiated = true;
    },
    move(delta) {
        this.x += delta * this.speed;
    }
    // move(delta) {
    //     // catch archer logic
    //     if (
    //       Math.abs(this.x - this.heroToAttack.x) < 24 &&
    //       Math.abs(this.y - this.heroToAttack.y) < 24
    //     ) {
    //       this.x = xCoordGen.next().value;
    //       this.srcY = this.findFrameRow();
    //       this.y = yCoordGen.next().value;
    //       this.catchHero();
    //     }
    //     if (Math.abs(this.x - this.destinationX) < 32) {
    //       // monster hit the destination - walk to a new place to a n
    //       this.destinationX = xCoordGen.next().value;
    //       this.srcY = this.findFrameRow();
    //     } else if (this.x < this.destinationX) {
    //       this.x += delta * this.speed;
    //     } else {
    //       this.x -= delta * this.speed;
    //     }
    //     if (Math.abs(this.y - this.destinationY) < 32) {
    //       this.destinationY = yCoordGen.next().value;
    //     } else if (this.y > this.destinationY) {
    //       this.y -= delta * this.speed;
    //     } else {
    //       this.y += delta * this.speed;
    //     }
    //   },
    //   catchHero() {
    //     this.heroToAttack.decreaseHealth(1);
    //   }
}