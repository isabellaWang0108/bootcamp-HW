

  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyBVWXCoGKAzQyRkm54Dav6_vLtSLLFxwbY",
    authDomain: "rps-omg.firebaseapp.com",
    databaseURL: "https://rps-omg.firebaseio.com",
    projectId: "rps-omg",
    storageBucket: "rps-omg.appspot.com",
    messagingSenderId: "415448638374",
    appId: "1:415448638374:web:65d1047163af748a"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

    var database = firebase.database();

    var RPSresult1="N/A";
    var RPSresult2="N/A"
    var user1win=0;
    var user1lose=0;
    var user2win=0;
    var user2lose=0;
  //  USER1-----------------------------------------
// RPC 
function result(){
  $("#win-user1").text(user1win);
  $("#lose-user1").text(user1lose);
  $("#win-user2").text(user2win);
  $("#lose-user2").text(user2lose);
}
result();

function condition(){
  if((RPSresult1== "rock" && RPSresult2==="scissor")||(RPSresult1=== "scissor" && RPSresult2==="paper")||(RPSresult1=== "paper" && RPSresult2==="rock")){
    user1win ++;
    user2lose++;
    result();
    RPSresult1=== "N/A";
    RPSresult2==="N/A";
  }else if((RPSresult1== "scissor" && RPSresult2==="rock")||(RPSresult1=== "rock" && RPSresult2==="paper")||(RPSresult1=== "paper" && RPSresult2==="scissor")){
  user2win ++;
  user1lose++;
  result();
  RPSresult1=== "N/A";
  RPSresult2==="N/A";
  }else if((RPSresult1=== "scissor" && RPSresult2==="scissor")||(RPSresult1=== "rock" && RPSresult2==="rock")||(RPSresult1=== "paper" && RPSresult2==="paper")){
  RPSresult1=== "N/A";
  RPSresult2==="N/A";
  }
};

  $(".user1").on("click", function() {
// create the text input
// for RPC
        var user1Chosen=$(this).attr("id");  
        RPSresult1=user1Chosen;
        var textInput=$("<div>");
        textInput.text("you choose a "+ RPSresult1)
                 .attr("class","your-text");
        $("#textboxUser1").append(textInput);

       database.ref().on("value",function(snapshot){
          if (snapshot.child("user2Choice").exists()){
            RPSresult2=snapshot.val().user2Choice;
          }
       });  

       condition();
  
       database.ref("/choice1").set({
        user1Choice:user1Chosen
     });     

     console.log(RPSresult1);
     console.log(RPSresult2); 

  });
// text input
$("#submit-user1").on("click",function(){
   event.preventDefault();
    var whatYouTyped=$("#text").val().trim();
    var textInput=$("<div>");
        textInput.text("you: "+whatYouTyped)
                 .attr("class","your-text");               
        $("#textboxUser1").append(textInput);
        $("#text").val(" ");
// store into database
        database.ref().set({
          user1Text: whatYouTyped
        });   
});

  //  USER2-----------------------------------------
  $(".user2").on("click", function() {
    var user2Chosen=$(this).attr("id");  
    RPSresult2=user2Chosen;
    var textInput=$("<div>");
        textInput.text("you choose a "+ RPSresult2)
                 .attr("class","your-text");
        $("#textboxUser2").append(textInput);

         database.ref().on("value",function(snapshot){
          // if user2Text exists push it as them to user 1, nothing as user2
          // if user2 speaks
          if (snapshot.child("user1Choice").exists()){
            
            RPSresult1=snapshot.val().user1Choice;
          }
         });

         condition();
       
         database.ref("/choice2").set({
          user2Choice:user2Chosen
          });
          console.log(RPSresult1);
          console.log(RPSresult2); 

  });

  // text input
$("#submit-user2").on("click",function(){
  event.preventDefault();
   var whatYouTyped=$("#text").val().trim();
   var textInput=$("<div>");
       textInput.text("you: "+whatYouTyped)
                .attr("class","your-text");               
       $("#textboxUser2").append(textInput);
       $("#text").val(" ");
// store into database
       database.ref().set({
         user2Text: whatYouTyped
       });   
});



// 1&2 interaction-------------------------------------------

// print the result to screen




// user 1 text from database
database.ref().on("value",function(snapshot){
  // if user2Text exists push it as them to user 1, nothing as user2
  // if user2 speaks
  if (snapshot.child("user2Text").exists()){


    var whatUser2Say=snapshot.val().user2Text;
    
          var theOtherText=$("<div>");
          theOtherText.attr("class","theOtherText")
                     .text( whatUser2Say +" :Them");
      $("#textboxUser1").append(theOtherText); 

    }else if(snapshot.child("user1Text").exists()){
      var whatUser1Say=snapshot.val().user1Text;
    
      var theOtherText=$("<div>");
      theOtherText.attr("class","theOtherText")
                 .text( whatUser1Say + " :Them");
        $("#textboxUser2").append(theOtherText);         
    }
    
   // RPS thing-=---------------------------------------
  
              

});