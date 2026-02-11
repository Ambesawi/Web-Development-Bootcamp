
// ---------------------------------------
// STEP 1: Detecting Button Clicks
// ---------------------------------------

// Select all elements with class "drum"
// querySelectorAll returns a NodeList (like an array)
var numberOfDrumButtons = document.querySelectorAll(".drum").length;


// Loop through each drum button
for (var i = 0; i < numberOfDrumButtons; i++) {

    // Add a click event listener to each button
    document.querySelectorAll(".drum")[i].addEventListener("click", function () {

        // "this" refers to the button that was clicked
        var buttonInnerHTML = this.innerHTML;

        // Call the makeSound function and pass the button letter
        makeSound(buttonInnerHTML);
    });
}


// ---------------------------------------
// STEP 2: Detecting Keyboard Press
// ---------------------------------------

// Add event listener to the whole document
document.addEventListener("keypress", function (event) {

    // event.key gives the key that was pressed
    makeSound(event.key);
});


// ---------------------------------------
// STEP 3: Function to Play Sounds
// ---------------------------------------

function makeSound(key) {

    // We switch based on the key that was passed in
    switch (key) {

        case "w":
            var tom1 = new Audio("sounds/tom-1.mp3");
            tom1.play();
            break;

        case "a":
            var tom2 = new Audio("sounds/tom-2.mp3");
            tom2.play();
            break;

        case "s":
            var tom3 = new Audio("sounds/tom-3.mp3");
            tom3.play();
            break;

        case "d":
            var tom4 = new Audio("sounds/tom-4.mp3");
            tom4.play();
            break;

        case "j":
            var snare = new Audio("sounds/snare.mp3");
            snare.play();
            break;

        case "k":
            var crash = new Audio("sounds/crash.mp3");
            crash.play();
            break;

        case "l":
            var kick = new Audio("sounds/kick-bass.mp3");
            kick.play();
            break;

        default:
            console.log(key); // If key doesn't match any case
    }
}
