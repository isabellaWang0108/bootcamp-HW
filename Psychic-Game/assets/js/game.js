//  Use key events to listen for the letters that your players will type.


//  Press any key to get started!
var arrey=[];
document.addEventListener("keydown", function(){
  var code=event.which;

   document.getElementById("begin").style.display = "none";

   document.getElementById("section").style.display = "block";
   var key=event.key;

  // make sure the input values are only letters
  
   if(code>=65 && code<=90){
   	arrey.push(key);
   }
   else{
   	return 1;
   }

//  Wins: (# of times user guessed the word correctly).

var win=0;
 document.getElementById("wins").innerHTML = "Wins: "+ win;

//    If the word is `madonna`, display it like this when the game starts: `_ _ _ _ _ _ _`.

// all words in the game
  var color=["green","red","purple"];

//specify which word according to wins
  var i=win;
  var words=color[i];  
	     
  var wordArrey=[];
//all letters in words
	  for(var j=0;j<words.length;j++){
		  var letter=words[j];
		  if(key==letter){
		  	wordArrey.push(letter);
		  }else{
		  	wordArrey.push("_");
		  }

	      

// write word to document
 document.getElementById("currentWord").innerHTML = "word: " + wordArrey;
  
    
}



//    * As the user guesses the correct letters, reveal them: `m a d o _  _ a`.

//  Number of Guesses Remaining: (# of guesses remaining for the user).
var remain= 11-arrey.length ;
document.getElementById("remain").innerHTML = "Number of Guesses Remaining: " + remain;

//  Letters Already Guessed: (Letters the user has guessed, displayed like `L Z Y H`).
var display=arrey
document.getElementById("guessed").innerHTML = "Letters Already Guessed: " + arrey;


//  After the user wins/loses the game should automatically choose another word and make the user play it.
});