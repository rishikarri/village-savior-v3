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
    // catchEnemy() {
    //     this.enemyArray.forEach((enemy) => {
    //         if (
    //             Math.abs(this.x - enemy.x) < 20 &&
    //             Math.abs(this.y - enemy.y) < 16 
    //             && !this.enemyCaught
    //         ) {
    //             this.enemyCaught = true;
    //             this.dealDamage(enemy)
    //         }
    //     })
    // },
    dealDamage(enemy) {
        // console.log(enemy, 'enemy');
        // const debouncedDealDamage = debounce(() => enemy.decreaseHealth(1), 100);
        // debouncedDealDamage();
        enemy.decreaseHealth(1)
        
    }
}