function getMilk(money) {
    console.log("leaveHouse");
    console.log("moveRight");

    console.log("buy " + calcBottles(money, 1.5) + " bottles of milk");
    // console.log("buy " + numberOfBottles + "bottles of milk");

    console.log("moveRight");
    console.log("enterHouse");

    return money % 1.5; //Reminder of this division

}

function calcBottles(startingMony, costPerBottles) {
 
    var numberOfBottles = Math.floor(startingMony / costPerBottles);
    return numberOfBottles;
}

getMilk(4);
