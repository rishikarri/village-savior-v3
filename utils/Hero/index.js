// CREATE EVENT LISTENERS



export function Hero(name, image, speed) {
  this.name = name;
  this.image = new Image();
  this.image.src = image;
  this.speed = speed;
  this.x = 200;
  this.y = 200;

  this.move = function(keysPressed) {
    if (37 in keysPressed) {
      if (this.x >= 80) {
        this.x -= 7 * this.speed;
      }
    }
    if (38 in keysPressed) {
      if (this.y >= 30) {
        this.y -= 7 * this.speed;
      }
    }
    if (39 in keysPressed) {
      if (this.x <= 520) {
        this.x += 7 * this.speed;        
      }
    }
    if (40 in keysPressed) {
      if (this.y <= 390) {
        this.y += 7 * this.speed;
      }
    }
  };
}
