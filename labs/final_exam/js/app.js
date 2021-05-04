//This conencts the scoreboard to java so I can edit the score within Java
let score = document.getElementById("score")
// The points variable is to keep track of how many points you get during the game, I keep it at zero here to allow the inner.html for the "score" to read zero at the start. 
let points = 0
//A little easter egg code I hid for how many clicks there were. 
let clicks = 0 

//This is the smallest target, I made the x and the y of the circle a variable so that I can make it so the "Hero" has to hit a specific x and y value. All the variables involving speed modifier and target are all respective to each of their targets, but they all act in the same way. 
let speed_modifier_1 = 15
let target_1_x = 300
let target_1_y = 50

let speed_modifier_2 = 10
let target_2_x = 300
let target_2_y = 200

let speed_modifier_3 = 5
let target_3_x = 300
let target_3_y = 350



//This is the object I used for the hero. I didn't have much experience with using objects in code, but this turned out to be a million times easier than making the projectile another circle through just regular variables much like the targets. Although I could also have the targets be objects too if I rewrote a few things. 
var hero = {

  speed: 5,
  x: 300,
  y: 750, 
  r: 10,
  color: [300, 50, 20],

  update: function () {
      fill(this.color);
    this.y -= this.speed
  circle(this.x, this.y, this.r);

  if (this.y < 0) {

    this.y = 750
  }
  //These three if statements look for the x and y value of the targets and see if it matches the x and y value of the projectile. If it does, It adds the respective amount of points to the list, console logs how many points there are, then moves the target to the right by its speed modifier. 
  if (this.y === target_1_y && this.x === target_1_x) {
      points = points + 50;
      console.log(points);
      target_1_x = target_1_x + speed_modifier_1;

  }

  if (this.y === target_2_y && this.x === target_2_x) {
      points = points + 30;
      console.log(points);
      target_2_x = target_2_x + speed_modifier_2;

  }

  if (this.y === target_3_y && this.x === target_3_x) {
      points = points + 10;
      console.log(points);
      target_3_x = target_3_x + speed_modifier_3;

  }

 

}
}




function draw() {

 //Creates parameters of the game
createCanvas(600,800);

//Purple background for space theme 
background(26, 4, 51);

//Creates the Targets
circle(target_1_x, target_1_y, 20);

circle(target_2_x, target_2_y, 30);

circle(target_3_x, target_3_y, 40);

hero.update();

//Replaces the text box with a score indicator
score.innerHTML = "Your Score is;" + " " + points;


}

//A simple function to move the hero's x value when the button left by moving the x down by 5 whenever it is pressed
function b_left() {
hero.x = hero.x - 5

}
//Similar to the left one, but adding 5 to the x value of hero.x to move it along. 
function b_right() {
hero.x = hero.x + 5
}

//This links to the button "Reset in HTML" The reset button doesn't refresh the page, but instead takes any value that would've been altered during the game and sets it back to its original value. 
function reset() {
    //Sets points to 0 
points = 0 
//Console log for safety
console.log(points);

//All three of the targets keep their x value 
target_1_x = 300;
target_2_x = 300;
target_3_x = 300;

//Moves the Hero back to the original position. 
hero.y = 800; 
hero.x = 300; 

//Sets clicks to 0 
clicks = 0; 
}

//Tracks how many clicks you have done. Something fun I added, I was having fun with this code. 
function mousePressed() {

clicks = clicks + 1; 
console.log(" CLicks =" + " " + clicks);
}

