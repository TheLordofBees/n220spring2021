let inputWords = document.getElementById ("inputWords");
let results = document.getElementById ("results");
let badWords = ["Clear", "Tires", "Water", "clear", "tires", "water"];
let tallyCount = 0 


function calculateWords() {

    let setupString= inputWords.value;

    let sentence = setupString.split(" ");    

    var search = sentence.find("water") 
       
        

    
    var inclusion = sentence.includes("water");
    
    console.log ("inclusion")






    console.log(sentence);
   console.log(tallyCount);
   results.innerHTML = "Total " + tallyCount;
   
}
