import { Hero } from './utils/Hero/index.js';

$( document ).ready(function() {
    // creating a canvas element
    const canvas = document.createElement("canvas"); 
    var context = canvas.getContext("2d");
    // set the canvas height and width 
    canvas.width = 675;
    canvas.height = 480; 
    $("#canvas").append(canvas);
    
    var backgroundImage = new Image(); 
    backgroundImage.src = "./Images/background.jpeg";

    const archer = new Hero('archer', './Images/archer.png', 1);

    function draw() {
        
        context.drawImage(backgroundImage, 0, 0); // @TODO: move this to be background in plain css and then simply draw characters on constant
        context.drawImage(archer.image, archer.x, archer.y);
    }

    backgroundImage.onload = function() {
        console.log(archer, 'archer');


        draw();
    }
   
    
});