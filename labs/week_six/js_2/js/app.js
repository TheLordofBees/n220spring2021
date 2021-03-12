//Creates Object Comp Circle.
let compCircle = {

    //Sets a trait, "x" to be 400

    x: 400,

    //Sets a trait, "y" to be 300

    y: 300,

    //Sets a trait, "r" to be 20

    r: 20,

    //It's important to remember these traits don't actually apply to a circle automatically, but instead work as a variable. So instead of having a variable "compCircleX,Y, R, and Color, we instead can define these traits here."

    color: [400, 100, 300],

    //This allows us to alter the properties like we would in draw, but instead we can put them in the object itself that way we only have to tell the draw function to read the "update"

    update: function () {

        //"This" is a way of referring to the object instead of writing the name over and over. Keeps code clean and concise. The Lines below read and update the values of the object above as if we're changing them in a function. 

    fill(this.color);

    this.x += 2;

    this.y -= 1;

    this.r += 2;

    circle(this.x, this.y, this.r);
    

    }
}

//This is the same concept as above, with a few tweaks to its values and the opposite directional output, except for r because then the object gets smaller than larger, an interesting phenomenon I found while playing with the code. 

let compOppCircle = {

    x: 360,

    y: 320,

    r: 25,

    update: function () {

        this.x -= 2;

        this.y += 1;

        this.r += 2;

        circle(this.x, this.y, this.r);
    }
}

function setup() {

    createCanvas(800, 600);

    background(100);

}

// Here the draw looks at the updated objects and draws them multiple times over, making it look like the circles are getting larger, and pulling across their respectives sides, in reality the x and y are moving while the r is getting larger, making it move away as well as get bigger instead of just growing in size, this is why the black shows up in the composition and not just the purple, that's the outline of all the circles that have been drawn. 

function draw() {
    compCircle.update();

    compOppCircle.update();
   
}

