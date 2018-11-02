export function Goblin(name, image){
	this.name = name; 
	this.health = 3;
	this.image = new Image();
	this.image.src = image;
	this.speed = 1; 
	this.x = Math.random() * 440 + 40; ;
	this.y = Math.random() * 400 + 20;
	this.destinationX = Math.random() * 440 + 40; 
	this.destinationY = Math.random() * 400 + 20; 
	// this.move = function(){
	// 	if (Math.abs(this.x - this.destinationX) < 32) {
	// 		this.destinationX = Math.random() * 440 + 40; 
	// 	}else if(this.x < this.destinationX){
	// 		this.x += 2.94 * this.speed;
	// 		this.image.src = "possible-enemies-allies/royalty-goblin-right.png";
	// 	}else{
	// 		this.x -= 2.94 * this.speed;
	// 		this.image.src = "possible-enemies-allies/royalty goblin-left.png";
	// 	}
		
	// 	if (Math.abs(this.y - this.destinationY) < 32) {
	// 		this.destinationY = Math.random() * 400 + 20; 
	// 	}else if(this.y > this.destinationY){
	// 		this.y -= 2.94 * this.speed;
	// 	}else{
	// 		this.y += 2.94 * this.speed;
	// 	}
	// }

	// this.catchRobinHood = function() {
	// 	// if this goblin is within 32 of robinhood, robinhood gets hurt unless goblin is a coin
	// 	if(
	// 		Math.abs((this.x - robinHood.x)) < 24
	// 		&& Math.abs(this.y - robinHood.y) < 24
	// 	){
	// 	//robin hoood got hit
	// 		this.x = Math.random() * 440 + 40; 
	// 		this.y = Math.random() * 400 + 20; 
	// 		robinHood.health--;
	// 		document.getElementById("health").innerHTML = robinHood.health; 	
	// 	}
	// }
	// this.getHitByArrow = function() {
	// 	if (
	// 		Math.abs(robinHood.arrowLocation.x - this.x) < 15
	// 	&& Math.abs(robinHood.arrowLocation.y - this.y) < 28 
	// 	&& shooting === true
	// 	){
	// 		// if the goblin gets hit by the arrow, it loses health, robinhood stops shooting and teh goblin slows
	// 		this.health -= arrowDamage;
	// 		shooting = false;
	// 		robinHood.stopShooting();
	// 		this.changeSpeed();
	// 	}
	// }

	// this.getHitByNinjaStar = function(){
	// 	for(var i = 0; i < ninjaArray.length; i++){
	// 		if (
	// 			Math.abs(ninjaArray[i].ninjaStarLocation.x - this.x) < 15
	// 		&& Math.abs(ninjaArray[i].ninjaStarLocation.y - this.y) < 30
	// 		&& ninjaArray[i].throwing === true
	// 		){
	// 			// if the goblin gets hit by the arrow, it loses health, robinhood stops shooting and teh goblin slows
	// 			this.health -= ninjaStarDamage;			
	// 			ninjaArray[i].throwing = false;
	// 			ninjaArray[i].stopThrowing();
	// 			this.changeSpeed();
	// 		}
	// 	}
	// }

	
	// //changes the speed of the goblin and changes them to a coin if dead
	// this.changeSpeed = function() {
	// 	if (this.health == 2){
	// 		this.speed = .7; 
	// 	}else if(this.health == 1){
	// 		this.speed = .2;
	// 	}else if (this.health <= 0){
	// 		var goblinNumber = this.name.slice(6);		

	// 		//change property in goblin array to do nothing
	// 		// goblinArray[goblinNumber] = "do nothing";

	// 		// change image source to nothing and increase gold
	// 		this.image.src = "";
	// 		robinHood.gold += 5;
	// 		document.getElementById("gold-collected").innerHTML = robinHood.gold;	

	// 		// CHANGE TEXT DISPLAY TO GOLD BEFOE DISPLAYING
	// 		document.getElementById("textDisplay").style.color = "goldenRod"; 
	// 		document.getElementById("textDisplay").innerHTML = "You collected " + 5 + " gold!";

	// 		// clear the text display after 3 seconds
	// 		setTimeout(clearDisplay, 3000);
	// 	}
	// }

}
