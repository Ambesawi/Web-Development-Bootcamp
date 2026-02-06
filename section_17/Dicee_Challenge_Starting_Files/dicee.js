
// this id for randomly genarationg of tie numbers from 1 to 6
randomNumber1 = Math.floor(Math.random() * 6) + 1;
randomNumber2 = Math.floor(Math.random() * 6) + 1;

// this is for create the path dynamically
var randomDiceImage1 = "images/dice" + randomNumber1 + ".png";
var randomDiceImage2 = "images/dice" + randomNumber2 + ".png";

// This selects only the element with class img1
var leftImage = document.querySelector(".img1");
leftImage.setAttribute("src", randomDiceImage1);

// This selects only the element with class img2
var righImage = document.querySelector(".img2");
righImage.setAttribute("src", randomDiceImage2);

// Change the text in the h1
if (randomNumber1 === randomNumber2) {
    document.querySelector("h1").innerHTML = "Drew !";
}
else if (randomNumber1 > randomNumber2) {
    document.querySelector("h1").innerHTML = "Player1 Wins";
}
else {
    document.querySelector("h1").innerHTML = "Player2 Wins";
}