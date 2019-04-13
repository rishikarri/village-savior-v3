import { debounce } from '../Utils';
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
        this.enemyCaught = null;
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
    },
}