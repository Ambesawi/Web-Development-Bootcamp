// this is a function calld move suitcase
function moveSuitcase {
    alert("May I take your suitcase?");
    pickUpSuitcase();
    moveBy();
}

// if we want to have object assosiated with function
// now our bellBoy1 has a method  a function that assosiated with an object

var bellBoy = {
    name: "Timmy",
    age: 19,
    hasWorkPermit: true,
    languages: ["French", "English"],
    moveSuitcase: function () {
        alert("May I take your suitcase?");
        pickUpSuitcase();
        moveBy();
    }
}

// call a method 
bellBoy.moveSuitcase();

// if we want to do our method in to our constructive function
function BellBoy (name, age, hasWorkPermit, languages){
    this.name = name;
    this.age = age;
    this.hasWorkPermit = hasWorkPermit;
    this.languages = languages;
    this.moveSuitcase +function(){
        alert("May I take your suitcase?");
        pickUpSuitcase();
        move();
    }
}