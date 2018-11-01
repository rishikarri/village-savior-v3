var keysPressed = []; //array that holds whats in the array

addEventListener("keyup", function(event) {
delete keysPressed[event.keyCode];
});
//anonymous functions to pass moveArcher commands
addEventListener("keydown", function(event) {
keysPressed[event.keyCode] = true; //this position of the array has a position of true
});

export function update(context, archer) {
  context.drawImage(archer.image, archer.x, archer.y);
  archer.move(keysPressed);
}
