let stoplight_colors = ["#9B2D1A", "#1A459B", "#1A9B2B"];

function setup(){
    createCanvas(800,600)
    background(100);
}

function draw() {
    // circle(400, 300, 100);
    // console.log(count)
    // fill(stoplight_colors[count]); 
  
    //Set variable count, count until < 3 every frame count + 1
    for (var count = 0; count < 3; count++) {
        //Creates the circle. X, y, radius. 

        //Fill. Searches for the array's colors based on the count. The fill reads the array and looks for a number to use. However, the variable stoplight is looking for whatever number count is one. So the fill is really searching for the number count is on in order to select a color.
        fill(stoplight_colors[count]);  
        
        //draws the circle, Multiplies the count y the y value and then adds it by 100 for balancing. 
        circle(400, count * 200 + 100, 100);
        
    
        //Shows what number count is on in console.log 
        console.log (count);
        
        //Resets the value of count whenever it is 3 or higher than 3. 
        if (count >= 3) {
            count === 0;
        }
  
    }
} 
