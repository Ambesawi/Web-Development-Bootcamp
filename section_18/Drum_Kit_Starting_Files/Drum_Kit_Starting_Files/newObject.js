// ==============================
// OBJECT LITERAL EXAMPLE
// ==============================

// This is an object literal.
// We directly create an object and assign values to its properties.
// This method is fine when you only need ONE object.

var houseKeeper1 = {
    yearsOfExperience: 12,                 // Number of years the housekeeper has worked
    name: "Jane",                          // Name of the housekeeper
    cleaningRepetoire: [                  // Array of places she can clean
        "bathroom",
        "lobby",
        "bedroom"]
};


// ==============================
// CONSTRUCTOR FUNCTION
// ==============================

// A constructor function is like a FACTORY for creating objects.
// It allows you to create MULTIPLE objects with the same structure.
//
// Naming rule:
// Constructor function names MUST start with a Capital letter
// so JavaScript knows it is meant to create objects.

function HouseKeeper1(yearsOfExperience, name, cleaningRepetoire) {

    // "this" refers to the NEW object that will be created
    // when we use the "new" keyword.

    this.yearsOfExperience = yearsOfExperience;
    // Stores how many years of experience the housekeeper has

    this.name = name;
    // Stores the name of the housekeeper

    this.cleaningRepetoire = cleaningRepetoire;
    // Stores an array of areas the housekeeper can clean
}


// ==============================
// INITIALIZING (CREATING) AN OBJECT
// ==============================

// The "new" keyword does 4 things:
// 1. Creates a new empty object
// 2. Sets "this" to point to that new object
// 3. Runs the constructor function
// 4. Returns the new object and assigns it to the variable

var houseKeeper1 = new HouseKeeper1(
    9,                              // yearsOfExperience
    "Tom",                          // name
    ["lobby", "bedroom"]            // cleaningRepetoire
);


// Now "houseKeeper1" is an object like this:
// {
//   yearsOfExperience: 9,
//   name: "Tom",
//   cleaningRepetoire: ["lobby", "bedroom"]
// }
