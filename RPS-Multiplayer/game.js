

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
  //  USER1-----------------------------------------
// RPC 
  $(".user1").on("click", function() {
    var name=$(this).attr("name");
// create the text input
// for RPC
    var textInput=$("<div>");
        textInput.text("you choose a "+ name)
                 .attr("class",".your-text");               
        $("#textbox").append(textInput);


        var user1Chosen=$(this).attr("id");  
        var choiceOf1=user1Chosen;
// store into data
    database.ref().set({
      user1Choice: choiceOf1
    });
  });
// text input
$("#submit-user1").on("click",function(){
   event.preventDefault();
    var whatYouTyped=$("#text").val().trim();
    var textInput=$("<div>");
        textInput.text("you: "+whatYouTyped)
                 .attr("class",".your-text");               
        $("#textbox").append(textInput);
        $("#text").val(" ");
// store into database
        database.ref().set({
          user1Text: whatYouTyped
        });   
});

  //  USER2-----------------------------------------
  $(".user2").on("click", function() {
    var name=$(this).attr("name");

    var textInput=$("<div>");
        textInput.text("you choose a "+ name)
                 .attr("class",".your-text");
        $("#textbox").append(textInput);


        var user2Chosen=$(this).attr("id");  
        var choiceOf2=user2Chosen;

    database.ref().set({
      user2Choice: choiceOf2
    });
  });

  // text input
$("#submit-user2").on("click",function(){
  event.preventDefault();
   var whatYouTyped=$("#text").val().trim();
   var textInput=$("<div>");
       textInput.text("you: "+whatYouTyped)
                .attr("class",".your-text");               
       $("#textbox").append(textInput);
       $("#text").val(" ");
// store into database
       database.ref().set({
         user2Text: whatYouTyped
       });   
});



// 1&2 interaction-------------------------------------------

// user 1 text from database
database.ref().on("value",function(snapshot){

    var whatUser2Say=snapshot.val().user2Text
    if(whatUser2Say!=="undefined"){
          var theOtherText=$("<div>");
          theOtherText.attr("class","theOtherText")
                     .text("Them: "+ whatUser2Say);
      $("#textbox").append(theOtherText); 
    }else{
      $("#textbox").append("'please make valid input'"); 
    }
              
})

  // // MAIN PROCESS + INITIAL CODE
  // // --------------------------------------------------------------------------------

  // database.ref().on("value", function(snapshot) {
  //   console.log(snapshot.val());

  //   clickCounter = snapshot.val().clickCount;

  //   $("#click-value").text(snapshot.val().clickCount);
  // }, function(errorObject) {
  //   console.log("The read failed: " + errorObject.code);
  // }); ------->