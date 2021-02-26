//Creates a variable to multiply a value. I use it in line 22 to multiply the length of the last rectangle
let multiplier = 3

function setup() {
    createCanvas(800,600);
    //Sets up background
    background(100)
    //Creates function "Draw Table"
    drawTable();
}

//Calls the function on the sunrise
function drawTable(){

    fill("#D58734");

//Creates the pegs for the rectangles. 
 rect(100, 400, 100, 100);
 rect(600, 400, 100, 100);
 
 // Ceates a second rectangle. The head of the table. 
rect(100, 300, 200 * multiplier, 100);
}

