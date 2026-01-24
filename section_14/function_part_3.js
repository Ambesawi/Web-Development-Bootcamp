function getMilk(money) {
    console.log("leaveHouse");
    console.log("moveRight");

    console.log("buy " + calcBottles(money, 1.5) + " bottles of milk");
    //console.log("buy " + numberOfBottles + "bottles of milk");

    console.log("moveRight");
    console.log("enterHouse");

    return calcChang(money, 1.5);

}

function calcBottles(startingMony, costPerBottles) {
 
    var numberOfBottles = Math.floor(startingMony / costPerBottles);
    return numberOfBottles;
}

function calcChang(startingAmount, costPerBottles) {
    var chang = startingAmount % calcBottles;
    return chang;
}

console.log("hello master , her is your " + getMilk() + " change");
