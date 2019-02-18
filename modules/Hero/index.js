export function Hero(name, imageFaceRight, imageFaceLeft, speed) {
  this.name = name;
  this.image = new Image();
  this.image.src = imageFaceRight;
  this.faceRight = true;
  this.speed = speed;
  this.health = 20;
  this.x = 200;
  this.y = 200;

  this.decreaseHealth = function(damage = 1) {
    this.health -= damage;    
  };

  this.move = function(keysPressed, delta, mouseCoords) {
    
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
    
    // face right if mouse is in front of center line of character
    if (mouseCoords.x > (this.x + this.image.width / 2)) {
      this.faceRight = true;
      this.image.src = imageFaceRight;
    } else {
      this.faceRight = false;
      this.image.src = imageFaceLeft;
    }
  };
}
