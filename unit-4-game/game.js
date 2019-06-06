// charactors
// ###chose
// make an array of object
var pokemon = [
  {
    name: "Pikachu",
    link: "https://wangx733.github.io/bootcamp-HW/unit-4-game/image/1.png",
    HP: 120
  },

  {
    name: "Bulbasaur",
    link: "https://wangx733.github.io/bootcamp-HW/unit-4-game/image/2.png",
    HP: 130
  },

  {
    name: "Mew",
    link: "https://wangx733.github.io/bootcamp-HW/unit-4-game/image/3.png",
    HP: 150
  },

  {
    name: "Eevee",
    link: "https://wangx733.github.io/bootcamp-HW/unit-4-game/image/4.png",
    HP: 190
  }
];


$(document).ready(function () {

  // append elements into the first section
  for (var i = 0; i < pokemon.length; i++) {

    var HP = $("<p>");
    HP.text(pokemon[i].HP)
      .attr("class", "number")
      .attr("id", i);

    var animal = $("<h3>");
    animal.attr("id", "pokemon[i].name")
      .addClass("trigger")
      .text(pokemon[i].name)
      .append($('<img>', { src: pokemon[i].link }))
      .append(HP);

    $("#pics").append(animal);



    // chose charactors----------------

    var chooseMe = animal.on("click", function () {
      $("#reminder").text(" ");
      if ($(".me").hasClass("check") && $("#challenge h3").html() == undefined) {
        // choose my enemy        
        $("#challenge").append(this);
      }
      else if (!$(".me").hasClass("check") && $("#challenge h3").html() == undefined) {

        $(this).removeClass("trigger");
        $("#me").append(this);
        $(".me").addClass("check");
        // / move other roles to anemy place

        $("#pics").attr("id", "enemies");
        $("#enemies h3").addClass("red");
      }
      else {
        // move my role to my place
        $("#button").attr("class", "animation");
      }

    });

  }

  // click to attack


  $("button").on("click", function () {
    $("#button").removeClass("animation");
    // when there is no eneme you cna't hit attack button

    if ($("#challenge h3").html() == undefined) {
      $("#reminder").text("Please choose an enemy");
    } else {
      $("#reminder").text(" ");
      // ME---------------------------

      // find where is your HP
      var numberMe = $("#me h3 p.number");
      // rewrite MY HP
      numberMe.text(Math.max(0, Number(numberMe.text()) - 15));



      // /ATTACKPOINTS DISPLAY-----------
      // displya of attack points you give
      var meAttack = $("#challenge p.notes");
      meAttack.text(Math.max(0, Number(meAttack.text()) + 7));

      // display of number of attack your enemy give
      $("#me  p.notes").text(15);



      // recall attack points I give
      var x = $("#challenge p.notes").html();
      // find where is you enemy's HP in html
      var numberEnemy = $("#challenge h3 p.number");

      // new HP for you enemy
      numberEnemy.text(Math.max(0, Number(numberEnemy.text()) - x));

      if ($("#challenge h3 p.number").html() == 0) {
        $("#challenge h3").remove();
      };






      // result###################################

      // * When the defender's `HP` is reduced to zero or below, remove the enemy from the `defender area`. The player character can choose a new opponent.

      //   The player wins the game by defeating all enemy characters. The player loses the game the game if their character's `HP` falls to zero or below.


      // When the player's HP is reduced to zero, game over


      // condition of winning-------------------------------
      var length = $("#enemies h3").length;
      var eneme = $("#challenge h3 p.number").html();

      if (length == 0 && eneme == undefined) {
        $("#challenge").remove();
        $("#me").remove();
        $("#enemies").remove();
        $("#button").remove();
        $("h2").remove();

        var restart = $("<button>");
        restart.text("play again")
          .attr("id", "restart");

        var gameOver = $("<div>");
        gameOver.text("You win!!!!!!")
          .append(restart)
          .attr("id", "gameOver");



        $("body").append(gameOver);

        $("#restart").on("click", function () {
          location.reload();
        });


      }



      // when you loose-------------------------
      if ($("#me h3 p.number").html() == 0) {

        // remove everything
        $("#challenge").remove();
        $("#me").remove();
        $("#enemies").remove();
        $("#button").remove();
        $("h2").remove();

        var restart = $("<button>");
        restart.text("restart game")
          .attr("id", "restart");

        var gameOver = $("<div>");
        gameOver.text("You Lost T ^ T")
          .append(restart)
          .attr("id", "gameOver");



        $("body").append(gameOver);
        $("#restart").on("click", function () {
          location.reload();
        });
      }

    };


  });






});




