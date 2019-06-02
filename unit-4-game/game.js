// charactors
// ###chose
// make an array of object
var pokemon=[
   {
    name:"Pikachu",
    link:"https://wangx733.github.io/bootcamp-HW/unit-4-game/image/1.png",
    HP:"120"
    },

   {
    name:"Bulbasaur",
    link:"https://wangx733.github.io/bootcamp-HW/unit-4-game/image/2.png",
    HP:"100"
   },

  {
    name:"Mew",
    link:"https://wangx733.github.io/bootcamp-HW/unit-4-game/image/3.png",
    HP:"150"
   },

   {
    name:"Eevee",
    link:"https://wangx733.github.io/bootcamp-HW/unit-4-game/image/4.png",
    HP:"180"
   }
];

// chose anyone of them to be you
$(document).ready(function() {

 // append elements into the first section
      for(var i=0; i<pokemon.length; i++){

             var HP=$("<p>");
             HP.text(pokemon[i].HP);

            var animal=$("<h3>");
             animal.attr("id","pokemon[i].name")
                    .addClass("trigger")
                   .text(pokemon[i].name)
                   .append($('<img>',{src:pokemon[i].link}))
                   .append(HP);

             $("#pics").append(animal);
    

          


            var chooseMe= animal.on("click", function(){
               if($(".me").hasClass("check")){
        // choose my enemy        
                     $("#challenge").append(this);
               }else{
      // move my role to my place
                    $(this).removeClass("trigger");
                    $("#me").append(this);
                    $(".me").addClass("check");
      // move other roles to anemy place
                    
                    $("#pics").attr("id","enemies");
                    }
             });   

    }
// click to attack
           
      $("button").on("click", function(){

        
        console.log($("#me").html().p)
      })



});

// choose anemy from the remaining three











// ###attack
//  * The player will now be able to click the `attack` button.

//  * Whenever the player clicks `attack`, their character damages the defender. The opponent will lose `HP` (health points). These points are displayed at the bottom of the defender's picture.


// Each time the player attacks, their character's Attack Power increases by its base Attack Power. 
//   * For example, if the base Attack Power is 6, each attack will increase the Attack Power by 6 (12, 18, 24, 30 and so on).


//  * The opponent character will instantly counter the attack. When that happens, the player's character will lose some of their `HP`. These points are shown at the bottom of the player character's picture.
//     The player will keep hitting the attack button in an effort to defeat their opponent.




// ###result
// * When the defender's `HP` is reduced to zero or below, remove the enemy from the `defender area`. The player character can choose a new opponent.

//   The player wins the game by defeating all enemy characters. The player loses the game the game if their character's `HP` falls to zero or below.


// When the player's HP is reduced to zero, game over