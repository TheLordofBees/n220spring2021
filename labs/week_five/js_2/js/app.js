
let mouse_x = [0, 0, 0]


let mouse_y = [0, 0, 0]

let timer = 0

function setup() {
    createCanvas(1000, 800);
}

function draw() {

    background(150, 90, 200)

    mouse_x.push(mouseX)
    mouse_y.push(mouseY)

    console.log(mouse_x)
    console.log(mouse_y)
    
    
    mouse_y.shift();
    mouse_x.shift();

    fill(0, 0, 0);
    for (var timer = 0; timer < mouse_x.length; ){
        timer = timer + .5;
        circle(mouse_x[timer], mouse_y[timer], 15);}

    if (mouse_y < mouseY + 7); {
        fill(50, 30, 40);

     if (mouse_x < mouseX + 7); {
        fill(50, 30, 40);
        //Been having a hard time figuring this one out. 
     }
    }
}