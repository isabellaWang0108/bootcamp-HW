//  Use key events to listen for the letters that your players will type.


//  Press any key to get started!
var arrayInput=[];
var win=0;
var z=0;

document.addEventListener("keydown", function(){
  var code=event.which;

   document.getElementById("begin").style.display = "none";

   document.getElementById("section").style.display = "block";
   var key=event.key;

  // arrey of user input

   if(code>=65 && code<=90 && !arrayInput.includes(key.toUpperCase())){

   	arrayInput.push(key.toUpperCase());

   }
   else{
   	return 1;
   }
    
  


 
// all words in the game
   var color=["green","red","purple","blue","brown","grey","pink","yellow","white"];
   var words=color[z]; 

   var output=[];
//all letters in words
	  for(var i=0;i<words.length;i++){
	     	
		    var letter=words[i];
		    output.push("_")
// compare the wordArray with arrayInput

   			for(var j=0;j<arrayInput.length;j++){

   //   if the input contains the word's letter,
 // display the word
 // else display  `_ `.
			 var inputLetter=arrayInput[j];

			 if(inputLetter.toLowerCase()==letter){	
   			  	output.splice(i,1,inputLetter.toLowerCase())
   			  }
   			}


   		}	  
// one win when you fill out letters
// move on to the next word if you win
 	if(!output.includes("_")){
 		arrayInput=[];
 		win +=1;
 		z += 1 ;
 	// get color change when it's document
 		document.getElementById("color").style.background = words;
    } 

// reset background color
	if(arrayInput.length===1){
		document.getElementById("color").style.background = "white";
	}
 // move on when you fail

 	if(arrayInput.length>=9){
 		z +=1 ;
 		arrayInput=[];

	}

// write word to document
 	document.getElementById("currentWord").innerHTML = "word: " + output;
  
    


  document.getElementById("wins").innerHTML = "Wins: "+ win;

//  Number of Guesses Remaining: (# of guesses remaining for the user).
	var remain= 10-arrayInput.length ;
	document.getElementById("remain").innerHTML = "Number of Guesses Remaining: " + remain;

//  Letters Already Guessed: (Letters the user has guessed, displayed like `L Z Y H`).
	document.getElementById("guessed").innerHTML = "Letters Already Guessed: " + arrayInput;


//  After the user wins/loses the game should automatically choose another word and make the user play it.
});