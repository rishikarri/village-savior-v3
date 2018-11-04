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
    console.log(this.health, 'this.health');
  };

  this.move = function(keysPressed) {
    
    // move left
    if (65 in keysPressed) {      
      if (this.x >= 80) {
        this.x -= 7 * this.speed;
      }
    }
    // move up
    if (87 in keysPressed) {
      if (this.y >= 30) {
        this.y -= 7 * this.speed;
      }
    }

    // move right
    if (68 in keysPressed) {
      if (this.x <= 520) {
        this.x += 7 * this.speed;
      }
    }

    // move down
    if (83 in keysPressed) {
      if (this.y <= 390) {
        this.y += 7 * this.speed;
      }
    }
  };
}
