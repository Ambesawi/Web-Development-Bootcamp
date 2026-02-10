function HouseKeeper(yearsOfExperience, name, cleaningRepetoire){
    this.yearsOfExperience = yearsOfExperience;
    this.name = name;
    this.cleaningRepetoire = cleaningRepetoire;
    this.clean = function(){
        alert("house get cleand");
    }
}

// crate a new object and call the cleaning mathed using dot notation
HouseKeeper.clean();