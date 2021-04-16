let inputWords = document.getElementById ("inputWords");
let results = document.getElementById ("results");
let badWords = ["Clear", "Tires", "Water", "clear", "tires", "water"];
let tallyCount = 0 


function calculateWords() {

    let setupString= inputWords.value;

    let sentence = setupString.split(" ");    

    console.log(sentence);

    for (timer = 0; timer < sentence.length; timer++) {

        if(sentence[timer] === badWords[0, 1, 2, 3, 4, 5]) {
            tallyCount = tallyCount + 1
            findingNemo.innerHTML = "found"
           
        } 

        else {
            findingNemo.innerHTML = "Not Found"
            
            tallyCount = 0 
        
        }

        
    }

   
   console.log(tallyCount);
   results.innerHTML = "Total " + tallyCount;
   
}
