function fibonacciGenerator(n) {
    //Do NOT change any of the code above 👆
    var outPut = [];
    //Write your code here:
    
    if (n === 1) {
        outPut = [0];
    } else if (n === 2) {
        outPut = [0, 1];
    } else {
        outPut = [0, 1];
    }

    for (var i = 2; i < n; i++) {
        outPut.push(outPut[i - 1] + outPut[i - 2]);

    }

    return outPut;

    //Return an array of fibonacci numbers starting from 0.

    //Do NOT change any of the code below 👇
}

fibonacciGenerator(5);
