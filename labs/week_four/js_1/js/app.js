let colors = [ "#9969E4", "#C65F31", "#D8C6BB"]

function setup() {

createCanvas(800, 600);


for (var timer = 0; timer < colors.length; timer++) {
    rect(100 * timer, 30, 100, 100);

    fill(colors[timer]);
    

}
}



