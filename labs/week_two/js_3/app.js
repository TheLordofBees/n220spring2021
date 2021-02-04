let circleR = 0;

function setup() {
    createCanvas(800, 600);
  
}
function draw() {
    background(79, 202, 240);

    circleR = circleR + 1;

    fill(198, 79, 240);
    circle(400, 300, circleR);

    if (circleR >= 200) {
        circleR = 0;
        }

}