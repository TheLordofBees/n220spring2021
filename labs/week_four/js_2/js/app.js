//Array 1 reads X value. 

let mouse_position_x = []

//Array 2 reads Y value

let mouse_position_y = []

function setup() {
    createCanvas(800, 600);
}
//Sends the mouse position to the arrays

function draw() {

    background(150, 100, 150)

    mouse_position_x.push(mouseX)
    mouse_position_y.push(mouseY)

    //Console Log for good measure

    console.log(mouse_position_x)
    console.log(mouse_position_y)
    

    //If it hits a certiain length, cut it off. Flexbile for change. 

    if (mouse_position_x.length > 10) {
        mouse_position_x.shift();

    }

    if (mouse_position_y.length > 10) {
        mouse_position_y.shift();
    }

    //Nested for Var, Uses a timer to change the mouse position variables. not going to lie, this is the most fun I've ever had with code because this program is just beautiful. 

    for (var timer = 0; timer < mouse_position_x.length; timer++){
        circle(mouse_position_x[timer], mouse_position_y[timer], 20);}
}