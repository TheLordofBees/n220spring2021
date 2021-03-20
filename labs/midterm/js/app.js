//This is an array that recieves the coordinate of the mouse's X value, it's used to allow the function of drawing a circle to read what the x value of the mouse is. Without it, the circle can't actually register the mouse's x. The same goes with mouse_Y. Time is set to establish it later on and to keep it at a constant value so it only reads whatever the first value is on Mouse_X and Mouse_Y 

let mouse_X = [0];

let mouse_Y = [0];

let time = [0];



//This is a classic setup, but, this also allows me to check if the code is linked properly between index.html and app.js with the use of the background color and canvas. If it shows up, I know it's functional. If not, I go into the console to see if its an error with the link or an error with the syntax.
function setup() {

    createCanvas(800, 600);

//    background(100);
   //This background is later moved to function draw so only the circle remains 
}


function draw() { 
    //Background is here to prevent too many circles. If it's in function setup, the background won't redraw over the circles.
    background (100);

    //Creates the color of the circles
    fill(100, 10, 300);

    //This takes whatever your current value of x is on your mouse (As in where your mouse is horizontal wise on the screen, and sends that coordinate to the Array Mouse_X. )

    mouse_X.push(mouseX);

    //The same goes with y, this command takes whatever the vertical value of your mouse is and sends the coordinate the the array Mouse_Y. The reason I have these separate is so the mouse can read both horizontal and vertical values. Without one your circle will either only move left to right, or up to down. 

    mouse_Y.push(mouseY);


    //This was used to help me understand if the values were actually sending to the computer. It told me that it was actually reading and pushing the mouse_x and mouse_y respectively. 

    console.log (mouse_X);

    console.log (mouse_Y);

    //This works in tandem with push, If you don't have shift, the array will get overloaded and cause your computer to crash. In short, the array deleted old data in the arrays "mouse_X and mouse_Y " So nothing crashed

    mouse_X.shift();
    mouse_Y.shift();


    //These if statements were fill commands that reads if the mouseX is at a certain distance it will change color. It only changes color based on where your mouse is and not where the circles are unfortunately. 

   if (mouseX > 200) {

       fill(100, 70, 300);
   }

   if (mouseX > 400) {

       fill(100, 200, 300);
   }

   //The for loop is used to read what part of the array the circle should be looking for. In this case, time was used to keep track of that number. Time will always tell the circles to read the first or 0's value on the array so it actually tracks the mouse.  

    for (var time = 0; time < 1; time++) {

        //Makes sure time is working. 

        console.log (time);

        //These are all the same circle, they take the mouse X and the mouse Y based on what value is on the array. Because push sent the current location of the mouse's x and y, the circle appears to follow the mouse, but it's actually following a variable that reads the coordinates of the mouse. For each new circle, I added two modifiers. One for the distance of x which I multiplied by 1 + .2 for each new circle so the circles on screen looked like they went further based on how far to the right your mouse is. 

        circle (mouse_X[time], mouse_Y[time], 20 * mouse_X / 110 ); 

        circle (mouse_X[time] * 1.2, mouse_Y[time], 20*mouse_X / 100); 

        circle (mouse_X[time] * 1.4, mouse_Y[time], 20*mouse_X / 90); 

        circle (mouse_X[time] * 1.6, mouse_Y[time], 20*mouse_X / 80); 

        circle (mouse_X[time] * 1.8, mouse_Y[time], 20*mouse_X / 70); 

        circle (mouse_X[time] * 2, mouse_Y[time], 20*mouse_X / 68); 

        circle (mouse_X[time] * 2.2, mouse_Y[time], 20*mouse_X / 66); 

        circle (mouse_X[time] * 2.4, mouse_Y[time], 20*mouse_X / 64); 

        circle (mouse_X[time] * 2.6, mouse_Y[time], 20*mouse_X / 62); 

        circle (mouse_X[time] * 2.8, mouse_Y[time], 20 * mouse_X / 60); 

    }

    
   
}

