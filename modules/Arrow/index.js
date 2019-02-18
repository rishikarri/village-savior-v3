export const Arrow = {
    init: function(name, speed, archer, enemyArray) {
        this.name = name;
        this.image = new Image();
        this.image.src = '../../Images/arrow-right.png';
        this.speed = speed || 0.1;
        this.archer = archer;
        this.enemyArray = enemyArray;
        this.shootRight = archer.faceRight;
        this.x = archer.x + 15;
        this.y = archer.y + 19;
        this.initiated = true;
    },
    move(delta) {
        if (this.shootRight) {
            this.image.src = '../../Images/arrow-right.png';
            this.x += delta * this.speed;
        } else {
            this.image.src = '../../Images/arrow-left.png';
            this.x -= delta * this.speed;
        }
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