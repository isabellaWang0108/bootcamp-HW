// create a list of object to store the question, choice and right answer
var questions=[
	{
	 question:"How do you know your parakeet is sick?",
     choice1:"grooming themselve",
     choice2:"screaming",
     choice3:"sitting on the bottom of the habitat",
     answer:3
     },
       {
	 question:"what's the best way to tame your parakeet?",
     choice1:"feed them",
     choice2:"kill them",
     choice3:"beat them",
     answer:1
     },
     	{
	 question:"which of the following parakeets is the most aggressive one?",
     choice1:"male parakeet",
     choice2:"female parakeet",
     choice3:"transgender parakeet",
     answer:2
     },
     	{
	 question:"how do you know your parakeet likes you?",
     choice1:"bite you",
     choice2:"fly to you",
     choice3:"scream at you",
     answer:2
     },
     	{
	 question:"are parakeets lovely?",
     choice1:"yes",
     choice2:"no",
     choice3:"no",
     answer:1
     },
     {
   
     }
];

var indexOfQuestion=0;

var theQuestion=questions[indexOfQuestion].question;
var answerOne=questions[indexOfQuestion].choice1;
var answerTwo=questions[indexOfQuestion].choice2;
var answerThree=questions[indexOfQuestion].choice3;
var rightOne=questions[indexOfQuestion].answer;
var time=10;
var myInterval;
var myTimeout;
var right=0;
var wrong=0;




// let the object runs one by one

// print the time on screen
function printTime(){
	myInterval=setInterval(function(){
		time --;
	    $("#time").html(time);
	}, 1000);
};


printTime();
// append question and choices to html
function printQuestion(){

	$("#question").text(theQuestion);

	$("#answer1").text("-"+answerOne)
				 .attr("value",1);
    $("#answer2").text("-"+answerTwo)
    			 .attr("value",2);
    $("#answer3").text("-"+answerThree)
    			 .attr("value",3);

  

};
printQuestion();



// set a timeout for the question
// if time's out clean the questions and show time out and move to the next question
function clean(){
		$("#question").text(" ");

	    $("#answer1").html(" ");
    	$("#answer2").html(" ");
    	$("#answer3").html(" ");
    	$("#time").text(" ");
};

function TheEnd(){
// if user has gone through all the questions, the page shows show the number of correct answers, incorrect answers, 
// and an option to restart the game
// if user hit the restart button, the list of object will run from the beginning

		clean();
		$("#transition").text("Game Over");
		$("#wrong").text("wrong"+wrong);
		$("#right").text("right"+right);
		clearTimeout(myTimeout);
		clearInterval(myInterval);	
		var button=$("<button>");
			button.attr("id","button")
				  .text("restart");
		$("#restart").append(button);
		$("#button").on("click",function(){
			 time=10;
			 right=0;
			 wrong=0;
			 indexOfQuestion=0;
			 theQuestion=questions[indexOfQuestion].question;
    		 answerOne=questions[indexOfQuestion].choice1;
    		 answerTwo=questions[indexOfQuestion].choice2;
     		 answerThree=questions[indexOfQuestion].choice3;
     		 rightOne=questions[indexOfQuestion].answer;
     		$("#transition").text(" ");
		    $("#wrong").text(" ");
		    $("#right").text(" ");
     		 printQuestion();
		 	 timeout();
		 	 printTime();
		 	 $("#restart").empty();

		});		  
	};



function timeout(){

	myTimeout=setTimeout(function(){
		if(indexOfQuestion===4){
        	TheEnd()
        }else{
        	clean();
			time=10;
			indexOfQuestion++;
        	wrong++;
        	theQuestion=questions[indexOfQuestion].question;
        	answerOne=questions[indexOfQuestion].choice1;
			answerTwo=questions[indexOfQuestion].choice2;
			answerThree=questions[indexOfQuestion].choice3;
			rightOne=questions[indexOfQuestion].answer;
       		 wrongTrans();
			clearTimeout(myTimeout);
			clearInterval(myInterval);
		}
	},10000);

};
timeout();

function rightTrans(){
	$("#transition").text("congrats!!!!");
	    setTimeout(function(){
		$("#transition").text(" ");
		printQuestion();
		time=10;
		// refresh time here
		 timeout();
		 printTime()
	},1000);
}
        
function wrongTrans(){
		$("#transition").text("sorry this is wrong");
	    setTimeout(function(){
		$("#transition").text(" ");
		printQuestion();
		time=10;
		// refresh time here
		timeout();
		printTime()
	},1000);
}   
 

     
// when users choose the answer, it takes in an input


$("a").on("click",function(){
	clearTimeout(myTimeout);
	clearInterval(myInterval);	
	var value =$(this).attr("value");
// check whether user input equals to the value of right answer and returns a boolean

// if the boolean is true, remove the questions and print the congrats 
// and right answer +1
console.log(indexOfQuestion);

	if(value==rightOne){
		console.log(indexOfQuestion);
        clean();
        right++;
        // then move to the next question
        if(indexOfQuestion===4){
        	TheEnd()
        }else{
        	indexOfQuestion += 1;
            theQuestion=questions[indexOfQuestion].question;
        	answerOne=questions[indexOfQuestion].choice1;
			answerTwo=questions[indexOfQuestion].choice2;
			answerThree=questions[indexOfQuestion].choice3;
		 	rightOne=questions[indexOfQuestion].answer;
        rightTrans();
        }


	}
// else if the boolean is wrong,or time out, remove the questions and print the congrats  print the wrong. 
// and wrong answer +1
   	else{
   		
   		clean();
   		wrong++;
   		// then move to the next question
   		if(indexOfQuestion===4){
        	TheEnd()
        }else{
   			indexOfQuestion += 1;
   			theQuestion=questions[indexOfQuestion].question;
        	answerOne=questions[indexOfQuestion].choice1;
			answerTwo=questions[indexOfQuestion].choice2;
			answerThree=questions[indexOfQuestion].choice3;
		 	rightOne=questions[indexOfQuestion].answer;
		 	wrongTrans();

	     };


	 }
});

















