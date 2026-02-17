//
//adding class to h1 form css file
// $("h1").addClass("big-title"); 

// changing the text of h1 element on the fly
// $("h1").text("Bey");

// changing the text of all buttons on the fly
// $("button").text("maki");

// changing the color of  h1  in vanililla js and jQuery
// document.querySelector("h1").style.color = "red";
// $("h1").css("color", "red");

// using event listner to chang on click thr colour of h1
// $("h1").click(function(){
//     $("h1").css("color", "purple");
// });

// using keypress changing the h1 contrnt with the keystok of the keybord 
// $(document).keypress(function(event) {
//     $("h1").text(event.key);
// });

//using onmouse over
$("h1").on("mouseover", function(){
    $("h1").css("color", "purple")
}); 
