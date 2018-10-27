

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

    

   function draw() {
        console.log(backgroundImage, 'background image')
        console.log(context, 'cont3ext');
        context.drawImage(backgroundImage, 0, 0); // @TODO: move this to be background in plain css and then simply draw characters on constant
   }

    backgroundImage.onload = function() {
        draw();
    }
   
    
});