export function startMonster(name, image, speed) {
    this.name = name;
    this.image = new Image();
    this.image.src = image;
    this.speed = speed;
    this.health = 20;
    this.x = 200;
    this.y = 200;
  
    this.decreaseHealth = function(damage = 1) {
      this.health -= damage;    
    };
  
    this.move = function(keysPressed) {
      
      // move left
      if (keysPressed[65]) {      
        if (this.x >= 80) {
          this.x -= 7 * this.speed;
        }
      }
      // move up
      if (keysPressed[87]) {
        if (this.y >= 30) {
          this.y -= 7 * this.speed;
        }
      }
  
      // move right
      if (keysPressed[68]) {
        if (this.x <= 520) {
          this.x += 7 * this.speed;
        }
      }
  
      // move down
      if (keysPressed[83]) {
        if (this.y <= 390) {
          this.y += 7 * this.speed;
        }
      }
    };
  }
  