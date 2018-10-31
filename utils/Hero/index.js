export function Hero (name, image, speed) {
    this.name = name; 
    this.image = new Image();
    this.image.src = image; 
    this.speed = speed; 
    this.x = 200; 
    this.y = 200; 
}