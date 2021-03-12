
let ourCircle = {

    x: 300,

    y: 300,

    r: 45,

    color: [156, 112, 213]

}

function setup() {

    createCanvas(800, 600);
    background(100);

}


function draw() {
    fill(ourCircle.color);
    circle(ourCircle.x, ourCircle.y, ourCircle.r);

}