/*********************************************************************/
/* 1️⃣ Adding a CSS Class to <h1>                                    */
/*********************************************************************/

// ✅ Vanilla JS
document.querySelector("h1").classList.add("big-title");

// ✅ jQuery
$("h1").addClass("big-title");


/*********************************************************************/
/* 2️⃣ Removing a CSS Class from <h1>                                 */
/*********************************************************************/

// ✅ Vanilla JS
document.querySelector("h1").classList.remove("big-title");

// ✅ jQuery
$("h1").removeClass("big-title");


/*********************************************************************/
/* 3️⃣ Toggling a CSS Class on <h1>                                   */
/*********************************************************************/

// ✅ Vanilla JS
document.querySelector("h1").classList.toggle("big-title");

// ✅ jQuery
$("h1").toggleClass("big-title");


/*********************************************************************/
/* 4️⃣ Changing Text of <h1>                                           */
/*********************************************************************/

// ✅ Vanilla JS
document.querySelector("h1").textContent = "Hello World";

// ✅ jQuery
$("h1").text("Hello World");


/*********************************************************************/
/* 5️⃣ Changing Text of All Buttons                                    */
/*********************************************************************/

// ✅ Vanilla JS
var allButtons = document.querySelectorAll("button");
for (var i = 0; i < allButtons.length; i++) {
    allButtons[i].textContent = "Click Me";
}

// ✅ jQuery
$("button").text("Click Me");


/*********************************************************************/
/* 6️⃣ Changing CSS Styles                                             */
/*********************************************************************/

// ✅ Vanilla JS
document.querySelector("h1").style.color = "red";

// ✅ jQuery
$("h1").css("color", "red");


/*********************************************************************/
/* 7️⃣ Click Event to Change CSS Color                                 */
/*********************************************************************/

// ✅ Vanilla JS
document.querySelector("h1").addEventListener("click", function() {
    this.style.color = "purple";
});

// ✅ jQuery
$("h1").click(function() {
    $(this).css("color", "purple");
});


/*********************************************************************/
/* 8️⃣ Keypress / Keydown Event to Change <h1> Content Dynamically     */
/*********************************************************************/

// ✅ Vanilla JS
document.addEventListener("keydown", function(event) {
    document.querySelector("h1").textContent = event.key;
});

// ✅ jQuery
$(document).keydown(function(event) {
    $("h1").text(event.key);
});


/*********************************************************************/
/* 9️⃣ Manipulating Attributes (example: changing image source)       */
/*********************************************************************/

// ✅ Vanilla JS
document.querySelector(".img1").setAttribute("src", "images/dice3.png");

// ✅ jQuery
$(".img1").attr("src", "images/dice3.png");


/*********************************************************************/
/* 🔟 Removing an Attribute                                           */
/*********************************************************************/

// ✅ Vanilla JS
document.querySelector("input").removeAttribute("disabled");

// ✅ jQuery
$("input").removeAttr("disabled");
