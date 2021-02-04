let circleX = 0;

function setup() {
    createCanvas(800, 600);
  
}

function draw() {
    background(79, 202, 240);

    circleX = circleX + 5;

    fill(198, 79, 240);
    circle(circleX, 300, 20);

    console.log(circleX)

    if (circleX >= 800) {
        circleX = 0;
        }
}

if (circleX >= 800) {
    circleX = 0;
    }

