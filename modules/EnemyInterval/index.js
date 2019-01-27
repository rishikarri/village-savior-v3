import { Goblin } from "../../modules/Goblin/index.js";

var enemyArr = [];

let prevTime = 0;
function createEnemies(archer) {
  const time = Number(document.getElementById("timer").innerHTML);
  console.log(time);

 

  // time is going to update several times a second - only run code when there is an increment
  if (time !== prevTime) {
    if (time % 5 == 0) {
      const goblin = Object.create(Goblin);
      goblin.setUp(archer);
      enemyArr.push(goblin);
    }
    prevTime = time;
  }
}

export {
  enemyArr,
  createEnemies
}

