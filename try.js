var colours = ["green", "red", "yellow", "blue"];

var sequence = [];

var randomIndex = 0;

var currentLevel = 1;

var count = 0;

// adding event listener to the body to detect first keypresses to start the game
$("body").on("keydown", function(){

  keyEvent();

  $(".btn").on("click", clickEvent);

  function clickEvent(event) {

    // loop to traverse over "sequence" array
    for (let i = count; i < sequence.length;) {

      if (event.target.id === sequence[i]) {

        makeSound(event.target.id);
        buttonBlink(colours.indexOf(event.target.id));

        if (i === sequence.length - 1) {

          randomIndex = randomNumberGenerator();

          setTimeout(function() {

            // increment currentLevel and change heading
            currentLevel++;
            $("h1").text("Level "+currentLevel);

            makeSound(colours[randomIndex]);
            buttonBlink(randomIndex);

          }, 600);

          sequence.push(colours[randomIndex]);
          count = 0;
          break;
        }

        count++;
        break;
      }

      else {

        $("h1").text("Game Over, Press any Key to Restart");
        $("body").addClass("game-over");

        setTimeout(function() {
          $("body").removeClass("game-over");
        }, 200);

        var music = new Audio("sounds/wrong.mp3");
        music.play();

        sequence = [];
        currentLevel=1;

        break;
      }
    }

    $("body").off("click", clickEvent);
  }


});


// adding event listener to buttons to detect clicks



// this function will be triggered in case of clicks


// this function will be triggered when first keypress is made
function keyEvent(event) {

$("h1").text("Level "+ currentLevel);
  randomIndex = randomNumberGenerator();

  // playing sound
  makeSound(colours[randomIndex]);
  buttonBlink(randomIndex);

  sequence.push(colours[randomIndex]);
  $("body").off("keydown", keyEvent);
}


// function to generate a random number
function randomNumberGenerator() {

  // generating a random number from 0-3 when a key is pressed and storing it in randomNum
  var randomNum = Math.floor((Math.random() * 4));
  return randomNum;
}


// function to blink the button
function buttonBlink(Index) {

  // selecting the value on "Index" from array colours and adding class pressed to it
  $("." + colours[Index]).addClass("pressed");

  // removing class pressed after 200 milli seconds
  setTimeout(function() {
    $("." + colours[Index]).removeClass("pressed");
  }, 200);


}

// function to play sound
function makeSound(buttonPressed) {

  switch (buttonPressed) {
    case "green":
      var music = new Audio("sounds/green.mp3");
      music.play();
      break;

    case "red":
      var music = new Audio("sounds/red.mp3");
      music.play();
      break;

    case "yellow":
      var music = new Audio("sounds/yellow.mp3");
      music.play();
      break;

    case "blue":
      var music = new Audio("sounds/blue.mp3");
      music.play();
      break;
    default:
      console.log("hi");

  }

}
