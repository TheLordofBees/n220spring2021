
let moveCircle = {

    x: 400,

    y: 300,

    r: 60,

    color: [166, 52, 213]

}

function setup() {

    createCanvas(800, 600);
    background(100);

}


function draw() {
    fill(moveCircle.color);
    moveCircle.x -= 1;
    moveCircle.y += 2;
    moveCircle.r += 0.5;
    circle(moveCircle.x, moveCircle.y, moveCircle.r);


}