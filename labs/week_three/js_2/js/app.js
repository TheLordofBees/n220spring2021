function setup() {

    createCanvas(700, 600);

}
function draw() {
    background(154, 151, 154);

    noFill();

    for( var circle_size = 0; circle_size < 70; circle_size++) {
        circle(348, 300, circle_size * 5);
 
    
    }
    console.log(circle_size); 
}




