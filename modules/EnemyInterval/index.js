import { Goblin } from "../../modules/Goblin/index.js";

const enemyArr = [];
let prevTime = 0;

function createEnemies(archer) {
  const time = Number(document.getElementById("timer").innerHTML);
  // time is going to update several times a second - only run code when there is an increment

  if (time === prevTime) return;

  if ((prevTime % 5 == 0) && prevTime !== 0) {
    const goblin = Object.create(Goblin);
    goblin.setUp(archer);
    enemyArr.push(goblin);
    console.log(goblin, 'goblin');
    // debugger;
  }
  prevTime = Number(time);
}

export {
  enemyArr,
  createEnemies
}

