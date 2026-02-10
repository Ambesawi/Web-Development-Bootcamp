// Object literal example
// creating obeject calld houskeeper

 /** var houseKeeper1 = {
    yearsOfExperience: 12,
    name: "Jane",
    cleaningRepetoire: ["bathroom", "lobby", "bedromm"]
}
 **/

// Constructor Function for the object. 
// Its like creating a fuctory for the object house keeper
// In Constructor function the  first alphabet of the name has to be in capital leter 
function HouseKeeper1(yearsOfExperience, name, cleaningRepetoire){
    this.yearsOfExperience = yearsOfExperience;
    this.name = name;
    this.cleaningRepetoire = cleaningRepetoire;
}

// Initialise the  Object
var houseKeeper1 = new HouseKeeper1(9, "Tom", ["lobby", "bedroom"]);

