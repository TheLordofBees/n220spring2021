dvSquares = document.getElementById("Squares");
let size = 100;
let multiplier = 1; 



dvSquares.style.backgroundColor = "#13B625";

dvSquares.style.width = size * multiplier + "px";

dvSquares.style.height = size * multiplier+ "px";


function grow_sq() {
    size *= 1.1
 
    dvSquares.style.width = size * multiplier + "px";

    dvSquares.style.height = size * multiplier+ "px";

    console.log(size);
   console.log("hi");

 }