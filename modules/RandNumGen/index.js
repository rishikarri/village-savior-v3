function *randomXCoord(){
     while(true){
            console.log("generator call X");
            yield Math.floor(Math.random() * 440 + 40);
     }
}

function *randomYCoord(){
    while(true){
           console.log("generator call Y");
           yield Math.floor(Math.random() * 400 + 40);
    }
}

export const xCoordGen = randomXCoord();
export const yCoordGen = randomYCoord();

