export function Hero(name, image, speed) {
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

  this.move = function(keysPressed, delta) {
    
    // move left
    if (keysPressed[65]) {      
      if (this.x >= 80) {
        this.x -= delta * this.speed;
      }
    }
    // move up
    if (keysPressed[87]) {
      if (this.y >= 30) {
        this.y -= delta * this.speed;
      }
    }

    // move right
    if (keysPressed[68]) {
      if (this.x <= 520) {
        this.x += delta * this.speed;
      }
    }

    // move down
    if (keysPressed[83]) {
      if (this.y <= 390) {
        this.y += delta * this.speed;
      }
    }
  };
}
