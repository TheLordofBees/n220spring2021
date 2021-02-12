function setup() {

    createCanvas(800, 600);

}

function draw() {

    noFill(); 

    for( var number = 0; number < 25; number++) {
        // This code says that if the number by 3 = 0 and if 5 = 0 it will become a blue square
        if( number % 3 === 0 && number % 5 === 0) {
            //creates blue 
            fill(45, 148, 193);
            //square. -5 to scoot to the left. 
            rect((number * 26) - 5, 40, 20, 20);
         } 
         //If number is divisble by only 3 and it goes to 0 it will create a purple circle .
         else if( number % 3 === 0) {
            //creates purple
            fill(164, 45, 193 );
            //circle
            circle(number * 26, 50, 12);

         }

         // Changes to green square if divisible by only 5.
         else if( number % 5 === 0) {
            //creates green
             fill(85, 195, 57);
            //square. -10 to scoot it left
             rect((number * 26) - 10, 40, 20, 20);

         }

         //catches any the variable is divisible by 3, 5, or both. 
         else {
            //creates base color
             fill(48, 46, 49);
            //circle
             circle(number * 26, 50, 10);

         }


        

    }
}
