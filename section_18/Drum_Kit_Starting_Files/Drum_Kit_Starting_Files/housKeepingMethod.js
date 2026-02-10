function HouseKeeper(yearsOfExperience, name, cleaningRepetoire){
    this.yearsOfExperience = yearsOfExperience;
    this.name = name;
    this.cleaningRepetoire = cleaningRepetoire;
    this.clean = function(){
        alert("house get cleand");
    }
}

// crate a new object 
var houseKeeper1 = new HouseKeeper(12, "tinna", ["room"]);

// and call the cleaning mathed using dot notation
houseKeeper1.clean();