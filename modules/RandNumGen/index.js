function *randomXCoord(){
     while(true){
            yield Math.floor(Math.random() * 440 + 40);
     }
}

function *randomYCoord(){
    while(true){
           yield Math.floor(Math.random() * 400 + 40);
    }
}

export const xCoordGen = randomXCoord();
export const yCoordGen = randomYCoord();

