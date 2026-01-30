
function bottlesOfBeer(num) {

    while (num > 0) {

        console.log(num + " bottles of beer on the wall, " + num + " bottles of beer.");
        num--;
        if (num > 0) {
            console.log("Take one down and pass it around, " + num + " bottles of beer on the wall.")
        }
        else {
            console.log("Take one down and pass it around,  bottles of beer on the wall.")
            console.log("No more bottles of beer on the wall, no more bottles of beer.");
            console.log("Go to the store and buy some more, 99 bottles of beer on the wall.")
        }

    }
}

bottlesOfBeer(99);
