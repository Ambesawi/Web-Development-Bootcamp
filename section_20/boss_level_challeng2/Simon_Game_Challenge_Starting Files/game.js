
var gamePattern = [];
var buttonColours = ["red", "blue", "green", "yellow"];

function nextSequence(){
    //  generate a new random number between 0 and 3
    var randomNumber = Math.floor(Math.random() * 4);

    //  select a random colour from the buttonColours array.
    var randomChosenColour = buttonColours[randomNumber];

    // Add the new randomChosenColour generated in step 4 to the end of the gamePattern.
    gamePattern.push(randomChosenColour)


    console.log(randomNumber);
}


