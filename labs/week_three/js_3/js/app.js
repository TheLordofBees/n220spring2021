function setup(){

createCanvas(800, 600);


    for (var x_position = 0; x_position < 4; x_position++) {
        //x position will always increase until 4 
        for(var y_position = x_position; y_position < 4; y_position++) {
        //Y position follows the same protocol. Both start at 0, then 1, then 22. 
        
     fill(165, 33, 198);
        rect(60 * x_position, y_position * 60, 60, 60);
    
        console.log(x_position);
    }
}
}