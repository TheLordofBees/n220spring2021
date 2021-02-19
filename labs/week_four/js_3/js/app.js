let eye_color = ["#5BD84D", "#4DA0D8", "#D8854D"]

//Basic Setup. Lines 4-7
function draw() {
    createCanvas(800, 600);

    background(50, 50, 50);


    triangle(265, 320, 400, 500, 535, 320);

    rect(250, 30, 15, 270);

    rect(535, 30, 15, 270)

    fill(100, 200, 300)
    circle(400, 250, 150);

    for(var timer = 0; timer < eye_color.length; timer++){
        fill(eye_color[timer])
    circle(400, 250, 100)

    }
}






