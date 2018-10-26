

$( document ).ready(function() {
    // creating a canvas element
    var canvas = document.createElement("canvas"); 
    var context = canvas.getContext("2d");
    // set the canvas height and width 
    canvas.width = 675;
    canvas.height = 480; 

    // document.getElementById("canvas").appendChild(canvas);

    $("#canvas").append(canvas);
    
});