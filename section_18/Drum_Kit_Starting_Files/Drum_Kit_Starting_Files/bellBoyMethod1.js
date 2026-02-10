// ==================================
// OBJECTS, METHODS, AND DOT NOTATION
// ==================================


// ----------------------------------
// NORMAL FUNCTION (NOT inside object)
// ----------------------------------

// This is a regular function.
// It is NOT associated with any object.
function moveSuitcase() {
    alert("May I take your suitcase?");
    pickUpSuitcase();   // Assumes this function exists elsewhere
    moveBy();           // Assumes this function exists elsewhere
}


// ----------------------------------
// OBJECT WITH A METHOD
// ----------------------------------

// If we want a function to be associated with an object,
// we put that function INSIDE the object.
// When a function belongs to an object, it is called a METHOD.

var bellBoy = {
    name: "Timmy",                 // Property: string
    age: 19,                       // Property: number
    hasWorkPermit: true,           // Property: boolean
    languages: ["French", "English"], // Property: array

    // Method: function associated with this object
    moveSuitcase: function () {
        alert("May I take your suitcase?");
        pickUpSuitcase();          // Uses external function
        moveBy();                  // Uses external function
    }
};


// ----------------------------------
// DOT NOTATION
// ----------------------------------

// Dot notation is used to ACCESS properties or methods of an object.
// objectName.methodName();

bellBoy.moveSuitcase();


// This is also dot notation:
// bellBoy.name
// bellBoy.age
// bellBoy.languages


// ----------------------------------
// CONSTRUCTOR FUNCTION WITH A METHOD
// ----------------------------------

// A constructor function is used to create MULTIPLE objects
// with the same properties and methods.
//
// Naming rule:
// Constructor function names start with a CAPITAL letter.

function BellBoy(name, age, hasWorkPermit, languages) {

    // Properties
    this.name = name;
    this.age = age;
    this.hasWorkPermit = hasWorkPermit;
    this.languages = languages;

    // Method
    // "this" refers to the object being created
    this.moveSuitcase = function () {
        alert("May I take your suitcase?");
        pickUpSuitcase();
        moveBy();
    };
}


// ----------------------------------
// CREATING A NEW OBJECT USING "new"
// ----------------------------------

// The "new" keyword:
// 1. Creates a new empty object
// 2. Binds "this" to that object
// 3. Runs the constructor function
// 4. Returns the new object

var bellBoy1 = new BellBoy(
    "John",
    21,
    true,
    ["English", "Spanish"]
);


// Calling the method using dot notation
bellBoy1.moveSuitcase();
